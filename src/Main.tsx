import React, { useEffect } from 'react';
import { useActions, useValues } from 'kea';

import NavigationRouter from './router';

import { Notification } from 'src/utils/notification';

import { logic } from '@store/AuthPage';

export const Main = () => {
    const { isAuth, isLoadingMain, isInit, user } = useValues(logic);
    const { init } = useActions(logic);

    useEffect(() => {
        init();

        isAuth &&
            Notification({
                type: 'success',
                title: 'Вход',
                message: `Добро пожаловать ${user.login}!`,
            });
    }, [isAuth]);

    const appIsReady = isInit && !isLoadingMain;

    return appIsReady ? <NavigationRouter /> : <div>Крутилка</div>;
};
