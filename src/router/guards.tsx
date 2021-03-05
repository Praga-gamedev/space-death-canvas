/* eslint-disable indent */
// Претир воюет с еслинтом
import React, { ComponentType, FC, useCallback } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { logic } from '@store/AuthPage';
import { useValues } from 'kea';

interface ProtectedRouteProps extends RouteProps {
    title?: string;
    redirectTo?: string;
}

const withProtect = <T extends object>(
    Component: ComponentType,
    condition: boolean,
    redirectTo: string
): FC<T> => (props) => {
    return condition ? <Component {...props} /> : <Redirect to={redirectTo} />;
};

export const AuthorizedRoute: FC<ProtectedRouteProps> = ({
    redirectTo = '/',
    ...restProps
}) => {
    const { isAuth } = useValues(logic);
    const ProtectedRoute = useCallback(withProtect(Route, isAuth, redirectTo), [
        isAuth,
    ]);

    return <ProtectedRoute {...restProps} />;
};

export const NotAuthorizedRoute: FC<ProtectedRouteProps> = ({
    redirectTo = '/',
    ...restProps
}) => {
    const { isAuth, isOffline } = useValues(logic);
    const ProtectedRoute = useCallback(
        withProtect(Route, !isAuth && !isOffline, redirectTo),
        []
    );

    return <ProtectedRoute {...restProps} />;
};

export const OfflineAvailableRoute: FC<ProtectedRouteProps> = ({
    redirectTo = '/',
    ...restProps
}) => {
    const { isAuth, isOffline } = useValues(logic);
    const ProtectedRoute = useCallback(
        withProtect(Route, isAuth || isOffline, redirectTo),
        [isAuth, isOffline]
    );

    return <ProtectedRoute {...restProps} />;
};
