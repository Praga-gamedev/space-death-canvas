// оригинальные комментарии с https://stackoverflow.com/questions/17125632/html5-canvas-rotate-object-without-moving-coordinates/17126036
export function drawRotatedRectangle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    degrees: number
) {
    // first save the untranslated/unrotated context
    ctx.save();
    ctx.beginPath();
    // move the rotation point to the center of the rect
    ctx.translate(x + width / 2, y + height / 2);
    // rotate the rect
    ctx.rotate((degrees * Math.PI) / 180);
    // draw the rect on the transformed context
    // Note: after transforming [0,0] is visually [x,y]
    //       so the rect needs to be offset accordingly when drawn
    ctx.fillRect(-width / 2, -height / 2, width, height);
    // restore the context to its untranslated/unrotated state
    ctx.restore();
}

export function drawRotatedTriangle(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    degrees: number
) {
    ctx.save();
    ctx.beginPath();
    ctx.translate(x + width / 2, y + (2 / 3) * height);
    ctx.rotate((degrees * Math.PI) / 180);
    ctx.moveTo(-width / 2, (1 / 3) * height);
    ctx.lineTo(0, -(2 / 3) * height);
    ctx.lineTo(width / 2, (1 / 3) * height);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
}
