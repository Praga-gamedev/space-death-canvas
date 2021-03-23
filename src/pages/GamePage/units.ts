import styled from '@emotion/styled';

import { colors } from 'src/colors';

import { Button } from 'src/components';

export const S: Record<string, any> = {};

S.GameView = styled.div`
    font-family: 'Comfortaa', sans-serif;
    color: ${colors.GrayScale_0};
    margin-top: 80px;
    width: 100%;
    height: calc(100% - 80px);
    position: relative;
`;

S.GameCanvas = styled.canvas`
    width: 100%;
    height: 100%;
`;

S.Score = styled.div`
    position: absolute;
    left: 50%;
    top: 60px;
    font-size: 24px;
    color: ${colors.GrayScale_0};
    transform: translateX(-50%);
`;

S.StartScreen = styled.div`
    background-color: ${colors.GrayScale_100};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

S.StartScreenInfo = styled.div`
    font-size: 25px;
    text-align: center;
`;

S.Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

S.GameTitle = styled.div`
    font-size: 50px;
`;

S.GameOverDescription = styled.div`
    margin-top: 20px;
    font-size: 30px;
`;

S.ButtonGame = styled(Button)`
    margin-top: 20px;
`;

S.FullscreanIcon = styled.img`
    position: absolute;
    bottom: 40px;
    right: 40px;
    z-index: 100;
    cursor: pointer;
`;
