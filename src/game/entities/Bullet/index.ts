import Entity from '../Entity';

export class Bullet extends Entity {
    static size = {
        height: 8,
        width: 3,
    };

    public size = { ...Bullet.size };

    public speed = 500;

    public render() {
        const { x, y } = this.pos;

        this.ctx.save();
        this.ctx.fillStyle = '#FFF';

        this.ctx.moveTo(x, y);
        this.ctx.fillRect(x, y, this.width, this.height);

        this.ctx.restore();
    }
}
