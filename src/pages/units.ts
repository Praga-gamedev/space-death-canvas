import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Button } from '@components';

import backgroundPicture from '@images/background.png';
import yaLogo from '@icons/yandex.svg';

import { colors } from 'src/colors';

export const S: Record<string, any> = {};

S.WrapperPage = styled.div`
    background-image: ${({ background }: { background: boolean }) =>
        background ? `url(${backgroundPicture})` : 'none'};

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;

S.WrapperErrorPage = styled(S.WrapperPage)`
    background: ${colors.GrayScale_100};
    flex-direction: column;
    align-items: center;
`;

S.ErrorMessage = styled.h1`
    color: ${colors.GrayScale_0};
    font-family: 'Comfortaa', sans-serif;
    text-align: center;
    margin: 50px;
`;

S.PaperColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
`;

S.TitlePage = styled.h1`
    color: ${colors.GrayScale_20};
`;

export const scrollBarStyle = css`
    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px transparent;
        border-radius: 15px;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px ${colors.secondary};
        border-radius: 15px;
    }
`;

S.YandexButton = styled(Button)`
    position: relative;
    text-align: left;
    padding-left: 20px;

    ::before {
        position: absolute;
        right: 14px;
        top: 8px;

        content: '';
        background: url(${yaLogo});
        background-size: cover;
        display: block;
        width: 30px;
        height: 30px;
        filter: invert(1);
    }
`;
