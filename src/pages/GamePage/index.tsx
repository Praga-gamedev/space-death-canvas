import React, { FC, useEffect, useRef, useState } from 'react';
import Game from 'src/game';
import { StyledWrapperPage } from '@pages/units';
import {
    GameDisplay,
    InformationBlock,
    MainBlock,
} from '@pages/GamePage/units';
import { Button } from '@components';
import { colors } from 'src/colors';

export const GamePage: FC = () => {
    let game;

    const canvas = useRef<HTMLCanvasElement>(null);
    const gameDisplayRef = useRef<HTMLDivElement>(null);
    const pixelRatio = window.devicePixelRatio;

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [isGameActive, setGameActive] = useState(false);

    // вычисляем ширину и высоту канваса динамически в зависимости от размера экрана
    const displayWidth = Math.floor(pixelRatio * width);
    const displayHeight = Math.floor(pixelRatio * height);

    useEffect(() => {
        if (gameDisplayRef.current) {
            setWidth(gameDisplayRef.current.clientWidth);
            setHeight(gameDisplayRef.current.clientHeight);
        }
    }, []);

    const startGame = () => {
        if (!canvas.current) return;
        game = new Game(canvas.current);
        game.start();
    };

    return (
        <StyledWrapperPage background={true}>
            <MainBlock>
                <GameDisplay ref={gameDisplayRef}>
                    <canvas
                        ref={canvas}
                        width={displayWidth}
                        height={displayHeight}
                        style={{
                            width: 'inherit',
                            height: 'inherit',
                            display: isGameActive ? undefined : 'none',
                        }}
                    />
                    <InformationBlock isActive={!isGameActive}>
                        <span>Перемещение: WASD или стрелками</span>
                        <span>Стрельба: пробел</span>
                    </InformationBlock>
                </GameDisplay>
                <Button
                    style={{
                        backgroundColor: colors.secondary,
                    }}
                    onClick={() => {
                        setGameActive(true);
                        startGame();
                    }}
                >
                    {isGameActive ? 'Restart' : 'Start'}
                </Button>
            </MainBlock>
        </StyledWrapperPage>
    );
};
