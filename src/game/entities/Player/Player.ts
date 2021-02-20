import Entity, { IEntityOptions } from '../Entity';
import { Gun } from '@game/equipments';
import { drawRotatedTriangle } from '@game/CanvasUtils';

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
        let { x, y, angle } = this.pos;
        if (!angle) {
            angle = 0;
        }
        this.ctx.save();
        this.ctx.fillStyle = 'gold';
        drawRotatedTriangle(this.ctx, x, y, this.width, this.height, angle);
    }

    public shoot() {
        return this.gun.shoot(this.angle);
    }
}
