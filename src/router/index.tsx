import React, { memo } from 'react';
import { useValues } from 'kea';
import { Switch, Redirect, Route } from 'react-router-dom';
import {
    AuthorizedRoute,
    NotAuthorizedRoute,
    OfflineAvailableRoute,
} from './guards';

import { logic } from '@store/AuthPage';

import { Header } from '@components/Header';
import {
    AuthPage,
    RegistrationPage,
    GamePage,
    ForumPage,
    ForumThreadDialog,
    ProfilePage,
    NotFoundPage,
    ServerErrorPage,
} from '@pages';
import { LeaderboardPage } from '@pages/LeaderboardPage';

import { S } from './units';
import { tabs } from './tabs';

const NavigationRouter = memo(() => {
    const { isAuth } = useValues(logic);

    return (
        <S.Page>
            {isAuth && <Header tabs={tabs} />}

            <Switch>
                <NotAuthorizedRoute
                    path="/auth"
                    redirectTo="/game"
                    title="Авторизация"
                    component={AuthPage}
                />

                <NotAuthorizedRoute
                    path="/registration"
                    redirectTo="/game"
                    title="Регистрация"
                    component={RegistrationPage}
                />

                <OfflineAvailableRoute
                    path="/game"
                    redirectTo="/auth"
                    title="Space Death Canvas"
                    component={GamePage}
                />

                <AuthorizedRoute
                    exact
                    path="/forum"
                    redirectTo="/auth"
                    title="Форум"
                    component={ForumPage}
                />

                <AuthorizedRoute
                    path="/forum/:id"
                    redirectTo="/auth"
                    title="Форум"
                    component={ForumThreadDialog}
                />

                <AuthorizedRoute
                    path="/profile"
                    redirectTo="/auth"
                    title="Профиль"
                    component={ProfilePage}
                />

                <AuthorizedRoute
                    path="/leaderboard"
                    redirectTo="/auth"
                    title="Таблица лидеров"
                    component={LeaderboardPage}
                />

                <Route
                    path="/500"
                    title="Ошибка сервера!"
                    component={ServerErrorPage}
                />

                <Redirect exact from="/" to="/game" />

                <Route component={NotFoundPage} />
            </Switch>
        </S.Page>
    );
});

export default NavigationRouter;
