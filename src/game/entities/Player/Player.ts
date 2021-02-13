import Entity from '../Entity';

export default class Player extends Entity {
    static size = {
        height: 50,
        width: 30,
    };

    public size = { ...Player.size };
    public speed = 300;

    public render() {
        const { x, y } = this.pos;

        this.ctx.save();
        this.ctx.fillStyle = '#fff';

        this.ctx.beginPath();
        this.ctx.moveTo(x, y + this.height);
        this.ctx.lineTo(x + this.width / 2, y);
        this.ctx.lineTo(x + this.width, y + this.height);
        this.ctx.fill();
        this.ctx.closePath();

        this.ctx.restore();
    }
}
