import Entity, { IEntityOptions } from '@game/entities/Entity';
import { Gun } from '@game/equipments';
import { Sprite } from '@game/core';
import { rotate } from '@game/core/utils';
import spaceships from '@sprites/spaceships.png';

export default class Player extends Entity {
    // теперь это не размеры от балды, а именно размеры спрайта из файла
    static size = {
        height: 65,
        width: 84,
    };

    public speed = 300;
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

    public shoot() {
        return this.gun.shoot();
    }
}
