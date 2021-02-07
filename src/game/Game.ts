export default class Game {
    private ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public start() {
        console.log(this.ctx);
    }
}
