import Entity from '../Entity';

export default class Player extends Entity {
    static height = 50;
    static width = 30;

    public speed = 300;

    public render() {
        const { x, y } = this.pos;

        this.ctx.save();
        this.ctx.fillStyle = '#fff';

        this.ctx.beginPath();
        this.ctx.moveTo(x, y + Player.height);
        this.ctx.lineTo(x + Player.width / 2, y);
        this.ctx.lineTo(x + Player.width, y + Player.height);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.restore();
    }
}
