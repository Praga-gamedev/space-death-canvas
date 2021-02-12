import { IMessageProps } from '@pages/ForumPage/components/ForumThreadDialog/Message/types';
import React, { FC } from 'react';
import {
    ContentSpan,
    InfoBlock,
    MainBlock,
    TimeSpan,
    UserNameSpan,
} from '@pages/ForumPage/components/ForumThreadDialog/Message/units';

export const Message: FC<IMessageProps> = ({
    content,
    userName,
    time,
    isIncoming,
}) => {
    return (
        <MainBlock isIncoming={isIncoming}>
            <UserNameSpan>{userName}</UserNameSpan>
            <InfoBlock>
                <ContentSpan>{content}</ContentSpan>
                <TimeSpan>{time}</TimeSpan>
            </InfoBlock>
        </MainBlock>
    );
};
