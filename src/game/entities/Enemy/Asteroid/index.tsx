import { Enemy } from '@game/entities';
import { IEntityOptions } from '@game/entities/Entity';
import { Sprite } from '@game/core';
import asteroids from '@sprites/asteroids.png';
import { IPosition } from '@game/entities/types';

export class Asteroid extends Enemy {
    constructor(opts: IEntityOptions) {
        super(opts);
        this.sprite = new Sprite(
            asteroids,
            { x: 313, y: 12 },
            { x: this.width, y: this.height }
        );
    }

    updatePosition(dt: number, playerPos: IPosition) {
        super.updatePosition(dt, playerPos);
        // астероиды, вылетевшие с разных сторон - крутятся в разные строны
        let rotationCoeff = 1;
        if (this.startPos === 'top' || this.startPos === 'left') {
            rotationCoeff = -1;
        }
        this.angle += rotationCoeff * Math.random() * this.speed * dt;
    }
}
