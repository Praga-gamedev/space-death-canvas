import React, { FC, memo, useEffect } from 'react';
import { useActions, useValues } from 'kea';

import { useParams } from 'react-router';

import { Paper } from '@components';

import { logic } from '@store/ForumPage';

import { useMountEffect } from 'src/utils/hooks';

import { S } from '@pages/units';

import { Header, InputComment, CommentList } from './components';
import { IRouteParams } from './types';

export const Comment: FC = memo(() => {
    const { getComments, chooseActualDialog } = useActions(logic);
    const { comments } = useValues(logic);

    const { topicId, commentId } = useParams<IRouteParams>();
    const topicIdNum = Number(topicId);
    const commentIdNum = Number(commentId);

    useMountEffect(() => chooseActualDialog(topicIdNum, commentIdNum));
    useMountEffect(() => getComments(topicIdNum, commentIdNum));

    useEffect(() => {
        chooseActualDialog(topicIdNum, commentIdNum);

        getComments(topicIdNum, commentIdNum);
    }, [commentId]);

    return (
        <S.WrapperPage background={true}>
            <Paper
                style={{ padding: '10px 24px 24px' }}
                w={'80%'}
                maxw={'80%'}
                minw={'800px'}
            >
                <Header />

                <CommentList comments={comments} topicId={topicIdNum} />

                <InputComment topicId={topicIdNum} commentId={commentIdNum} />
            </Paper>
        </S.WrapperPage>
    );
});
