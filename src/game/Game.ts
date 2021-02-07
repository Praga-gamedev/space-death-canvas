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
            pos: { x: this.width / 2, y: this.height / 2 },
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
        this.player.render();
    }

    private checkControls(dt: number) {
        if (this.inputManager.isDown(CONTROLS.DOWN)) {
            console.log('game:press_down', dt);
        }

        if (this.inputManager.isDown(CONTROLS.UP)) {
            console.log('game:press_up', dt);
        }

        if (this.inputManager.isDown(CONTROLS.LEFT)) {
            console.log('game:press_left', dt);
        }

        if (this.inputManager.isDown(CONTROLS.RIGHT)) {
            console.log('game:press_right', dt);
        }

        if (this.inputManager.isDown(CONTROLS.SPACE)) {
            console.log('game:press_space', dt);
        }
    }

    public destroy() {
        this.inputManager.destroy();
    }
}
