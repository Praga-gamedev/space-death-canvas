import styled from '@emotion/styled';

import { ITabProps } from './types';

import { colors } from 'src/colors';

import arrow from '@icons/dropdown.svg';

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: ${colors.GrayScale_50};
    border-bottom: 2px solid ${colors.GrayScale_40};
`;

export const StyledTab = styled.div`
    color: ${({ isActive }: ITabProps) =>
        isActive ? colors.secondary : colors.GrayScale_20};

    background-color: ${colors.GrayScale_50};
    cursor: pointer;
    margin: 0 10px;
    transition: color 0.2s linear;
    user-select: none;

    &:hover {
        color: ${colors.secondary};
    }
`;

export const StyledDropdownWrapper = styled.div`
    position: relative;
`;

export const StyledDropdownArrow = styled.div`
    transform: ${({ isOpen }: { isOpen: boolean }) =>
        isOpen ? 'rotate(-180deg)' : ''};

    width: 30px;
    height: 30px;
    margin-left: 50px;
    background-image: url(${arrow});
    background-position: center;
    background-repeat: no-repeat;
    transition: transform ease 0.2s;
    cursor: pointer;
`;
