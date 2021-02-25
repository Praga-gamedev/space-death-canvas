import React, { useEffect, memo } from 'react';
import { useValues } from 'kea';
import { Route, Switch, Redirect } from 'react-router-dom';

import { history } from '@store/initStore';
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
import { LeaderBoard } from '@pages/LeaderBoard';

import { S } from './units';
import { tabs } from './tabs';

const NavigationRouter = memo(() => {
    const { isAuth } = useValues(logic);

    useEffect(() => {
        !isAuth && history.push('/auth');
    }, [isAuth]);

    return (
        <S.Page>
            {isAuth && <Header tabs={tabs} />}

            <Switch>
                <Route path="/auth" title="Авторизация" component={AuthPage} />

                <Route
                    path="/registration"
                    title="Регистрация"
                    component={RegistrationPage}
                />

                <Route
                    path="/game"
                    title="Space Death Canvas"
                    component={GamePage}
                />

                <Route
                    exact
                    path="/forum"
                    title="Форум"
                    component={ForumPage}
                />

                <Route
                    path="/forum/:id"
                    title="Форум"
                    component={ForumThreadDialog}
                />

                <Route
                    path="/profile"
                    title="Профиль"
                    component={ProfilePage}
                />

                <Route
                    path="/leaderboard"
                    title="Таблица лидеров"
                    component={LeaderBoard}
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
