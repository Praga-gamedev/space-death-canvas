import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

import arrow from '@icons/dropdown.svg';

import { ITabProps } from './types';

export const S: Record<string, any> = {};

S.Header = styled.header`
    background-color: ${(props: ThemeType) => props.theme.primary};

    border-bottom: 2px solid ${(props: ThemeType) => props.theme.secondary};

    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
`;

S.Tab = styled.div`
    background-color: ${(props: ThemeType) => props.theme.primary};

    color: ${(props: ITabProps & ThemeType) =>
        props.isActive ? props.theme.blue : props.theme.fontSecondary};

    &:hover {
        color: ${(props: ThemeType) => props.theme.blue};
    }

    cursor: pointer;
    margin: 0 10px;
    transition: color 0.2s linear;
    user-select: none;
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
