import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

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
    return (
        <S.Page>
            <Header tabs={tabs} />

            <Switch>
                <Route
                    path="/info"
                    title="Информация"
                    render={() => <div>Информация</div>}
                />

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
