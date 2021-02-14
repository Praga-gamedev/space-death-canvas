import styled from '@emotion/styled';

import { colors } from 'src/colors';

import arrow from '@icons/dropdown.svg';

import { ITabProps } from './types';

export const S: Record<string, any> = {};

S.Header = styled.header`
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

S.Tab = styled.div`
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

S.DropdownWrapper = styled.div`
    position: relative;
`;

S.DropdownArrow = styled.div`
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
