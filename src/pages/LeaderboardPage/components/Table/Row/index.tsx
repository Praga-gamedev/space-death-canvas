import React, { memo } from 'react';

import { S } from './units';
import { IRow } from './types';

export const Row = memo(({ place, name, score }: IRow) => {
    return (
        <S.Row place={place}>
            <S.Cell>{place}</S.Cell>
            <S.Cell>{name}</S.Cell>
            <S.Cell style={{ textAlign: 'center' }}>{score}</S.Cell>
        </S.Row>
    );
});
