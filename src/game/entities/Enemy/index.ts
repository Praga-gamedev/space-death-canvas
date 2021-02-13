import Entity from '../Entity';

export class Enemy extends Entity {
    static size = {
        height: 70,
        width: 40,
    };

    public speed = 100;

    public render() {
        const { x, y } = this.pos;

        this.ctx.save();
        this.ctx.fillStyle = '#4447E2';

        this.ctx.translate(x, y);
        this.ctx.fillRect(x, y, Enemy.size.width, Enemy.size.height);

        this.ctx.restore();
    }
}
