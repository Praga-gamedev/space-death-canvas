import styled from '@emotion/styled';

import { colors } from 'src/colors';

import { IButtonProps } from './types';

export const S: Record<string, any> = {};

S.Button = styled.button`
    display: block;
    width: 250px;
    height: 50px;

    background-color: ${(props: IButtonProps) =>
        props.disabled ? colors.GrayScale_30 : 'transparent'};

    cursor: ${(props: IButtonProps) =>
        props.disabled ? 'not-allowed' : 'pointer'};

    border: 2px solid ${colors.secondary};
    border-radius: 15px;
    color: ${colors.GrayScale_0};
    transition: background-color 0.2s linear;

    &:hover:not(:disabled) {
        background-color: ${colors.secondary};
    }

    &:active:not(:disabled) {
        background-color: ${colors.secondaryAccent};
    }
`;
