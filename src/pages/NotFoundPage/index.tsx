import React from 'react';

import { history } from '@store/initStore';

import { Button } from '@components/Button';
import gif404 from '@images/404.gif';

import { StyledWrapperErrorPage, StyledErrorMessage } from '../units';

export const NotFoundPage = () => {
    return (
        <StyledWrapperErrorPage>
            <img
                src={gif404}
                alt="Page not found!"
                style={{ width: '600px', marginBottom: '90px' }}
            />
            <StyledErrorMessage>
                Вы вышли из коробля! Срочно вернитесь!
            </StyledErrorMessage>

            <Button children={'Вернуться'} onClick={() => history.push('/')} />
        </StyledWrapperErrorPage>
    );
};
