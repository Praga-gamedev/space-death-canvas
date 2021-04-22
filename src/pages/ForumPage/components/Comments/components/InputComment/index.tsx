import React, { useState, FormEvent, memo } from 'react';
import { useActions } from 'kea';

import { Input, Button } from '@components';

import { logic } from '@store/ForumPage';

import { S } from './units';

export const InputComment = memo(
    ({ topicId, commentId }: Record<string, number>) => {
        const { postCreateComment } = useActions(logic);

        const [comment, setComment] = useState('');

        const handleCreateComment = async (e: FormEvent<HTMLDivElement>) => {
            e.preventDefault();

            if (comment) {
                await postCreateComment(comment, topicId, commentId);
            }

            setComment('');
        };

        return (
            <S.NewCommentFlex onSubmit={handleCreateComment}>
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
            </S.NewCommentFlex>
        );
    }
);
