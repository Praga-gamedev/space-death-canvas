import styled from '@emotion/styled';

import { colors } from 'src/colors';

export const S: Record<string, any> = {};

S.Row = styled.div`
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
    }};

    display: flex;
    flex-direction: row;
    align-items: center;
    height: 54px;
    width: 100%;

    &:first-of-type {
        position: sticky;
        top: 0;
    }
`;

S.TextBlock = styled.div`
    width: 30%;
    padding-left: 30px;
`;

S.ScoreBlock = styled.div`
    width: 20%;
    text-align: center;
`;

S.EmptyBlock = styled.div`
    width: 50%;
`;
