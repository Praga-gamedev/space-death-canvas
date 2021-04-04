import { FC } from 'react';

import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

import { Paper } from '@components';
import { IInputProps } from '@components/Input/types';
import { scrollBarStyle } from '@pages/units';

export const MainBlock = styled(Paper)`
    display: flex;
    flex-direction: column;
    width: 70%;
    max-width: 1000px;
    min-width: 500px;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    font-family: 'Comfortaa', sans-serif;
`;

export const MessageBlock = styled.div`
    width: 100%;
    height: inherit;
    overflow-y: auto;
    background-color: ${(props: ThemeType) => props.theme.GrayScale_50};

    ${scrollBarStyle}
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
    background-color: ${(props: ThemeType) => props.theme.GrayScale_50};
`;

export const MessageInput: FC<IInputProps> = styled.input`
    height: 48px;
    width: 90%;
    background-color: ${(props: ThemeType) => props.theme.GrayScale_0};
    color: ${(props: ThemeType) => props.theme.GrayScale_100};

    padding: 0 20px;
    border: none;
    border-radius: 15px;
    font-size: 16px;

    &:focus {
        outline-width: 0;
        border: 2px solid ${(props: ThemeType) => props.theme.blue};
    }
`;
