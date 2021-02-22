import Entity, { IEntityOptions } from '../Entity';
import { Gun } from '@game/equipments';
import { drawRotatedTriangle } from '@game/core/utils/canvas';

export default class Player extends Entity {
    static size = {
        height: 50,
        width: 30,
    };

    public size = { ...Player.size };
    public speed = 300;
    public gun: Gun;

    constructor(opts: IEntityOptions) {
        super(opts);

        this.gun = new Gun({ ctx: this.ctx, owner: this });
    }

    public render() {
        const { x, y, angle = 0 } = this.pos;
        this.ctx.save();
        this.ctx.fillStyle = 'gold';
        drawRotatedTriangle(this.ctx, x, y, this.width, this.height, angle);
    }

    public shoot() {
        return this.gun.shoot();
    }
}
