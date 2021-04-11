import React, { memo, useState } from 'react';

import { useHistory } from 'react-router';

import { format } from 'date-fns';

import { DeleteTopic } from './DeleteTopic';

import { S } from './units';
import { IRow } from './types';

export const Row = memo(({ id, name, title, date }: IRow) => {
    const [showDelete, setShowDelete] = useState(false);

    const history = useHistory();

    const dateNumber = format(new Date(date), 'dd/MM/yyyy');
    const time = format(new Date(date), 'HH:mm:ss');

    const openComment = (e: Event) => {
        e.preventDefault();

        history.push(`/forum/${id}`);
    };

    return (
        <S.Row
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
            onClick={openComment}
        >
            <S.CellAuthorDate>
                <S.Author>{name}</S.Author>
                <S.Hr />
                <div>{dateNumber}</div>
                <div>{time}</div>
            </S.CellAuthorDate>

            <S.CellTitle>{title.toUpperCase()}</S.CellTitle>

            <DeleteTopic id={id} showDelete={showDelete} name={name} />
        </S.Row>
    );
});
