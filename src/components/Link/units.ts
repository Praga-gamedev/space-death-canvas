import styled from '@emotion/styled';

import { colors } from 'src/colors';

export const S: Record<string, any> = {};

S.Link = styled.label`
    color: ${colors.secondaryAccent};
    background: linear-gradient(${colors.secondary}, ${colors.secondary}) center
        bottom;
    background-size: 0% 2px;
    background-repeat: no-repeat;
    user-select: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        color: ${colors.secondary};
        background-size: 100% 2px;
    }

    &:active {
        color: ${colors.secondaryAccent};
    }
`;
