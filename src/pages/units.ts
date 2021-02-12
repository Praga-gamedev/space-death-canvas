import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from 'src/colors';

import backgroundPicture from '@images/background.png';

export const StyledWrapperPage = styled.div`
    background-image: ${({ background }: { background: boolean }) =>
        background ? `url(${backgroundPicture})` : 'none'};

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const StyledWrapperErrorPage = styled(StyledWrapperPage)`
    background: ${colors.GrayScale_100};
    flex-direction: column;
    align-items: center;
`;

export const StyledErrorMessage = styled.h1`
    color: ${colors.GrayScale_0};
    font-family: 'Comfortaa', sans-serif;
    text-align: center;
    margin: 50px;
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
        border-radius: 15px;
        -webkit-box-shadow: inset 0 0 6px ${colors.secondary};
    }
`;

export const StyledPaperColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
`;
