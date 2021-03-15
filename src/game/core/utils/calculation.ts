import { Entity } from '@game/entities';

export function radians(angle: number) {
    return (angle * Math.PI) / 180;
}

export function sin(angle: number) {
    return Math.sin(radians(angle));
}

export function cos(angle: number) {
    return Math.cos(radians(angle));
}

export function isBeyoundCanvasBorder(
    ctx: CanvasRenderingContext2D,
    entity: Entity
) {
    return (
        entity.x > ctx.canvas.width + entity.width ||
        entity.x + entity.width < 0 ||
        entity.y > ctx.canvas.height + entity.height ||
        entity.y + entity.height < 0
    );
}
