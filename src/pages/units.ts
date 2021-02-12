import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from 'src/colors';

export const StyledWrapperPage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
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
