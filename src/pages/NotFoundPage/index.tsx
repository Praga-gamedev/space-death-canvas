import React from 'react';

import { history } from '@store/initStore';

import { Button } from '@components/Button';

import gif404 from '@images/404.gif';

import { S } from '../units';

export const NotFoundPage = () => {
    return (
        <S.WrapperErrorPage>
            <img
                src={gif404}
                alt="Page not found!"
                style={{ width: '600px', marginBottom: '90px' }}
            />

            <S.ErrorMessage>
                Вы вышли из корабля! Срочно вернитесь!
            </S.ErrorMessage>

            <Button children={'Вернуться'} onClick={() => history.push('/')} />
        </S.WrapperErrorPage>
    );
};
