import React, { useEffect } from 'react';
import NavigationRouter from './router';

import { useActions, useValues } from 'kea';
import { logic } from '@store/AuthPage';

export const Main = () => {
    const { isAuth, isLoadingMain, isInit } = useValues(logic);
    const { init } = useActions(logic);

    useEffect(() => {
        init();
    }, [isAuth]);

    const appIsReady = isInit && !isLoadingMain;

    return appIsReady ? <NavigationRouter /> : <div>Крутилка</div>;
};
