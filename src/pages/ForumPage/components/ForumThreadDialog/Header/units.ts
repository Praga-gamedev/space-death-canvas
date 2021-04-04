import { FC } from 'react';
import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';
import right from '@icons/right.svg';
import { ButtonProps } from '@components/Button/types';

export const MainBlock = styled.div`
    background-color: ${(props: ThemeType) => props.theme.blue};

    color: ${(props: ThemeType) => props.theme.lightBlue};

    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 64px;
`;

export const ButtonBlock = styled.div`
    display: flex;
    align-items: center;
    width: 5%;
    height: 100%;
`;

export const UsernameBlock = styled.div`
    display: flex;
    align-items: center;
    width: 45%;
    height: 100%;
`;

export const ThemeBlock = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const ThemeSpan = styled.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 5px;
`;

export const HeaderButton: FC<ButtonProps> = styled.button`
    width: 25px;
    height: 25px;
    margin-left: 8px;
    border: none;
    background-image: url(${right});
    background-repeat: no-repeat;
    background-color: transparent;
`;
