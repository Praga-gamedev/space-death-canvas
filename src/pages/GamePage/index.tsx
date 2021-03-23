import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import Game, { IGameState } from 'src/game';

import { S as SGlobal } from '@pages/units';
import { S } from '@pages/GamePage/units';
import { showInfoNotification } from 'src/utils/notification';

import { useFullscreen, useEventListener } from 'src/utils/hooks';

import fullscreenIcon from '@icons/full-screen-icon.png';

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
    const [, toggleFullscrean] = useFullscreen('#game-view');

    const resizeGame = (canvas: HTMLCanvasElement) => {
        const resW = 1024;
        const resH = 768;

        const devW = window.innerWidth;
        const devH = window.innerHeight;

        const scaleToCover = Math.max(devW / resW, devH / resH);
        canvas.width = Math.floor(devW / scaleToCover);
        canvas.height = Math.floor(devH / scaleToCover);
    };

    const startGame = () => {
        if (!game) {
            return;
        }

        setGameActive(true);
        game.play();

        showInfoNotification(
            'Игра началась!',
            'Управляйте кораблем и уничтожайте противников!'
        );
    };
    const restartGame = () => {
        if (!game) {
            return;
        }

        game.reset();
    };

    const togglePause = () => {
        if (!game || gameState.isGameOver) {
            return;
        }

        game.isPaused ? game.play() : game.pause();
    };

    useEffect(() => {
        if (!canvas.current) return;

        resizeGame(canvas.current);
        const onResize = () => resizeGame(canvas.current as HTMLCanvasElement);
        window.addEventListener('resize', onResize, false);

        const game = new Game(canvas.current, setGameState);
        setGame(game);

        return () => {
            game.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const pauseOnPressEscape = useCallback(
        (event: Event) => {
            const escapePressed = (event as KeyboardEvent).code === 'Escape';
            if (escapePressed && !gameState.isPaused) {
                togglePause();
            }
        },
        [game, gameState.isPaused, gameState.isGameOver]
    );

    useEventListener('keyup', pauseOnPressEscape, window);

    const showScore = isGameActive && !gameState.isGameOver;

    return (
        <SGlobal.WrapperPage background={true}>
            <S.GameView id="game-view">
                <S.GameCanvas ref={canvas} />

                {showScore && <S.Score>Очки: {gameState.score}</S.Score>}

                {!isGameActive && (
                    <S.StartScreen>
                        <S.StartScreenInfo>
                            <div>Перемещение: WASD или стрелками</div>
                            <div>Стрельба: пробел</div>
                        </S.StartScreenInfo>

                        <S.ButtonGame onClick={startGame}>Старт</S.ButtonGame>
                    </S.StartScreen>
                )}

                {gameState.isGameOver && (
                    <S.Overlay>
                        <S.GameTitle>Астероиды победили</S.GameTitle>
                        {!!gameState.score && (
                            <S.GameOverDescription>
                                Но вы набрали {gameState.score} очков
                            </S.GameOverDescription>
                        )}
                        <S.ButtonGame onClick={restartGame}>
                            Начать заново
                        </S.ButtonGame>
                    </S.Overlay>
                )}

                {gameState.isPaused && (
                    <>
                        <S.Overlay>
                            <S.GameTitle>Пауза</S.GameTitle>

                            <S.ButtonGame onClick={togglePause}>
                                Продолжить
                            </S.ButtonGame>
                        </S.Overlay>

                        <S.FullscreanIcon
                            src={fullscreenIcon}
                            onClick={toggleFullscrean}
                        />
                    </>
                )}
            </S.GameView>
        </SGlobal.WrapperPage>
    );
};
