import styled from '@emotion/styled';
import { colors } from 'src/colors';

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 32px;
    width: 100%;

    background-color: ${({ isEven }: { isEven: boolean }) => {
        if (isEven === undefined) {
            return colors.secondary;
        } else if (isEven) {
            return colors.secondaryAccent;
        }
        return colors.GrayScale_20;
    }};

    color: ${({ isEven }: { isEven: boolean }) => {
        if (isEven === undefined) {
            return colors.secondaryAccent;
        } else if (isEven) {
            return colors.secondary;
        }
        return colors.GrayScale_0;
    }}; ;
`;

export const TextBlock = styled.div`
    width: 30%;
    padding-left: 20px;
`;

export const ScoreBlock = styled.div`
    width: 30%;
    text-align: center;
`;

export const EmptyBlock = styled.div`
    width: 40%;
`;
