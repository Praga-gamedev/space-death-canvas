import styled from '@emotion/styled';
import { scrollBarStyle } from '@pages/units';
import { colors } from 'src/colors';

export const MainBlock = styled.div`
    width: 70%;
    height: 100%;
    padding-top: 80px !important;
    background-color: ${colors.GrayScale_50};
    color: ${colors.GrayScale_0};
`;

export const Title = styled.h1`
    color: ${colors.GrayScale_20};
    margin-top: 2%;
    text-align: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    max-width: 1000px;
    max-height: 90%;
    margin: 1% auto 0 auto;
`;

export const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 48px;
    width: 30%;
    height: 100%;
`;

export const ContentBlock = styled.div`
    width: 70%;
    height: inherit;
`;

export const ThreadsWindow = styled.div`
    width: 90%;
    height: auto;
    max-height: 80%;
    margin: 48px auto 0 auto;
    border-radius: 15px;
    overflow-y: auto;
    font-family: 'Comfortaa', sans-serif;

    ${scrollBarStyle}
`;
