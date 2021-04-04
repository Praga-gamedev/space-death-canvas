import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

export const MainBlock = styled.div`
    background-color: ${(props: { isEven: boolean } & ThemeType) =>
        props.isEven ? props.theme.GrayScale_20 : props.theme.lightBlue};

    color: ${(props: { isEven: boolean } & ThemeType) =>
        props.isEven ? props.theme.GrayScale_0 : props.theme.blue};

    height: 54px;
    display: flex;
    cursor: pointer;
`;

export const UsernameBlock = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    align-items: center;
    padding-left: 24px;
`;

export const ThemeBlock = styled.div`
    display: flex;
    align-items: center;
    width: 70%;
    height: 100%;
    padding-top: 4px;
    padding-left: 16px;
`;

export const ThemeSpan = styled.span`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 5px;
`;
