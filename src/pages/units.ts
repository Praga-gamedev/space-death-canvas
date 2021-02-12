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

export const StyledPaperColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
`;

export const StyledTitlePage = styled.h1`
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
