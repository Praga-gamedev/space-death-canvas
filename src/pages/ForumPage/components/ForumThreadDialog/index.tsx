import React, { useMemo } from 'react';

import { S } from '@pages/units';

import { Header } from './Header';
import { Message } from './Message';

import {
    Footer,
    MainBlock,
    MessageBlock,
    MessageInput,
    MessageList,
} from './units';
import { IMessageProps } from './Message/types';

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

            messageList = [...messageList, ...result];
        }
        return messageList;
    }, [messageData]);

    return (
        <S.WrapperPage background={true}>
            <MainBlock>
                <Header />

                <MessageBlock>
                    <MessageList>{messageList}</MessageList>
                </MessageBlock>

                <Footer>
                    <MessageInput placeholder={'Введите сообщение'} />
                </Footer>
            </MainBlock>
        </S.WrapperPage>
    );
};
