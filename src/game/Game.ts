import { CONTROLS, InputManager } from '@game/core';
import { hasCollides, cos, sin, isBeyoundCanvasBorder } from '@game/core/utils';
import { Bullet, Enemy, Entity, Player } from '@game/entities';
import { IPosition } from '@game/entities/types';

import { colors } from 'src/colors';
import { Asteroid } from '@game/entities/Enemy/Asteroid';

export interface IGameState {
    isGameOver: boolean;
    isPaused: boolean;
    score: number;
}

export default class Game {
    public isGameOver = false;
    public isPaused = false;
    public score = 0;
    public onUpdateGameState: (state: IGameState) => void;

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private inputManager: InputManager;

    private width: number;
    private height: number;

    private lastTime: number;
    // private gameTime: number = 0;

    private player: Player;
    private enemies: Enemy[] = [];
    private bullets: Bullet[] = [];

    constructor(
        canvas: HTMLCanvasElement,
        onUpdateGameState?: (state: IGameState) => void
    ) {
        // @ts-ignore
        window.game = this;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        this.lastTime = performance.now();

        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.inputManager = new InputManager();

        this.player = new Player({
            ctx: this.ctx,
            pos: this.getPlayerStartPosition(),
        });

        this.onUpdateGameState = onUpdateGameState || (() => {});
    }

    get gameState() {
        return {
            isGameOver: this.isGameOver,
            isPaused: this.isPaused,
            score: this.score,
        };
    }

    private getPlayerStartPosition(): IPosition {
        return {
            x: (this.width - Player.size.width) / 2,
            y: this.height / 2,
            angle: 0,
        };
    }

    public play() {
        this.isPaused = false;
        this.lastTime = performance.now();
        this.main();
        return this;
    }

    public gameOver() {
        this.isGameOver = true;
        return this;
    }

    // Reset game to original state
    public reset() {
        this.isGameOver = false;
        this.score = 0;
        this.enemies = [];
        this.bullets = [];
        this.player.pos = this.getPlayerStartPosition();

        this.isPaused && this.play();

        return this;
    }

    public pause() {
        this.isPaused = true;
        this.onUpdateGameState(this.gameState);
        return this;
    }

    // Главный цикл игры
    private main() {
        if (this.isPaused) return;
        const now = performance.now();
        /*
            delta time нужен для того чтобы правильно обновлять координаты юнитов
            если делать player.x += 5 - это отработает по разному на разном железе
            тобишь если комп быстрый, циклов игры будет много, соответственно прибавится много раз по 5
            подробнее читайте в теории
            https://praktikum.yandex.ru/learn/middle-frontend/courses/8bf82b38-54ba-4c62-bd31-6a4b373c26d6/sprints/4936/topics/ce075e91-7953-4bef-8d5f-303f8264f2f0/lessons/e5aaa32a-38fa-442d-a658-5f796c169f39/
        */
        const dt = (now - this.lastTime) / 1000.0;

        this.update(dt);
        this.render();

        this.lastTime = now;
        // requestAnimationFrame более предпочтителен чем setInterval, в теории это также указано
        requestAnimationFrame(this.main.bind(this));
    }

    private update(dt: number) {
        // В этом методе обновляем все, что касается данных.
        this.checkControls(dt);
        this.updateEntities(dt);

        // Эта цифра по сути регулирует напор спавна
        // При ее уменьшении уменьшается и вероятность попадания случайного числа в заданный диапазон
        if (Math.random() < 0.01) {
            const asteroid = new Asteroid({
                ctx: this.ctx,
                pos: { x: 0, y: 0, angle: 0 },
            });
            asteroid.setRandomStartPosition(this.ctx);
            this.enemies.push(asteroid);
        }

        this.checkCollisions();
        this.onUpdateGameState(this.gameState);
    }

    private updateEntities(dt: number) {
        for (let i = 0; i < this.enemies.length; i++) {
            const enemy = this.enemies[i];
            enemy.updatePosition(dt, this.player.pos);
            if (isBeyoundCanvasBorder(this.ctx, enemy)) {
                this.enemies.splice(i, 1);
                i--;
            }
        }

        for (let i = 0; i < this.bullets.length; i++) {
            const bullet = this.bullets[i];

            bullet.y -= bullet.speed * dt * cos(bullet.angle);
            bullet.x += bullet.speed * dt * sin(bullet.angle);

            if (isBeyoundCanvasBorder(this.ctx, bullet)) {
                this.bullets.splice(i, 1);
                i--;
            }
        }
    }

    private render() {
        this.ctx.translate(0, 0);
        // Чистим канвас
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.renderBackground();
        if (!this.isGameOver) {
            this.player.render();
        }

        this.renderEntities(this.enemies);
        this.renderEntities(this.bullets);
    }

    private renderEntities(list: Entity[]) {
        for (let i = 0; i < list.length; i++) {
            list[i].render();
        }
    }

    private renderBackground() {
        this.ctx.fillStyle = colors.GrayScale_100;

        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    private checkControls(dt: number) {
        // Проверяем нажатие клавиш
        if (this.isGameOver) return;

        const { speed } = this.player;

        if (this.inputManager.isDown(CONTROLS.UP)) {
            this.player.y -= dt * speed * cos(this.player.angle);
            this.player.x += dt * speed * sin(this.player.angle);
        }

        if (this.inputManager.isDown(CONTROLS.LEFT)) {
            this.player.angle -= dt * speed;
        }

        if (this.inputManager.isDown(CONTROLS.RIGHT)) {
            this.player.angle += dt * speed;
        }

        if (this.inputManager.isDown(CONTROLS.SPACE)) {
            const bullet = this.player.shoot();
            if (!bullet) return;

            this.bullets.push(bullet);
        }
    }

    checkCollisions() {
        for (let i = 0; i < this.enemies.length; i++) {
            const enemy = this.enemies[i];

            for (let j = 0; j < this.bullets.length; j++) {
                const bullet = this.bullets[j];
                if (hasCollides(bullet, enemy)) {
                    this.enemies.splice(i, 1);
                    i--;

                    this.bullets.splice(j, 1);
                    j--;

                    this.score += 200;
                }
            }

            if (hasCollides(this.player, enemy)) {
                this.gameOver();
            }
        }
    }

    public destroy() {
        // пока не используется, но в дальнейшем может пригодиться
        this.inputManager.destroy();
    }
}
