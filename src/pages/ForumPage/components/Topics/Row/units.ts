import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.Row = styled.div`
    background-color: ${(props: ThemeType) => props.theme.GrayScale_40};

    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100px;
    font-size: 20px;
    color: ${(props: ThemeType) => props.theme.lightBlue};
    margin-bottom: 10px;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background-color: ${(props: ThemeType) => props.theme.primary};
    }
`;

S.CellAuthorDate = styled.div`
    background-color: ${(props: ThemeType) => props.theme.lightBlue};
    color: ${(props: ThemeType) => props.theme.GrayScale_40};
    border: 1px solid ${(props: ThemeType) => props.theme.GrayScale_40};

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 150px;
    font-size: 14px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 12px;
`;

S.CellTitle = styled.div`
    width: calc(100% - 150px);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0px 12px 0px 30px;
`;

S.Author = styled.div`
    font-weight: bold;
`;

S.Hr = styled.div`
    background-color: ${(props: ThemeType) => props.theme.GrayScale_20};

    width: 100%;
    height: 1px;
`;
