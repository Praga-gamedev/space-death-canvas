import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

const handleColorPlace = (place: number, grayColor: string) => {
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
            return grayColor;
    }
};

S.Row = styled.div`
    background: ${(props: { place: number } & ThemeType) => {
        return handleColorPlace(props.place, props.theme.GrayScale_40);
    }};

    border: ${(props: { place: number } & ThemeType) =>
        props.place <= 3
            ? ` 2px solid
        ${props.theme.GrayScale_40}`
            : 'none'};

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    color: ${(props: ThemeType) => props.theme.lightBlue};
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
