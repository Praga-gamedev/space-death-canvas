import React, { useState, FormEvent } from 'react';

import { Paper, Input, Button } from '@components';

import { createTopic, getTopicList } from '@api/forum';

import { S } from '@pages/units';
import { S as SForum } from './units';

export const ForumPage = () => {
    const [theme, setTheme] = useState('');

    const createTheme = async (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();

        console.log(theme);

        await getTopicList();

        await createTopic(theme);

        setTheme('');
    };

    return (
        <S.WrapperPage background={true}>
            <Paper
                style={{ padding: '0px 24px' }}
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

                <SForum.NewThemeFlex onSubmit={(e: any) => createTheme(e)}>
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
            </Paper>
        </S.WrapperPage>
    );
};
