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
        const now = performance.now();
        const dt = (now - this.lastTime) / 1000.0;

        this.update(dt);
        this.render();

        this.lastTime = now;
        requestAnimationFrame(this.main.bind(this));
    }

    private update(dt: number) {
        this.checkControls(dt);
        this.updateEntities();
    }

    private updateEntities() {
        // console.log('game:update_entities', dt);
    }

    private render() {
        this.ctx.translate(0, 0);
        this.ctx.clearRect(0, 0, this.width, this.height);

        this.renderBackground();
        this.player.render();
    }

    private renderBackground() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    private checkControls(dt: number) {
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
        this.inputManager.destroy();
    }
}
