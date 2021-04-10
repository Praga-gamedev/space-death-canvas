import React, { FC } from 'react';
import { useActions } from 'kea';

import { Paper } from '@components';

import { logic } from '@store/ForumPage';

import { useMountEffect } from 'src/utils/hooks';

import { S } from '@pages/units';

import { Topics, InputTheme } from './components';

export const ForumPage: FC = () => {
    const { getTopics } = useActions(logic);

    useMountEffect(getTopics);

    return (
        <S.WrapperPage background={true}>
            <Paper
                style={{ padding: '10px 24px 24px' }}
                w={'80%'}
                maxw={'80%'}
                minw={'800px'}
            >
                <S.TitlePage
                    style={{
                        margin: '90px 0px 40px',
                        textAlign: 'center',
                    }}
                >
                    Форум
                </S.TitlePage>

                <InputTheme />

                <Topics />
            </Paper>
        </S.WrapperPage>
    );
};
