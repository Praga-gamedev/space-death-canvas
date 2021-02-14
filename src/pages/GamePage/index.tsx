import React, { FC, useEffect, useRef, useState } from 'react';

import Game, { IGameState } from 'src/game';

import { StyledWrapperPage } from '@pages/units';
import { S } from '@pages/GamePage/units';

import { Button } from '@components';

export const GamePage: FC = () => {
    const canvas = useRef<HTMLCanvasElement>(null);

    const [game, setGame] = useState<Game | null>(null);
    const [gameState, setGameState] = useState<IGameState>({
        score: 0,
        isGameOver: false,
        isPaused: false,
    });
    const [isGameActive, setGameActive] = useState(false);

    useEffect(() => {
        if (canvas.current) {
            setGame(new Game(canvas.current, setGameState));
        }
    }, []);

    const startGame = () => {
        if (!game) return;

        setGameActive(true);
        game.play();
    };

    const restartGame = () => {
        if (!game) return;
        game.reset();
    };

    const togglePause = () => {
        if (!game) return;
        game.isPaused ? game.play() : game.pause();
    };

    return (
        <StyledWrapperPage background={true}>
            <S.MainBlock>
                <S.Score>Очки: {gameState.score}</S.Score>
                <S.GameDisplay>
                    <canvas
                        ref={canvas}
                        width={800}
                        height={500}
                        style={{
                            display: isGameActive ? undefined : 'none',
                        }}
                    />
                    <S.InformationBlock isActive={!isGameActive}>
                        <span>Перемещение: WASD или стрелками</span>
                        <span>Стрельба: пробел</span>
                    </S.InformationBlock>
                </S.GameDisplay>
                <S.ButtonsBlock>
                    {!isGameActive ? (
                        <Button onClick={startGame}>Старт</Button>
                    ) : gameState.isGameOver ? (
                        <Button onClick={restartGame}>Рестарт</Button>
                    ) : (
                        <Button onClick={togglePause}>
                            {gameState.isPaused ? 'Плей' : 'Пауза'}
                        </Button>
                    )}
                </S.ButtonsBlock>
            </S.MainBlock>
        </StyledWrapperPage>
    );
};