import { Entity } from '@game/entities';

const collides = (
    x: number,
    y: number,
    r: number,
    b: number,
    x2: number,
    y2: number,
    r2: number,
    b2: number
) => {
    return !(r <= x2 || x > r2 || b <= y2 || y > b2);
};

export const hasCollides = (entity1: Entity, entity2: Entity) => {
    if (entity1 && entity2) {
        const { x: x1, y: y1, height: height1, width: width1 } = entity1;
        const { x: x2, y: y2, height: height2, width: width2 } = entity2;

        return collides(
            x1,
            y1,
            x1 + width1,
            y1 + height1,
            x2,
            y2,
            x2 + width2,
            y2 + height2
        );
    }
    return false;
};
