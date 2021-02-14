import React, { FC } from 'react';

import { S } from './units';
import { IRowProps } from './types';

export const Row: FC<IRowProps> = ({ userName, score, isEven }) => {
    return (
        <S.Row isEven={isEven}>
            <S.TextBlock>{userName}</S.TextBlock>

            <S.EmptyBlock />
            
            <S.ScoreBlock>{score}</S.ScoreBlock>
        </S.Row>
    );
};
