import React from 'react';
import { useActions, useValues } from 'kea';

import { logic as logicAuth } from '@store/AuthPage';
import { logic } from '@store/ForumPage';

import { IDeleteButton } from './types';
import { S } from './units';

export const DeleteTopic = ({ id, showDelete, name }: IDeleteButton) => {
    const { postDeleteTopic } = useActions(logic);
    const { user } = useValues(logicAuth);

    const handleDeleteTopic = async (e: Event) => {
        e.stopPropagation();

        await postDeleteTopic(id);
    };

    return user.login === name && showDelete ? (
        <S.Delete onClick={handleDeleteTopic}>Удалить</S.Delete>
    ) : null;
};
