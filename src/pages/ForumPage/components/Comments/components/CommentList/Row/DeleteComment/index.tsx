import React, { FormEvent } from 'react';
import { useActions, useValues } from 'kea';

import { logic as logicAuth } from '@store/AuthPage';
import { logic } from '@store/ForumPage';

import { IDeleteButton } from './types';
import { S } from './units';

export const DeleteComment = ({
    topicId,
    commentId,
    showDelete,
    name,
}: IDeleteButton) => {
    const { postDeleteComment } = useActions(logic);
    const { user } = useValues(logicAuth);

    const handleDeleteComment = async (e: FormEvent<HTMLDivElement>) => {
        e.stopPropagation();

        postDeleteComment(topicId, commentId);
    };

    return user.login === name && showDelete ? (
        <S.Delete onClick={handleDeleteComment} />
    ) : null;
};
