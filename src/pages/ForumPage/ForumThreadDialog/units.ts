import styled from '@emotion/styled';
import { colors } from 'src/colors';
import { Input, Paper } from '@components';
import { IInputProps } from '@components/Input/types';
import { FC } from 'react';

export const MainBlock = styled(Paper)`
    display: flex;
    flex-direction: column;
    width: 70%;

    margin-left: auto;
    margin-right: auto;

    box-shadow: none;
    background-color: transparent;
    font-family: 'Comfortaa', sans-serif;
`;

export const MessageBlock = styled.div`
    width: 100%;
    height: inherit;
    overflow-y: auto;
    background-color: ${colors.GrayScale_50};

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

export const MessageList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100px;

    background-color: ${colors.GrayScale_50};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

export const MessageInput: FC<IInputProps> = styled(Input)`
    height: 48px;
    width: 90%;
    background-color: ${colors.GrayScale_0};
    color: ${colors.GrayScale_100};
`;
