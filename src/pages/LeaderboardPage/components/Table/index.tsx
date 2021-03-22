import React, { memo, useEffect } from 'react';
import { useActions, useValues } from 'kea';

import { logic } from 'src/store/LeaderboardPage';

import { Row } from './Row';
import { S } from './units';

export const Table = memo(() => {
    const { getLeaders } = useActions(logic);
    const { leaders } = useValues(logic);

    useEffect(() => {
        getLeaders();
    }, []);

    return (
        <S.Table>
            {leaders?.map(
                (
                    {
                        data: { name, sdcScore },
                    }: {
                        data: Record<string, any>;
                    },
                    id: number
                ) => (
                    <Row key={id} place={++id} name={name} score={sdcScore} />
                )
            )}
        </S.Table>
    );
});
