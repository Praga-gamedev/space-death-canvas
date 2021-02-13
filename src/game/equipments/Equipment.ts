import { Entity } from '../entities';

export interface IEquipmentOptions {
    ctx: CanvasRenderingContext2D;
    owner: Entity;
}

export default abstract class Equipment {
    public ctx: CanvasRenderingContext2D;
    public owner: Entity;

    constructor(opts: IEquipmentOptions) {
        const { ctx, owner } = opts;

        this.ctx = ctx;
        this.owner = owner;
    }
}
