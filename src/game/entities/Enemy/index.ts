import Entity, { IEntityOptions } from '../Entity';
import spaceships from '@sprites/spaceships.png';
import { Sprite } from '@game/core';
import { rotate } from '@game/core/utils';

export class Enemy extends Entity {
    static size = {
        height: 81,
        width: 58,
    };

    constructor(opts: IEntityOptions) {
        super(opts);
        this.size = { ...Enemy.size };
        this.sprite = new Sprite(
            spaceships,
            { x: 15, y: 277 },
            { x: this.width, y: this.height }
        );
    }

    public size = { ...Enemy.size };

    public speed = 100;

    public render() {
        const { x, y, angle = 180 } = this.pos;
        this.ctx.save();
        rotate(
            this.ctx,
            x,
            y,
            this.width,
            this.height,
            angle,
            (ctx: CanvasRenderingContext2D) => this.sprite!.render(ctx, true)
        );
    }
}
