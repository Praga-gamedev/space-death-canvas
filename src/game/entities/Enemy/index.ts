import Entity from '../Entity';

export class Enemy extends Entity {
    static size = {
        height: 70,
        width: 40,
    };

    public size = { ...Enemy.size };

    public speed = 100;

    public render() {
        const { x, y } = this.pos;

        this.ctx.save();
        this.ctx.fillStyle = '#4447E2';

        this.ctx.moveTo(x, y);
        this.ctx.fillRect(x, y, this.width, this.height);

        this.ctx.restore();
    }
}
