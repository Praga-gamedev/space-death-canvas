import Entity, { IEntityOptions } from '../Entity';
import spaceships from '@sprites/spaceships.png';
import { Sprite } from '@game/core';
import { rotate } from '@game/core/utils';
import { StartPosition } from '@game/entities/types';

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

    setRandomStartPosition(ctx: CanvasRenderingContext2D) {
        const width = ctx.canvas.width;
        const height = ctx.canvas.height;
        this.startPos = Enemy.getRandomPosition();
        switch (this.startPos) {
            case 'top':
                this.pos.x = Math.random() * (width - Enemy.size.width);
                this.pos.y = -Enemy.size.height;
                break;
            case 'bottom':
                this.pos.x = Math.random() * (width - Enemy.size.width);
                this.pos.y = height + Enemy.size.height;
                break;
            case 'left':
                this.pos.x = -Enemy.size.width;
                this.pos.y = Math.random() * (height - Enemy.size.height);
                break;
            case 'right':
                this.pos.x = width;
                this.pos.y = Math.random() * (height - Enemy.size.height);
                break;
        }
    }

    updatePosition(dt: number) {
        if (this.startPos === 'top') {
            this.y += this.speed * dt;
        } else if (this.startPos === 'bottom') {
            this.y -= this.speed * dt;
        } else if (this.startPos === 'left') {
            this.x += this.speed * dt;
        } else {
            this.x -= this.speed * dt;
        }
    }

    private static getRandomPosition(): StartPosition {
        let position: StartPosition;
        const randomizer = Math.random();
        if (randomizer < 0.2) {
            position = 'top';
        } else if (randomizer > 0.2 && randomizer < 0.4) {
            position = 'bottom';
        } else if (randomizer > 0.4 && randomizer < 0.6) {
            position = 'right';
        } else {
            position = 'left';
        }
        return position;
    }
}
