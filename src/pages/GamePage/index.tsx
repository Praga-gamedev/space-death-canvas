import React, { FC, useEffect, useRef, useState } from 'react';

import Game, { IGameState } from 'src/game';

import { S as SGlobal } from '@pages/units';
import { S } from '@pages/GamePage/units';
import { Notification } from 'src/utils/notification';

export const GamePage: FC = () => {
    const canvas = useRef<HTMLCanvasElement>(null);

    const [game, setGame] = useState<Game | null>(null);
    const [gameState, setGameState] = useState<IGameState>({
        score: 0,
        isGameOver: false,
        isPaused: false,
        initialized: false,
    });
    const [isGameActive, setGameActive] = useState(false);

    useEffect(() => {
        if (!canvas.current) return;

        const game = new Game(canvas.current, setGameState);
        setGame(game);

        return () => {
            game.destroy();
        };
    }, []);

    const startGame = () => {
        if (!game) {
            return;
        }

        setGameActive(true);
        game.play();

        Notification({
            type: 'info',
            title: 'Игра началась!',
            message: 'Управляйте кораблем и уничтожайте противников',
        });
    };

    const restartGame = () => {
        if (!game) {
            return;
        }

        game.reset();
    };

    const togglePause = () => {
        if (!game) {
            return;
        }

        game.isPaused ? game.play() : game.pause();
    };

    return (
        <SGlobal.WrapperPage background={true}>
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

                {gameState.initialized && (
                    <S.ButtonsBlock>
                        {!isGameActive ? (
                            <S.ButtonGame onClick={startGame}>
                                Старт
                            </S.ButtonGame>
                        ) : gameState.isGameOver ? (
                            <S.ButtonGame onClick={restartGame}>
                                Рестарт
                            </S.ButtonGame>
                        ) : (
                            <S.ButtonGame onClick={togglePause}>
                                {gameState.isPaused ? 'Продолжить' : 'Пауза'}
                            </S.ButtonGame>
                        )}
                    </S.ButtonsBlock>
                )}
            </S.MainBlock>
        </SGlobal.WrapperPage>
    );
};
