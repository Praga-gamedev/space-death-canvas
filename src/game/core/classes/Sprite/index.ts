import { resources } from '@game/core';
import { IPosition } from '@game/entities/types';

type Direction = 'vertical' | 'horizontal';
type Size = { x: number; y: number };

// работа с классом подробно описана тут https://habr.com/ru/post/184666/

export class Sprite {
    url: string;
    pos: IPosition;
    size: Size;

    speed: number;
    frames?: number[];
    dir?: Direction;
    once?: boolean;

    private index: number = 0;
    private done: boolean = false;

    constructor(
        url: string,
        pos: IPosition,
        size: Size,
        frames?: number[],
        speed?: number,
        dir?: Direction,
        once?: boolean
    ) {
        this.pos = pos;
        this.size = size;
        this.speed = speed || 0;
        this.frames = frames;
        this.url = url;
        this.dir = dir || 'horizontal';
        this.once = once;
    }

    update(dt: number) {
        this.index += this.speed * dt;
    }

    render(ctx: CanvasRenderingContext2D, isRotated?: boolean) {
        let frame;

        // если speed = 0, то анимация отсутствует
        if (this.speed > 0 && this.frames && !this.done) {
            const max = this.frames.length;
            const idx = Math.floor(this.index);
            frame = this.frames[idx % max];

            if (this.once && idx >= max) {
                this.done = true;
                return;
            }
        } else {
            frame = 0;
        }

        let x = this.pos.x;
        let y = this.pos.y;

        const width = this.size.x;
        const height = this.size.y;

        if (this.dir === 'vertical') {
            y += frame * height;
        } else {
            x += frame * width;
        }

        /*
            Если требуется повернуть изображение, то точка начала отчета переносится в центр объекта.
            В этом случае устанавливаю флаг isRotated и изображение отображается корректно.
         */

        ctx.drawImage(
            // всегда можем обратиться к уже загруженным ресурсам
            resources.get(this.url),
            Math.floor(x),
            Math.floor(y),
            Math.floor(width),
            Math.floor(height),
            Math.floor(isRotated ? -width / 2 : 0),
            Math.floor(isRotated ? -height / 2 : 0),
            Math.floor(width),
            Math.floor(height)
        );
    }
}
