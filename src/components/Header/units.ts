import styled from '@emotion/styled';

import { ITabProps } from './types';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 80px;
    background-color: #131419;
`;

export const StyledTab = styled.div`
    color: ${({ isActive }: ITabProps) => (isActive ? '#4447e2' : '#81818e')};

    background-color: #131419;
    cursor: pointer;
    margin: 0 10px;
    transition: color 0.2s linear;
    user-select: none;

    &:hover {
        color: #4447e2;
    }
`;
