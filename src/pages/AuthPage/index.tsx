import React, { useState, useEffect, FormEvent, memo } from 'react';
import { useActions, useValues } from 'kea';

import { Paper, Input, Button, Link } from '@components';

import { S } from '../units';

import { history } from '@store/initStore';
import { logic } from '@store/AuthPage';

export const AuthPage = memo(() => {
    const { logIn, checkLoginOfServer } = useActions(logic);
    const { isAuth } = useValues(logic);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        checkLoginOfServer();
    }, []);

    useEffect(() => {
        isAuth && history.push('/');
    }, [isAuth]);

    const onSubmitAuth = async (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (login && password) {
            await logIn(login, password);
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
