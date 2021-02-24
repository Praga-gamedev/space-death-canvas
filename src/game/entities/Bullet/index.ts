import Entity from '../Entity';
import { rotate } from '@game/core';

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
        rotate(
            this.ctx,
            this.x,
            this.y,
            this.width,
            this.height,
            this.angle,
            (ctx) =>
                ctx.fillRect(
                    -this.width / 2,
                    -this.height / 2,
                    this.width,
                    this.height
                )
        );
    }
}
