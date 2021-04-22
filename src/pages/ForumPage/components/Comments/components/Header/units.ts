import styled from '@emotion/styled';

import backArrow from '@icons/return.svg';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.CommentTitle = styled.div`
    color: ${(props: ThemeType) => props.theme.secondary};

    position: relative;
    background: linear-gradient(
        45deg,
        rgba(144, 145, 238, 1) 43%,
        rgba(68, 71, 226, 1) 100%
    );
    width: 100%;
    min-height: 150px;
    height: auto;
    margin-bottom: 20px;
    padding: 20px 20px 40px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    word-wrap: break-word;
`;

S.CellAuthor = styled.div`
    font-style: italic;
`;

S.CellTheme = styled.div`
    font-size: 24px;
    text-align: center;
    margin-top: 10px;
    letter-spacing: 1px;
    font-weight: 500;
`;

S.BackBtn = styled.div`
    position: absolute;
    left: 20px;
    bottom: 12px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background-image: url(${backArrow});
    filter: invert(14%) sepia(26%) saturate(472%) hue-rotate(200deg)
        brightness(94%) contrast(89%);
    transition: filter 0.2s linear;

    &:hover {
        filter: invert(27%) sepia(42%) saturate(4165%) hue-rotate(232deg)
            brightness(89%) contrast(99%);
    }
`;
