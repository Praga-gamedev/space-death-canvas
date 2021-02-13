import styled from '@emotion/styled';
import { colors } from 'src/colors';

export const MainBlock = styled.div`
    background-color: ${({ isEven }: { isEven: boolean }) =>
        isEven ? colors.GrayScale_20 : colors.secondaryAccent};

    color: ${({ isEven }: { isEven: boolean }) =>
        isEven ? colors.GrayScale_0 : colors.secondary};

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
