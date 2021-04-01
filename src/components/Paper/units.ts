import styled from '@emotion/styled';

import { ThemeType } from 'src/theme';

import { IPaperProps } from './types';

export const S: Record<string, any> = {};

S.Paper = styled.div`
    display: block;
    background-color: ${(props: ThemeType) => props.theme.primary};
    box-shadow: 8px 4px 30px rgba(0, 0, 0, 0.5);
    padding-top: 80px !important;
    color: ${(props: ThemeType) => props.theme.fontPrimary};
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }

    width: ${({ w }: IPaperProps) => w};
    height: ${({ h }: IPaperProps) => h};
    min-width: ${({ minw }: IPaperProps) => minw};
    max-width: ${({ maxw }: IPaperProps) => maxw};
    border-radius: ${({ isRounding }: IPaperProps) =>
        isRounding ? '15px' : '0px'};
`;
