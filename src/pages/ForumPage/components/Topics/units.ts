import styled from '@emotion/styled';

import { scrollBarStyle } from '@pages/units';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.Topics = styled.div`
    background-color: ${(props: ThemeType) => props.theme.GrayScale_20};

    width: 100%;
    height: auto;
    max-height: calc(100% - 316px);
    font-family: 'Comfortaa', sans-serif;
    overflow-y: auto;
    padding: 10px;
    padding-bottom: 0px;
    border-radius: 12px;

    ${scrollBarStyle}
`;
