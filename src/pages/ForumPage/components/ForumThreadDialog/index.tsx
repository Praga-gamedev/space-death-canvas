import React, { useMemo } from 'react';
import {
    Footer,
    MainBlock,
    MessageBlock,
    MessageInput,
    MessageList,
} from '@pages/ForumPage/components/ForumThreadDialog/units';
import { Header } from '@pages/ForumPage/components/ForumThreadDialog/Header';
import { IMessageProps } from '@pages/ForumPage/components/ForumThreadDialog/Message/types';
import { Message } from '@pages/ForumPage/components/ForumThreadDialog/Message';
import { StyledWrapperPage } from '@pages/units';

// заглушки с данными пока нет нашего апи
const messageData: IMessageProps[] = [
    {
        userName: 'Test Testovich',
        content:
            'test test test test test test test test test test test test test test test test test test',
        time: '11:20',
        isIncoming: true,
        id: 1,
    },
    {
        userName: 'Test Testovich',
        content:
            'test test test test test test test test test test test test test test test test test test',
        time: '11:20',
        isIncoming: false,
        id: 1,
    },
];

export const ForumThreadDialog = () => {
    const messageList = useMemo(() => {
        let messageList: any = [];
        let globalKey = 0;
        for (let i = 0; i < 10; i++) {
            const result = messageData.map((messageData) => (
                <li style={{ display: 'flex' }} key={globalKey++}>
                    <Message {...messageData} />
                </li>
            ));
            messageList = messageList.concat(result);
        }
        return messageList;
    }, [messageData]);

    return (
        <StyledWrapperPage background={true}>
            <MainBlock>
                <Header />
                <MessageBlock>
                    <MessageList>{messageList}</MessageList>
                </MessageBlock>
                <Footer>
                    <MessageInput placeholder={'Введите сообщение'} />
                </Footer>
            </MainBlock>
        </StyledWrapperPage>
    );
};
