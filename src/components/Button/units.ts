import styled from '@emotion/styled';

import { ButtonProps } from './types';

export const S: Record<string, any> = {};

S.Button = styled.button`
    background-color: ${(props: ButtonProps) =>
        props.disabled ? props.theme.GrayScale_30 : 'transparent'};

    cursor: ${(props: ButtonProps) =>
        props.disabled ? 'not-allowed' : 'pointer'};

    border: ${(props: ButtonProps) => `2px solid ${props.theme.blue}`};

    color: ${(props: ButtonProps) => props.theme.GrayScale_0};

    &:hover:not(:disabled) {
        background-color: ${(props: ButtonProps) => props.theme.blue};
    }

    &:active:not(:disabled) {
        background-color: ${(props: ButtonProps) => props.theme.lightBlue};
    }

    display: block;
    width: 250px;
    height: 50px;
    border-radius: 15px;
    transition: background-color 0.2s linear;
`;
