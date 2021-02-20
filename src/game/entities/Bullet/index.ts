import Entity from '../Entity';
import { drawRotatedRectangle } from '@game/CanvasUtils';

export class Bullet extends Entity {
    static size = {
        height: 25,
        width: 5,
    };

    public size = { ...Bullet.size };

    public speed = 500;

    private color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    public render() {
        this.ctx.save();
        this.ctx.fillStyle = this.color;
        drawRotatedRectangle(
            this.ctx,
            this.x,
            this.y,
            this.width,
            this.height,
            this.angle
        );
    }
}
