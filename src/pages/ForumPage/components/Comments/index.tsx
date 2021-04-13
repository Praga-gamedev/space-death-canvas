import React, { FC, useState, FormEvent, memo } from 'react';
import { useActions, useValues } from 'kea';

import { useParams } from 'react-router';

import { Paper, Input, Button } from '@components';

import { logic } from '@store/ForumPage';

import { useMountEffect } from 'src/utils/hooks';

import { S } from '@pages/units';
import { S as SLocal } from './units';

import { Header } from './components';
import { IRouteParams } from './types';

// TODO: Доделать

export const Comment: FC = memo(() => {
    const {
        getComments,
        postCreateComment,
        postDeleteComment,
        chooseActualDialog,
    } = useActions(logic);
    const { comments } = useValues(logic);

    const [comment, setComment] = useState('');

    const { topicId }: IRouteParams = useParams();

    console.log(topicId);
    // const topicId = Number(id);

    useMountEffect(() => chooseActualDialog(Number(topicId)));
    useMountEffect(() => getComments(Number(topicId)));

    const handleCreateComment = async (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (comment) {
            await postCreateComment(comment, Number(topicId));
        }

        setComment('');
    };

    const handleDeleteComment = async (
        e: FormEvent<HTMLDivElement>,
        commentId: number
    ) => {
        // e.stopPropagation();

        postDeleteComment(Number(topicId), commentId);
    };

    return (
        <S.WrapperPage background={true}>
            <Paper
                style={{ padding: '10px 24px 24px' }}
                w={'80%'}
                maxw={'80%'}
                minw={'800px'}
            >
                <Header />

                <SLocal.Comments>
                    {comments.length === 0 ? (
                        <div>Нет комментариев к посту</div>
                    ) : (
                        comments.map((item: any, commentId: number) => (
                            <div
                                key={commentId}
                                onClick={(e) =>
                                    handleDeleteComment(e, commentId)
                                }
                                style={{ cursor: 'pointer' }}
                            >
                                {item.author_name}
                                {' : '}
                                {item.message}
                            </div>
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
});
