import React, { memo } from 'react';
import { useActions, useValues } from 'kea';

import { useMountEffect } from 'src/utils/hooks';

import { logic } from 'src/store/LeaderboardPage';

import { Row } from './Row';
import { ILeaders } from '../../types';
import { S } from './units';

export const Table = memo(() => {
    const { getLeaders } = useActions(logic);
    const { leaders } = useValues(logic) as { leaders: ILeaders[] };

    useMountEffect(getLeaders);

    return (
        <S.Table>
            {leaders?.map(({ data: { name, sdcScore } }, id: number) => (
                <Row key={id} place={++id} name={name} score={sdcScore} />
            ))}
        </S.Table>
    );
});
