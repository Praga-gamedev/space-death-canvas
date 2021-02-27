import { FC } from 'react';
import styled from '@emotion/styled';

import { colors } from 'src/colors';

import arrow from '@icons/dropdown.svg';
import expandAlt from '@icons/expand-alt.svg';
import minimiseAlt from '@icons/minimise-alt.svg';

import { ITabProps, IFullScreenBtnProps } from './types';

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

export const FullScreenToggleBtn: FC<IFullScreenBtnProps> = styled.button`
    background-image: ${({ isFullScreen }: IFullScreenBtnProps) =>
        isFullScreen ? `url(${minimiseAlt})` : `url(${expandAlt})`};

    width: 25px;
    height: 25px;
    position: relative;
    margin-right: 50px;
    border-radius: 5px;
    border-color: ${colors.GrayScale_20};
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
`;
