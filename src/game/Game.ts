import { InputManager, CONTROLS } from './core';

export default class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    private inputManager: InputManager;

    private width: number;
    private height: number;

    private lastTime: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        this.lastTime = Date.now();

        this.width = canvas.width;
        this.height = canvas.height;

        this.inputManager = new InputManager();
    }

    public start() {
        this.main();
    }

    private main() {
        const now = Date.now();
        const dt = (now - this.lastTime) / 1000.0;

        this.update(dt);
        this.render();

        this.lastTime = now;
        requestAnimationFrame(this.main.bind(this));
    }

    private update(dt: number) {
        this.checkControls(dt);
    }

    private render() {}

    private checkControls(dt: number) {
        if (this.inputManager.isDown(CONTROLS.DOWN)) {
            console.log('Down', dt);
        }

        if (this.inputManager.isDown(CONTROLS.UP)) {
            console.log('Up', dt);
        }

        if (this.inputManager.isDown(CONTROLS.LEFT)) {
            console.log('Left', dt);
        }

        if (this.inputManager.isDown(CONTROLS.RIGHT)) {
            console.log('Right', dt);
        }
    }

    public destroy() {
        this.inputManager.destroy();
    }
}
