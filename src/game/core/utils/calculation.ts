export function radians(angle: number) {
    return (angle * Math.PI) / 180;
}

export function sin(angle: number) {
    return Math.sin(radians(angle));
}

export function cos(angle: number) {
    return Math.cos(radians(angle));
}
