import styled from '@emotion/styled';

import { scrollBarStyle } from '@pages/units';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.Comments = styled.div`
    background-color: ${(props: ThemeType) => props.theme.GrayScale_40};

    width: 100%;
    height: calc(100% - 316px);
    min-height: 400px;
    font-family: 'Comfortaa', sans-serif;
    overflow-y: auto;
    padding: 10px;
    border-radius: 12px;
    margin-bottom: 20px;
    text-align: center;

    ${scrollBarStyle}
`;


