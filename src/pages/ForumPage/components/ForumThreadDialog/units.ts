import { FC } from 'react';

import styled from '@emotion/styled';

import { colors } from 'src/colors';

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
    background-color: ${colors.GrayScale_50};

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
    background-color: ${colors.GrayScale_50};
`;

export const MessageInput: FC<IInputProps> = styled.input`
    height: 48px;
    width: 90%;
    background-color: ${colors.GrayScale_0};
    color: ${colors.GrayScale_100};

    padding: 0 20px;
    border: none;
    border-radius: 15px;
    font-size: 16px;

    &:focus {
        outline-width: 0;
        border: 2px solid ${colors.secondary};
    }
`;
