import React, { useState } from 'react';

import { useHistory } from 'react-router';

import { useFormatDateISO } from 'src/utils/hooks';

import { DeleteComment } from './DeleteComment';
import { IRow } from './types';
import { S } from './units';

export const Row = ({
    date,
    author_name,
    parent_id,
    message,
    topicId,
    id,
    children,
}: IRow) => {
    const [showDelete, setShowDelete] = useState(false);

    const history = useHistory();

    const [dateNumber, time] = useFormatDateISO(date);

    const openComment = (commentId: number) => {
        history.push(`/forum/${topicId}/${commentId}`);
    };

    return (
        <S.Row
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
            onClick={() => openComment(id)}
        >
            <S.CellAuthorDate>
                <S.Author>{author_name}</S.Author>
                <S.Hr />
                <div>{dateNumber}</div>
                <div>{time}</div>
            </S.CellAuthorDate>

            {children?.length > 0 && <S.CloudDots />}

            <S.CellTitle>{message}</S.CellTitle>

            <DeleteComment
                topicId={topicId}
                parentId={parent_id}
                commentId={id}
                showDelete={showDelete}
                name={author_name}
            />
        </S.Row>
    );
};
