import styled from '@emotion/styled';
import { colors } from 'src/colors';

export const S: Record<string, any> = {};

S.MainBlock = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    height: 100%;
    padding-top: 80px !important;
`;

S.GameDisplay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* временный хардкод */
    width: 800px;
    height: 500px;
`;

S.InformationBlock = styled.div`
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

S.ButtonsBlock = styled.div`
    margin-top: 20px;
`;

S.Score = styled.div`
    margin-bottom: 20px;
    font-size: 24px;
    color: ${colors.GrayScale_0};
`;
