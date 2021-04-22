import styled from '@emotion/styled';

import { ThemeType } from '../../theme';

export const S: Record<string, any> = {};

S.Link = styled.label`
    color: ${(props: ThemeType) => props.theme.lightBlue};

    background: linear-gradient(
            ${(props: ThemeType) => props.theme.blue},
            ${(props: ThemeType) => props.theme.blue}
        )
        no-repeat center bottom;

    background-size: 0% 2px;
    user-select: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        color: ${(props: ThemeType) => props.theme.blue};
        background-size: 100% 2px;
    }

    &:active {
        color: ${(props: ThemeType) => props.theme.lightBlue};
    }
`;
