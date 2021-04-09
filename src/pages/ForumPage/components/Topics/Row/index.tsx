import React, { memo, useState } from 'react';

import { format } from 'date-fns';

import { DeleteTopic } from './DeleteTopic';

import { S } from './units';
import { IRow } from './types';

export const Row = memo(({ id, name, title, date }: IRow) => {
    const [showDelete, setShowDelete] = useState(false);

    const dateNumber = format(new Date(date), 'dd/MM/yyyy');
    const time = format(new Date(date), 'HH:mm:ss');

    return (
        <S.Row
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
        >
            <S.CellAuthorDate>
                <S.Author>{name}</S.Author>
                <S.Hr />
                <div>{dateNumber}</div>
                <div>{time}</div>
            </S.CellAuthorDate>

            <S.CellTitle>{title}</S.CellTitle>

            <DeleteTopic id={id} showDelete={showDelete} name={name} />
        </S.Row>
    );
});
