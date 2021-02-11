import React from 'react';
import {
    Footer,
    MainBlock,
    MessageBlock,
    MessageInput,
    MessageList,
} from '@pages/ForumPage/ForumThreadDialog/units';
import { Header } from '@pages/ForumPage/ForumThreadDialog/Header';
import { IMessageProps } from '@pages/ForumPage/ForumThreadDialog/Message/types';
import { Message } from '@pages/ForumPage/ForumThreadDialog/Message';

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

const getMessageList = () => {
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
};

export const ForumThreadDialog = () => {
    return (
        <MainBlock>
            <Header />
            <MessageBlock>
                <MessageList>{getMessageList()}</MessageList>
            </MessageBlock>
            <Footer>
                <MessageInput placeholder={'Введите сообщение'} />
            </Footer>
        </MainBlock>
    );
};
