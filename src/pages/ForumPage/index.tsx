import React, { useState, useMemo } from 'react';

import { Theme, ForumButton } from '@pages/ForumPage/components';
import {
    ButtonBlock,
    ContentBlock,
    MainBlock,
    ThreadsWindow,
} from '@pages/ForumPage/units';

import { ButtonData, ThemeType } from '@pages/ForumPage/types';

// заглушки с данными пока нет нашего апи
const buttonsData: ButtonData[] = [
    {
        id: 1,
        title: 'Монстры',
    },
    {
        id: 2,
        title: 'Корабли',
    },
    {
        id: 3,
        title: 'Оружие',
    },
    {
        id: 4,
        title: 'Новости',
    },
];

const themesData: ThemeType[] = [
    {
        id: '1',
        userName: 'spark888',
        content: 'Как убить летающего короля-бобра?',
    },
    {
        id: '2',
        userName: 'vasua4545',
        content: 'Что делать с кораблем уровня XXFHJFJF?',
    },
];

export const ForumPage = () => {
    const [currentForumId, setForumId] = useState(1);

    const themes = useMemo(() => {
        let result: any = [];
        let globalIndex = 0;
        for (let i = 0; i < 5; i++) {
            const themes = themesData.map((data, index) => (
                <Theme
                    id={data.id}
                    content={data.content}
                    userName={data.userName}
                    key={globalIndex++}
                    isEven={index % 2 === 0}
                />
            ));
            result = result.concat(themes);
        }
        return result;
    }, [themesData]);

    return (
        <MainBlock isRounding={false}>
            <ButtonBlock>
                {buttonsData.map((buttonData, index) => (
                    <ForumButton
                        key={index}
                        isClicked={buttonData.id === currentForumId}
                        onClick={() => setForumId(buttonData.id)}
                    >
                        {buttonData.title}
                    </ForumButton>
                ))}
            </ButtonBlock>
            <ContentBlock>
                <ThreadsWindow>{themes}</ThreadsWindow>
            </ContentBlock>
        </MainBlock>
    );
};
