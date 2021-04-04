import styled from '@emotion/styled';

import { ButtonProps } from './types';
import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

type ButtonThemeType = ButtonProps & ThemeType;

S.Button = styled.button`
    background-color: ${(props: ButtonThemeType) =>
        props.disabled ? props.theme.GrayScale_30 : 'transparent'};

    cursor: ${(props: ButtonThemeType) =>
        props.disabled ? 'not-allowed' : 'pointer'};

    border: ${(props: ButtonThemeType) => `2px solid ${props.theme.blue}`};

    color: ${(props: ButtonThemeType) => props.theme.GrayScale_0};

    &:hover:not(:disabled) {
        background-color: ${(props: ButtonThemeType) => props.theme.blue};
    }

    &:active:not(:disabled) {
        background-color: ${(props: ButtonThemeType) => props.theme.lightBlue};
    }

    display: block;
    width: 250px;
    height: 50px;
    border-radius: 15px;
    transition: background-color 0.2s linear;
`;
