import styled from '@emotion/styled';

import { S as SGlobal } from '@pages/units';

import { ThemeType } from 'src/theme';

import { Button } from 'src/components';

export const S: Record<string, any> = {};

S.Wrapper = styled(SGlobal.WrapperPage)`
    align-items: center;
`;

S.GameView = styled.div`
    display: none;
    font-family: 'Comfortaa', sans-serif;
    color: ${(props: ThemeType) => props.theme.GrayScale_0};
    margin-top: 80px;
    position: relative;
`;

S.GameCanvas = styled.canvas`
    width: 100%;
    height: 100%;
`;

S.Score = styled.div`
    color: ${(props: ThemeType) => props.theme.GrayScale_0};

    position: absolute;
    left: 50%;
    top: 60px;
    font-size: 24px;
    transform: translateX(-50%);
`;

S.StartScreen = styled.div`
    background-color: ${(props: ThemeType) => props.theme.GrayScale_100};

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
