import React, { useState, useMemo } from 'react';

import { Theme, ForumButton } from '@pages/ForumPage/components';
import {
    ButtonBlock,
    ContentBlock,
    ContentWrapper,
    ThreadsWindow,
} from '@pages/ForumPage/units';

import { ButtonData, ThemeType } from '@pages/ForumPage/types';
import { StyledTitlePage, StyledWrapperPage } from '@pages/units';
import { Paper } from '@components';

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
        for (let i = 0; i < 15; i++) {
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
        <StyledWrapperPage background={true}>
            <Paper w={'70%'} maxw={'1000px'}>
                <StyledTitlePage
                    style={{
                        marginTop: '10%',
                        textAlign: 'center',
                    }}
                >
                    Форум
                </StyledTitlePage>
                <ContentWrapper>
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
                </ContentWrapper>
            </Paper>
        </StyledWrapperPage>
    );
};
