import Entity from '../Entity';

export class Bullet extends Entity {
    static size = {
        height: 25,
        width: 5,
    };

    public size = { ...Bullet.size };

    public speed = 500;

    private color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    public render() {
        const { x, y } = this.pos;

        this.ctx.save();
        this.ctx.fillStyle = this.color;

        this.ctx.moveTo(x, y);
        this.ctx.fillRect(x, y, this.width, this.height);

        this.ctx.restore();
    }
}
