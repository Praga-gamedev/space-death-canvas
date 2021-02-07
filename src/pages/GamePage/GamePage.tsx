import React, { FC, useRef, useEffect } from 'react';
import Game from '@/game';

export const GamePage: FC = () => {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvas.current) return;

        const game = new Game(canvas.current);
        game.start();
    }, [canvas]);

    return (
        <>
            <h2>Space Death Canvas</h2>
            <canvas ref={canvas} width={512} height={480}></canvas>
        </>
    );
};
