import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

import cloud from '@icons/cloud-dots.svg';

export const S: Record<string, any> = {};

S.Row = styled.div`
    background-color: ${(props: ThemeType) => props.theme.lightBlue};
    color: ${(props: ThemeType) => props.theme.GrayScale_40};
    border: 1px solid ${(props: ThemeType) => props.theme.GrayScale_40};

    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    font-size: 20px;
    margin-bottom: 1px;
    cursor: pointer;
    transition: color 0.3s ease;
    text-align: left;

    &:hover {
        background: linear-gradient(
            90deg,
            rgba(144, 145, 238, 1) 43%,
            rgba(112, 114, 233, 1) 67%,
            rgba(68, 71, 226, 1) 100%
        );
        color: ${(props: ThemeType) => props.theme.GrayScale_0};
    }

    &:first-of-type {
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
    }

    &:last-of-type {
        border-bottom-right-radius: 12px;
        border-bottom-left-radius: 12px;
    }
`;

S.CellAuthorDate = styled.div`
    border-right: 1px solid ${(props: ThemeType) => props.theme.GrayScale_20};
    color: ${(props: ThemeType) => props.theme.GrayScale_40};

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 150px;
    font-size: 14px;
    padding: 12px;
`;

S.CellTitle = styled.div`
    width: calc(100% - 150px);
    word-wrap: break-word;
    padding: 0px 50px;
`;

S.Author = styled.div`
    color: ${(props: ThemeType) => props.theme.blue};

    font-weight: bold;
`;

S.Hr = styled.div`
    background-color: ${(props: ThemeType) => props.theme.GrayScale_20};

    width: 100%;
    height: 1px;
    margin-bottom: 5px;
`;

S.CloudDots = styled.div`
    position: absolute;
    left: 145px;
    top: 50%;
    width: 55px;
    height: 45px;
    transform: translate(0, -50%) scale(0.5);
    background-image: url(${cloud});
    background-position: center;
    background-repeat: no-repeat;
`;
