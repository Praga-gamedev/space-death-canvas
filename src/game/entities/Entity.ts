import { IPosition, ISize } from './types';

export interface IEntityOptions {
    ctx: CanvasRenderingContext2D;
    pos: IPosition;
}

export default abstract class Entity {
    // Класс будет использоваться для любых сущностей, будть то враги, персонаж и тд
    // Сюда будем пихать логику рендера, обновления и тд
    public ctx: CanvasRenderingContext2D;
    public pos: IPosition;
    public size: ISize = { height: 0, width: 0 };

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

    get height() {
        return this.size.height;
    }

    get width() {
        return this.size.width;
    }

    abstract render(): void;
}
