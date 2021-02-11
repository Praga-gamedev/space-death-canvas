import styled from '@emotion/styled';
import { Paper } from '@components';
import { colors } from 'src/colors';
import { IPaperProps } from '@components/Paper/types';
import { FC } from 'react';

export const MainBlock: FC<IPaperProps> = styled(Paper)`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
`;

export const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 48px;

    width: 30%;
    height: 100%;
`;

export const ContentBlock = styled.div`
    width: 70%;
    height: 100%;
`;

export const ThreadsWindow = styled.div`
    width: 90%;
    height: auto;
    max-height: 70%;

    margin: 48px auto 0 auto;
    border-radius: 15px;
    overflow-y: auto;

    font-family: 'Comfortaa';

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
