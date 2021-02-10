import React from 'react';

import { Paper, Input, Button } from '@components';

import { StyledWrapperPage } from '../units';

export const AuthPage = () => {
    return (
        <StyledWrapperPage>
            <Paper style={{ padding: '30px' }}>
                <Input label={'Логин'} />
                <Input type={'password'} label={'Пароль'} />
                <Button style={{ margin: '30px auto 0 auto' }} children={'Войти'} />
            </Paper>
        </StyledWrapperPage>
    );
};
