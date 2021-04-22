import React, { FC, useState, FormEvent } from 'react';
import { useActions } from 'kea';

import { Input, Button } from '@components';

import { logic } from '@store/ForumPage';

import { S } from './units';

export const InputTheme: FC = () => {
    const { postCreateTopic } = useActions(logic);

    const [theme, setTheme] = useState('');

    const handleCreateTheme = async (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (theme) {
            await postCreateTopic(theme);
        }

        setTheme('');
    };

    return (
        <S.NewThemeFlex onSubmit={handleCreateTheme}>
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
        </S.NewThemeFlex>
    );
};
