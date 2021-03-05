import React, { useEffect } from 'react';
import NavigationRouter from './router';

import { useActions, useValues } from 'kea';
import { logic } from '@store/AuthPage';

export const Main = () => {
    const { isAuth, loading } = useValues(logic);
    const { init } = useActions(logic);

    useEffect(() => {
        init();
    }, [isAuth]);

    return loading ? <div>Крутилка</div> : <NavigationRouter />;
};
