import React, { useEffect } from 'react';
import NavigationRouter from './router';

import { useActions, useValues } from 'kea';
import { logic } from '@store/AuthPage';

export const Main = () => {
    const { isAuth, loading, initialized } = useValues(logic);
    const { init } = useActions(logic);

    useEffect(() => {
        init();
    }, [isAuth]);

    const appIsReady = initialized && !loading;

    return appIsReady ? <NavigationRouter /> : <div>Крутилка</div>;
};
