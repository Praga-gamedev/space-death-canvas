import React, { FC } from 'react';
import { EmptyBlock, ScoreBlock, StyledRow, TextBlock } from './units';
import { IRowProps } from './types';

export const Row: FC<IRowProps> = ({ userName, score, isEven }) => {
    return (
        <StyledRow isEven={isEven}>
            <TextBlock>{userName}</TextBlock>
            <EmptyBlock />
            <ScoreBlock>{score}</ScoreBlock>
        </StyledRow>
    );
};
