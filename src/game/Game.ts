import { InputManager, resources } from '@game/core';
import { Bullet, Entity, Player, Asteroid } from '@game/entities';

import { isBeyoundCanvasBorder, hasCollides } from '@game/core/utils';
import { IPosition } from '@game/entities/types';

import { colors } from 'src/colors';

import spaceships from '@sprites/spaceships.png';
import asteroids from '@sprites/asteroids.png';

const GOD_MODE = localStorage.getItem('GOD_MODE') === '1';

export interface IGameState {
    isGameOver: boolean;
    isPaused: boolean;
    initialized: boolean;
    score: number;
}

export default class Game {
    public isGameOver = false;
    public isPaused = false;
    public destroyed = false;
    public score = 0;
    public onUpdateGameState: ((state: IGameState) => void) | null | undefined;

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private inputManager: InputManager;

    private lastTime: number;
    // private gameTime: number = 0;

    private player: Player;

    private resourcesUnsubscribe = () => {};

    constructor(
        canvas: HTMLCanvasElement,
        onUpdateGameState?: (state: IGameState) => void
    ) {
        if (isDev) {
            // @ts-ignore
            window.game = this;
        }
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        this.lastTime = performance.now();

        this.inputManager = new InputManager();

        this.player = new Player({
            ctx: this.ctx,
            pos: this.getPlayerStartPosition(),
        });

        this.onUpdateGameState = onUpdateGameState;
        this.init();
    }

    get gameState() {
        return {
            isGameOver: this.isGameOver,
            isPaused: this.isPaused,
            initialized: this.initialized,
            score: this.score,
        };
    }

    get initialized() {
        return resources.isReady && !resources.isEmpty;
    }

    private emitGameState() {
        this.onUpdateGameState && this.onUpdateGameState(this.gameState);
    }

    private getPlayerStartPosition(): IPosition {
        return {
            x: (this.canvas.width - Player.size.width) / 2,
            y: this.canvas.height / 2,
            angle: -Math.PI / 2,
        };
    }

    private init() {
        if (this.initialized) {
            this.emitGameState();
            return this;
        }

        resources.load(spaceships);
        resources.load(asteroids);

        this.resourcesUnsubscribe = resources.onReady(() =>
            this.emitGameState()
        );

        return this;
    }

    public play() {
        if (!this.initialized || this.destroyed) return;

        this.isPaused = false;
        this.lastTime = performance.now();
        this.main();

        this.emitGameState();
        return this;
    }

    public gameOver() {
        if (this.isGameOver) return;

        this.isGameOver = true;
        this.emitGameState();
        return this;
    }

    // Reset game to original state
    public reset() {
        if (!this.initialized || this.destroyed) return;

        this.isGameOver = false;
        this.score = 0;

        Bullet.removeAll();
        Asteroid.removeAll();

        this.player.pos = this.getPlayerStartPosition();
        this.player.reset();

        this.isPaused ? this.play() : this.emitGameState();

        return this;
    }

    public pause() {
        if (!this.initialized || this.destroyed) return;

        this.isPaused = true;
        this.emitGameState();
        return this;
    }

    // Главный цикл игры
    private main() {
        if (this.isPaused || this.destroyed) return;
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
        requestAnimationFrame(() => {
            this.main();
        });
    }

    private update(dt: number) {
        // В этом методе обновляем все, что касается данных.
        this.checkControls(dt);
        if (!this.isGameOver) {
            this.player.update(dt);
        }
        this.updateEntities(dt);

        // Эта цифра по сути регулирует напор спавна
        // При ее уменьшении уменьшается и вероятность попадания случайного числа в заданный диапазон
        if (Math.random() < 0.01 && Asteroid.instances.length < 12) {
            const y = Math.random() * this.canvas.height;
            const x =
                Math.random() > 0.5 ? -Asteroid.maxRadius : this.canvas.width;

            // eslint-disable-next-line no-new
            new Asteroid({
                ctx: this.ctx,
                pos: { x, y },
            });
        }

        this.checkCollisions();
    }

    private updateEntities(dt: number) {
        for (let i = 0; i < Bullet.instances.length; i++) {
            const bullet = Bullet.instances[i];
            bullet.update(dt);

            if (isBeyoundCanvasBorder(this.ctx, bullet)) {
                Bullet.remove(i);
            }
        }

        for (let i = 0; i < Asteroid.instances.length; i++) {
            const asteroid = Asteroid.instances[i];
            asteroid.update(dt);
        }
    }

    private render() {
        this.ctx.translate(0, 0);
        // Чистим канвас
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.renderBackground();
        if (!this.isGameOver) {
            this.player.render();
        }

        this.renderEntities(Bullet.instances);
        this.renderEntities(Asteroid.instances);
    }

    private renderEntities(list: Entity[]) {
        for (let i = 0; i < list.length; i++) {
            list[i].render();
        }
    }

    private renderBackground() {
        this.ctx.fillStyle = colors.GrayScale_100;

        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private checkControls(dt: number) {
        if (!this.isGameOver) {
            this.player.controlHandler(this.inputManager.pressedKeys, dt);
        }
    }

    checkCollisions() {
        if (this.isGameOver) return;

        for (let i = 0; i < Asteroid.instances.length; i++) {
            const enemy = Asteroid.instances[i];
            for (let j = 0; j < Bullet.instances.length; j++) {
                const bullet = Bullet.instances[j];
                if (hasCollides(bullet, enemy)) {
                    Asteroid.remove(i);
                    i--;
                    Bullet.remove(j);
                    j--;
                    this.score += 200;
                    this.emitGameState();
                }
            }
            if (hasCollides(this.player, enemy) && !GOD_MODE) {
                this.gameOver();
            }
        }
    }

    public destroy() {
        this.inputManager.destroy();
        this.resourcesUnsubscribe();
        this.onUpdateGameState = null;

        Bullet.removeAll();
        Asteroid.removeAll();

        this.destroyed = true;
    }
}
