import styled from '@emotion/styled';

import { IThemeProps } from '@pages/ForumPage/components/Theme/types';
import { colors } from 'src/colors';

export const ThemeBlock = styled.div`
    height: 54px;
    display: flex;
    cursor: pointer;

    background-color: ${(props: { isEven: boolean }) =>
        props.isEven ? colors.GrayScale_20 : colors.secondaryAccent};
    color: ${(props: IThemeProps) =>
        props.isEven ? colors.GrayScale_0 : colors.secondary};
`;

export const UsernameBlock = styled.div`
    display: flex;
    width: 30%;
    height: 100%;
    align-items: center;
    padding-left: 24px;
`;

export const ThemeContent = styled.div`
    display: flex;
    height: 100%;
    padding-top: 4px;
    padding-left: 16px;
`;
