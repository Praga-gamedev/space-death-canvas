import React from 'react';

import { ICommentData } from '@store/types';

import { Row } from './Row';
import { S } from './units';

export const CommentList = ({
    comments,
    topicId,
}: {
    comments: ICommentData[];
    topicId: number;
}) => {
    return (
        <S.Comments>
            {comments.length === 0 ? (
                <div>Нет комментариев к посту</div>
            ) : (
                comments.map(({ author_name, message, id, date }, idKey) => (
                    <Row
                        {...{
                            author_name,
                            message,
                            id,
                            date,
                            idKey,
                            topicId,
                        }}
                    />
                ))
            )}
        </S.Comments>
    );
};
