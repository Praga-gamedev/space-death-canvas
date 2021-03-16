import Entity, { IEntityOptions } from '@game/entities/Entity';
import { Gun } from '@game/equipments';
import { Sprite, CONTROLS } from '@game/core';
import spaceships from '@sprites/spaceships.png';

export default class Player extends Entity {
    // теперь это не размеры от балды, а именно размеры спрайта из файла
    static size = {
        height: 65,
        width: 84,
    };

    public _speed = 0;
    public maxSpeed = 300;
    public minSpeed = -210;
    public rotateSpeed = 4;

    private acceleration = 8;
    private backAcceleration = 6;
    private antiAcceleration = 4;

    public gun: Gun;

    constructor(opts: IEntityOptions) {
        super(opts);
        this.size = { ...Player.size };
        this.sprite = new Sprite(
            spaceships,
            { x: 2, y: 20 },
            { x: this.width, y: this.height }
        );

        this.gun = new Gun({ ctx: this.ctx, owner: this });
    }

    public render() {
        const { x, y, angle = 0 } = this.pos;
        const { width, height } = this.size;
        this.ctx.save();
        this.ctx.translate(x + width / 2, y + height / 2);
        this.ctx.rotate(angle + Math.PI / 2);
        this.sprite?.render(this.ctx, true);
        this.ctx.restore();
    }

    public shoot() {
        return this.gun.shoot();
    }

    get speed() {
        return this._speed;
    }

    set speed(value: number) {
        if (value > this.maxSpeed) {
            this._speed = this.maxSpeed;
        } else if (value < this.minSpeed) {
            this._speed = this.minSpeed;
        } else {
            this._speed = value;
        }
    }

    public controlHandler(pressedKeys: Map<string, boolean>, dt: number) {
        if (pressedKeys.get(CONTROLS.UP)) {
            this.speed += this.acceleration;
        } else if (pressedKeys.get(CONTROLS.DOWN)) {
            this.speed -= this.backAcceleration;
        } else {
            if (this.speed > 0) {
                this.speed -= this.antiAcceleration;
            } else if (this.speed < 0) {
                this.speed += this.antiAcceleration;
            }
        }

        if (pressedKeys.get(CONTROLS.LEFT)) {
            this.angle -= dt * this.rotateSpeed;
        }

        if (pressedKeys.get(CONTROLS.RIGHT)) {
            this.angle += dt * this.rotateSpeed;
        }

        if (pressedKeys.get(CONTROLS.SPACE)) {
            this.shoot();
        }
    }

    public update(dt: number) {
        if (this.speed) {
            this.x += Math.cos(this.angle) * this.speed * dt;
            this.y += Math.sin(this.angle) * this.speed * dt;
        }

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
