import styled from '@emotion/styled';

import { colors } from 'src/colors';

export const S: Record<string, any> = {};

const handleColorPlace = (place: number) => {
    switch (place) {
        case 1:
            return `linear-gradient(0deg,rgba(136, 142, 0, 1) 3%,
            rgba(45, 45, 58, 1) 75%,
            rgba(45, 45, 58, 1) 91%)`;
        case 2:
            return `linear-gradient(0deg, rgba(134,134,134,1) 3%,
            rgba(45,45,58,1) 75%,
            rgba(45,45,58,1) 91%)`;
        case 3:
            return `linear-gradient(0deg, rgba(142,91,0,1) 3%,
            rgba(45,45,58,1) 75%,
            rgba(45,45,58,1) 91%)`;
        default:
            return colors.GrayScale_40;
    }
};

S.Row = styled.div`
    background: ${({ place }: { place: number }) => {
        return handleColorPlace(place);
    }};
    border: ${({ place }: { place: number }) =>
        place <= 3
            ? ` 2px solid
        ${colors.GrayScale_40}`
            : 'none'};

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    color: ${colors.secondaryAccent};
    margin-bottom: 10px;
    padding-left: 30px;
    border-radius: 12px;
`;

S.Cell = styled.div`
    width: 33%;
`;

S.CellCenter = styled(S.Cell)`
    text-align: center;
`;
