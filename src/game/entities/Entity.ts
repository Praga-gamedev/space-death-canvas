import { IPosition } from './types';

export interface IEntityOptions {
    ctx: CanvasRenderingContext2D;
    pos: IPosition;
}

export default abstract class Entity {
    // Класс будет использоваться для любых сущностей, будть то враги, персонаж и тд
    // Сюда будем пихать логику рендера, обновления и тд
    ctx: CanvasRenderingContext2D;
    pos: IPosition;

    constructor(opts: IEntityOptions) {
        const { ctx, pos } = opts;

        this.ctx = ctx;
        this.pos = pos;
    }

    get x() {
        return this.pos.x;
    }

    set x(x: number) {
        this.pos.x = x;
    }

    get y() {
        return this.pos.y;
    }

    set y(y: number) {
        this.pos.y = y;
    }

    abstract render(): void;
}
