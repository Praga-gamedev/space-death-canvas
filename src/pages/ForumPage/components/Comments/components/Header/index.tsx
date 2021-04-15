import React, { FC } from 'react';
import { useValues } from 'kea';

import { useHistory } from 'react-router';

import { logic } from '@store/ForumPage';

import { S } from './units';

export const Header: FC = () => {
    const { actualTopic } = useValues(logic);

    const history = useHistory();

    const onReturn = () => {
        history.goBack();
    };

    return (
        <S.CommentTitle>
            <S.CellAuthor>Автор: {actualTopic?.author_name}</S.CellAuthor>
            <S.CellTheme>
                {actualTopic?.name?.toUpperCase() ||
                    actualTopic?.message?.toUpperCase()}
            </S.CellTheme>

            <S.BackBtn onClick={onReturn} />
        </S.CommentTitle>
    );
};
