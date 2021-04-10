import React, { FC, useState, FormEvent } from 'react';
import { useActions, useValues } from 'kea';

import { useParams } from 'react-router';

import { Paper, Input, Button } from '@components';

import { logic } from '@store/ForumPage';

import { useMountEffect } from 'src/utils/hooks';

import { S } from '@pages/units';
import { S as SLocal } from './units';

import { IRouteParams } from './types';

// TODO: Доделать

export const Comment: FC = () => {
    const { getComments, postCreateComment } = useActions(logic);
    const { actualTopic, comments } = useValues(logic);

    const [comment, setComment] = useState('');

    const { id }: IRouteParams = useParams();

    useMountEffect(() => getComments(Number(id)));

    const handleCreateComment = async (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (comment) {
            await postCreateComment(comment, id);
        }

        setComment('');
    };

    return (
        <S.WrapperPage background={true}>
            <Paper
                style={{ padding: '10px 24px 24px' }}
                w={'80%'}
                maxw={'80%'}
                minw={'800px'}
            >
                <SLocal.CommentTitle>
                    <div>Автор: {actualTopic?.author_name}</div>
                    <div>Тема: {actualTopic?.name}</div>
                </SLocal.CommentTitle>

                <SLocal.Comments>
                    {comments.length === 0 ? (
                        <div>Нет комментариев к посту</div>
                    ) : (
                        comments.map((item: any, id: number) => (
                            <div key={id}>{item.message}</div>
                        ))
                    )}
                </SLocal.Comments>

                <SLocal.NewThemeFlex onSubmit={handleCreateComment}>
                    <Input
                        type={'text'}
                        name={'login'}
                        label={'Введите комментарий'}
                        onChange={({ target: { value } }) => setComment(value)}
                        value={comment}
                    />

                    <Button
                        style={{ margin: '36px 0px 0px 10px' }}
                        children={'Ответить'}
                        type="submit"
                    />
                </SLocal.NewThemeFlex>
            </Paper>
        </S.WrapperPage>
    );
};
