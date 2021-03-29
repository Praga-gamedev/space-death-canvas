import React, { memo } from 'react';

import { useHistory } from 'react-router';

import { Button } from '@components/Button';

import gif500 from '@images/500.gif';

import { S } from '../units';

export const ServerErrorPage = memo(() => {
    const history = useHistory();

    return (
        <S.WrapperErrorPage>
            <img
                src={gif500}
                alt="Page not found!"
                style={{ height: '600px', marginBottom: '90px' }}
            />
            <S.ErrorMessage>
                На бортовом компьютере сбой!
                <br /> Наши дроиды работают над этим.
            </S.ErrorMessage>

            <Button
                children={'Обновить системы'}
                onClick={() => history.push('/')}
            />
        </S.WrapperErrorPage>
    );
});
