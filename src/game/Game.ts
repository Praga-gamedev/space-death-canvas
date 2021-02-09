import { InputManager, CONTROLS } from './core';
import { Player } from './entities';

export default class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private inputManager: InputManager;

    private width: number;
    private height: number;

    private lastTime: number;

    private player: Player;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        this.lastTime = performance.now();

        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.inputManager = new InputManager();

        this.player = new Player({
            ctx: this.ctx,
            pos: {
                x: (this.width - Player.width) / 2,
                y: (this.height - Player.height) / 2,
            },
        });
    }

    public start() {
        this.main();
    }

    private main() {
        // Главный цикл игры
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
        this.updateEntities();
    }

    private updateEntities() {
        // TODO: обновление координат всех сущностей и тд
    }

    private render() {
        this.ctx.translate(0, 0);
        // Чистим канвас
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.renderBackground();
        this.player.render();
    }

    private renderBackground() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    private checkControls(dt: number) {
        // Проверяем нажатие клавиш
        const { speed } = this.player;

        if (this.inputManager.isDown(CONTROLS.DOWN)) {
            this.player.y += dt * speed;
        }

        if (this.inputManager.isDown(CONTROLS.UP)) {
            this.player.y -= dt * speed;
        }

        if (this.inputManager.isDown(CONTROLS.LEFT)) {
            this.player.x -= dt * speed;
        }

        if (this.inputManager.isDown(CONTROLS.RIGHT)) {
            this.player.x += dt * speed;
        }

        if (this.inputManager.isDown(CONTROLS.SPACE)) {
            console.log('game:press_space', dt);
        }
    }

    public destroy() {
        // пока не используется, но в дальнейшем может пригодиться
        this.inputManager.destroy();
    }
}
