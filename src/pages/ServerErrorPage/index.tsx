import React from 'react';

import { history } from '@store/initStore';

import { Button } from '@components/Button';
import gif500 from '@images/500.gif';

import { StyledWrapperErrorPage, StyledErrorMessage } from '../units';

export const ServerErrorPage = () => {
    return (
        <StyledWrapperErrorPage>
            <img
                src={gif500}
                alt="Page not found!"
                style={{ height: '600px', marginBottom: '90px' }}
            />
            <StyledErrorMessage>
                На бортовом компьютере сбой!
                <br /> Наши дроиды работают над этим.
            </StyledErrorMessage>

            <Button children={'Обновить системы'} onClick={() => history.push('/')} />
        </StyledWrapperErrorPage>
    );
};
