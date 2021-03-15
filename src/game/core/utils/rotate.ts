import { radians } from '@game/core/utils';

// вдохновлено https://stackoverflow.com/questions/17125632/html5-canvas-rotate-object-without-moving-coordinates/17126036

export function rotate(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    degrees: number,
    drawFunction: (ctx: CanvasRenderingContext2D) => void
) {
    ctx.save();
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(radians(degrees));
    ctx.beginPath();
    drawFunction(ctx);
    ctx.closePath();
    ctx.restore();
}
