import React, { FC, useState, FormEvent } from 'react';
import { useActions, useValues } from 'kea';

import { Paper, Input, Button } from '@components';

import { logic } from '@store/ForumPage';

import { useMountEffect } from 'src/utils/hooks';

import { Topics } from './components/Topics';

import { S } from '@pages/units';
import { S as SForum } from './units';

export const ForumPage: FC = () => {
    const { getTopics, postCreateTopic } = useActions(logic);

    const [theme, setTheme] = useState('');

    useMountEffect(getTopics);

    const handleCreateTheme = async (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();

        await postCreateTopic(theme);

        setTheme('');
    };

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

                <SForum.NewThemeFlex
                    onSubmit={(e: any) => handleCreateTheme(e)}
                >
                    <Input
                        type={'text'}
                        name={'login'}
                        label={'Введите название темы'}
                        onChange={({ target: { value } }) => setTheme(value)}
                        value={theme}
                    />

                    <Button
                        style={{ margin: '36px 0px 0px 10px' }}
                        children={'Создать тему'}
                        type="submit"
                    />
                </SForum.NewThemeFlex>

                <Topics />
            </Paper>
        </S.WrapperPage>
    );
};
