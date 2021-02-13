import styled from '@emotion/styled';
import { colors } from 'src/colors';

export const MainBlock = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: 100%;
    padding-top: 80px !important;
`;

export const GameDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
`;

export const InformationBlock = styled.div`
    display: ${({ isActive }: { isActive: boolean }) =>
        isActive ? 'flex' : 'none'};

    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
    background-color: ${colors.GrayScale_100};
    font-family: 'Comfortaa', sans-serif;
    color: ${colors.GrayScale_0};
`;
