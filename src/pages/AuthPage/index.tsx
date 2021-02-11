import React, { useState, MouseEvent } from 'react';

import { Paper, Input, Button, Link } from '@components';

import { StyledWrapperPage, StyledPaperColumn } from '../units';

export const AuthPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitAuth = (e: MouseEvent, login: string, password: string) => {
        e.preventDefault();

        console.log('Вход:', { login, password });
    };

    return (
        <StyledWrapperPage background={true}>
            <Paper style={{ padding: '80px' }}>
                <StyledPaperColumn>
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
                        style={{ margin: '60px auto 0 auto' }}
                        children={'Войти'}
                        onClick={(e) => onSubmitAuth(e, login, password)}
                    />

                    <Link
                        style={{ marginTop: '15px' }}
                        path={'/registration'}
                        children={'Регистрация'}
                    />
                </StyledPaperColumn>
            </Paper>
        </StyledWrapperPage>
    );
};
