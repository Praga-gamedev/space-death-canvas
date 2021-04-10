import styled from '@emotion/styled';

import { scrollBarStyle } from '@pages/units';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.CommentTitle = styled.div`
    background-color: ${(props: ThemeType) => props.theme.lightBlue};

    width: 100%;
    min-height: 150px;
    margin-bottom: 20px;
    padding: 20px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
`;

S.Comments = styled.div`
    background-color: ${(props: ThemeType) => props.theme.GrayScale_20};

    width: 100%;
    height: auto;
    max-height: calc(100% - 316px);
    font-family: 'Comfortaa', sans-serif;
    overflow-y: auto;
    padding: 10px;
    padding-bottom: 0px;
    border-radius: 12px;
    margin-bottom: 100px;

    ${scrollBarStyle}
`;

S.NewThemeFlex = styled.form`
    display: flex;
    justify-content: space-between;
`;
