import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useActions } from 'kea';

import Game from 'src/game';
import { IGameState } from 'src/game/Game';

import { S as SGlobal } from '@pages/units';
import { S } from '@pages/GamePage/units';
import { Notification } from 'src/utils/notification';

import { useFullscreen, useEventListener } from 'src/utils/hooks';

import fullscreenIcon from '@icons/full-screen-icon.png';

import { logic } from '@store/LeaderboardPage';
import { isServer } from '@store/configureStore';

const windowObj = isServer ? ({} as Window) : window;

export const GamePage: FC = () => {
    const { postLeaderScore } = useActions(logic);

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

        const devW = windowObj.innerWidth;
        const devH = windowObj.innerHeight;

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
        if (!game || gameState.isGameOver) {
            return;
        }

        game.isPaused ? game.play() : game.pause();
    };

    useEffect(() => {
        if (!canvas.current) return;

        resizeGame(canvas.current);
        const onResize = () => resizeGame(canvas.current as HTMLCanvasElement);
        windowObj.addEventListener('resize', onResize, false);

        const game = new Game(canvas.current, setGameState);
        setGame(game);

        return () => {
            game.destroy();
            windowObj.removeEventListener('resize', onResize);
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

    useEventListener('keyup', pauseOnPressEscape, windowObj);

    useEffect(() => {
        if (!canvas.current) return;

        const needLock =
            !gameState.isPaused && !gameState.isGameOver && isGameActive;
        needLock
            ? canvas.current?.requestPointerLock()
            : document?.exitPointerLock();

        return () => {
            document?.exitPointerLock();
        };
    }, [
        canvas.current,
        gameState.isPaused,
        gameState.isGameOver,
        isGameActive,
    ]);

    useEffect(() => {
        gameState.isGameOver && postLeaderScore(gameState.score);
    }, [gameState.isGameOver]);

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
