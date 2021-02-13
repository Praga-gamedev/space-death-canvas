import styled from '@emotion/styled';
import { scrollBarStyle } from '@pages/units';
import { colors } from 'src/colors';

export const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70%;
    height: 100%;
    max-width: 1000px;
    min-width: 500px;
    padding-top: 80px !important;

    background-color: ${colors.GrayScale_50};
    color: ${colors.GrayScale_0};
`;

export const Title = styled.h1`
    color: ${colors.GrayScale_20};
    margin-top: 2%;
`;

export const DataWindow = styled.div`
    height: auto;
    width: 80%;
    max-height: 70%;
    margin-top: 2%;
    border-radius: 15px;
    overflow-y: auto;
    font-family: 'Comfortaa', sans-serif;

    ${scrollBarStyle}
`;
