import React, { useState, FormEvent, memo } from 'react';
import { useActions, useValues } from 'kea';

import { Paper, Input, Button, Link } from '@components';

import { S } from '../units';

import { logic } from '@store/AuthPage';

export const AuthPage = memo(() => {
    const { logIn, logInOAuth } = useActions(logic);
    const { isLoadingAuth } = useValues(logic);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

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
                    {/* TODO: Заменим на логотип нашей игры, когда сделаем*/}
                    <label style={{ fontSize: '72px', marginBottom: '60px' }}>
                        LOGO
                    </label>

                    <Input
                        type={'text'}
                        name={'login'}
                        label={'Логин'}
                        onChange={({ target: { value } }) => setLogin(value)}
                    />

                    <Input
                        type={'password'}
                        name={'password'}
                        label={'Пароль'}
                        onChange={({ target: { value } }) => setPassword(value)}
                    />

                    <Button
                        style={{ margin: '30px auto 0 auto' }}
                        children={'Войти'}
                        disabled={isLoadingAuth}
                        type="submit"
                    />

                    <S.YandexButton
                        style={{ margin: '30px auto 0 auto' }}
                        children={'Войти с помощью'}
                        disabled={isLoadingAuth}
                        type="button"
                        onClick={logInOAuth}
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
