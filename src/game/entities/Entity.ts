import { IPosition } from './types';

export interface IEntityOptions {
    ctx: CanvasRenderingContext2D;
    pos: IPosition;
}

export default abstract class Entity {
    ctx: CanvasRenderingContext2D;
    pos: IPosition;

    constructor(opts: IEntityOptions) {
        const { ctx, pos } = opts;

        this.ctx = ctx;
        this.pos = pos;
    }

    abstract render(): void;
}
