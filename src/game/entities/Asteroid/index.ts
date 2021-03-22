import { resources } from '@game/core';
import { randomInteger, random } from '@game/core/utils';
import { IPosition } from '@game/entities/types';
import asteroids from '@sprites/asteroids.png';

import Entity, { IEntityOptions } from '../Entity';

export class Asteroid extends Entity {
    static minRadius = 35;
    static maxRadius = 130;

    static maxSpeed = 220;
    static minSpeed = 100;

    static instances: Asteroid[] = [];

    static remove(idx: number) {
        Asteroid.instances.splice(idx, 1);
    }

    static removeAll() {
        Asteroid.instances = [];
    }

    private spritePosition: IPosition;

    private rotateAngle = 0;
    private rotateSpeed = random(-1.5, 3);
    private speed = random(Asteroid.minSpeed, Asteroid.maxSpeed);

    private radius = random(Asteroid.minRadius, Asteroid.maxRadius);

    public size = {
        height: this.radius,
        width: this.radius,
    };

    constructor(opts: IEntityOptions) {
        super(opts);
        Asteroid.instances.push(this);

        this.angle = random(0, Math.PI * 2);
        // Получаем координаты рандомного астероида со спрайта
        this.spritePosition = this.getRandomSpritePosition();
    }

    public render() {
        this.ctx.save();
        this.ctx.fillStyle = '#FFF';
        this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        this.ctx.rotate(this.rotateAngle);
        this.drawSprite();
        this.ctx.restore();
    }

    private drawSprite() {
        this.ctx.drawImage(
            resources.get(asteroids),
            this.spritePosition.x,
            this.spritePosition.y,
            140,
            140,
            -this.width / 2,
            -this.height / 2,
            this.width,
            this.height
        );
    }

    private getRandomSpritePosition() {
        const col = randomInteger(0, 1);
        const row = randomInteger(0, 2);

        const RIGHT_OFFSET = 10;
        const BOTTOM_OFFSET = 20;
        const SPRITE_SIZE = 140;

        return {
            x: col * (SPRITE_SIZE + RIGHT_OFFSET),
            y: row * (SPRITE_SIZE + BOTTOM_OFFSET),
        };
    }

    public update(dt: number) {
        this.rotateAngle += this.rotateSpeed * dt;
        this.x += Math.cos(this.angle) * this.speed * dt;
        this.y += Math.sin(this.angle) * this.speed * dt;

        // Уход за канвас и появление с другой стороны
        if (this.x < -this.width) {
            this.x = this.ctx.canvas.width;
        }
        if (this.x > this.ctx.canvas.width) {
            this.x = -this.width;
        }
        if (this.y < -this.height) {
            this.y = this.ctx.canvas.height;
        }
        if (this.y > this.ctx.canvas.height) {
            this.y = -this.height;
        }
    }
}
