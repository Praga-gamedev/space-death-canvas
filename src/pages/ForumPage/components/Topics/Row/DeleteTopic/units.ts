import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

export const S: Record<string, any> = {};

S.Delete = styled.div`
    color: ${(props: ThemeType) => props.theme.warningAccent};

    position: absolute;
    right: 10px;
    bottom: 6px;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
        color: ${(props: ThemeType) => props.theme.warning};
    }
`;
