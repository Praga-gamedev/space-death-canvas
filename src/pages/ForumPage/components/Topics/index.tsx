import React, { FC, memo } from 'react';
import { useActions, useValues } from 'kea';

import { useMountEffect } from 'src/utils/hooks';

import { logic } from 'src/store/ForumPage';

import { Loader } from '@components';

import { Row } from './Row';

import { ITopics } from './types';
import { S } from './units';

export const Topics: FC = memo(() => {
    const { getTopics } = useActions(logic);
    const { topics, isLoading } = useValues(logic) as {
        topics: ITopics[];
        isLoading: boolean;
    };

    useMountEffect(getTopics);

    return (
        <S.Topics>
            {isLoading ? (
                <Loader />
            ) : topics.length === 0 ? (
                <div style={{ margin: '16px' }}>Создайте первый пост!</div>
            ) : (
                topics.map(
                    (
                        { id, author_name, name, date }: ITopics,
                        idKey: number
                    ) => (
                        <Row
                            key={idKey}
                            id={id}
                            name={author_name}
                            title={name}
                            date={date}
                        />
                    )
                )
            )}
        </S.Topics>
    );
});
