import styled from '@emotion/styled';

import { scrollBarStyle } from '@pages/units';

import { colors } from 'src/colors';

export const S: Record<string, any> = {};

S.Table = styled.div`
    width: 100%;
    height: auto;
    max-height: 610px;
    font-family: 'Comfortaa', sans-serif;
    background-color: ${colors.GrayScale_20};
    overflow-y: auto;
    padding: 10px;
    padding-bottom: 0px;
    border-radius: 12px;

    ${scrollBarStyle};
`;
