import React, { useState, FormEvent, memo } from 'react';

import { history } from '@store/initStore';

import { Paper, Input, Button, Link } from '@components';

import { login as auth, getUser as user } from '@api/auth';

import { S } from '../units';

export const AuthPage = memo(() => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitAuth = async (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (login && password) {
            try {
                await auth({ login, password });
                const res = await user();

                console.log('Данные:', res);

                history.push('/game');
            } catch (e) {
                console.log('Ошибка:', e);
            }
        } else {
            console.error('Неверный логин или пароль.');
        }
    };

    return (
        <S.WrapperPage background={true}>
            <Paper
                style={{ padding: '80px' }}
                onSubmit={(e) => onSubmitAuth(e)}
                as={'form'}
            >
                <S.PaperColumn>
                    {/* Заменим на логотип нашей игры, когда сделаем*/}
                    <label style={{ fontSize: '72px', marginBottom: '60px' }}>
                        LOGO
                    </label>

                    <Input
                        label={'Логин'}
                        onChange={({ target: { value } }) => setLogin(value)}
                    />

                    <Input
                        type={'password'}
                        label={'Пароль'}
                        onChange={({ target: { value } }) => setPassword(value)}
                    />

                    <Button
                        style={{ margin: '30px auto 0 auto' }}
                        children={'Войти'}
                    />

                    <Link
                        style={{ marginTop: '15px' }}
                        path={'/registration'}
                        children={'Регистрация'}
                    />
                </S.PaperColumn>
            </Paper>
        </S.WrapperPage>
    );
});
