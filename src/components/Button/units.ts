import styled from '@emotion/styled';

import { IButtonProps } from './types';

export const StyledButton = styled.button`
    width: 250px;
    height: 50px;
    background-color: ${(props: IButtonProps) =>
        props.disabled ? '#e5e5e5' : '#000'};

    border: 2px solid #4447e2;
    border-radius: 15px;
    color: #fff;
    transition: background-color 0.2s linear;

    &:hover:not(:disabled) {
        background-color: #4447e2;
    }

    &:active:not(:disabled) {
        background-color: #8f91ee;
    }
`;
