import React, { FC, useRef, useEffect } from 'react';
import Game from 'src/game';

export const GamePage: FC = () => {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const ctx = canvas?.current?.getContext('2d');
        if (!ctx) return;

        const game = new Game(ctx);
        game.start();
    }, [canvas]);

    return (
        <>
            <h2>Space Death Canvas</h2>
            <canvas ref={canvas} width={512} height={480}></canvas>
        </>
    );
};
