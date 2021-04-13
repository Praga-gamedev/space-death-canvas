import React, { memo, useState } from 'react';

import { useHistory } from 'react-router';

import { useFormatDateISO } from 'src/utils/hooks';

import { DeleteTopic } from './DeleteTopic';

import { S } from './units';
import { IRow } from './types';

export const Row = memo(({ id, name, title, date }: IRow) => {
    const [showDelete, setShowDelete] = useState(false);

    const history = useHistory();

    const [dateNumber, time] = useFormatDateISO(date);

    const openComment = (e: Event) => {
        e.preventDefault();

        history.push(`/forum/${id}/null`);
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
