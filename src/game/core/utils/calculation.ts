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
    if (
        entity.x + entity.width > ctx.canvas.width ||
        entity.x + entity.width < 0
    ) {
        return true;
    }
    if (
        entity.y - entity.height > ctx.canvas.height ||
        entity.y + entity.height < 0
    ) {
        return true;
    }
    return false;
}
