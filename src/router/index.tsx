import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Header } from '@components/Header';
import {
    AuthPage,
    NotFoundPage,
    GamePage,
    ForumPage,
    ForumThreadDialog,
} from '@pages';

import { StyledPage } from './units';
import { tabs } from './tabs';
import { LeaderBoard } from '@pages/LeaderBoard';

const NavigationRouter = () => {
    return (
        <StyledPage>
            <Header tabs={tabs} />

            <Switch>
                <Route
                    path="/info"
                    title="Информация"
                    render={() => <div>Информация</div>}
                />

                <Route
                    path="/auth"
                    title="Авторизация"
                    component={AuthPage}
                    // render={() => <div>Авторизация</div>}
                />

                <Route
                    path="/registration"
                    title="Регистрация"
                    render={() => <div>Регистрация</div>}
                />

                <Route
                    path="/game"
                    title="Space Death Canvas"
                    render={() => <GamePage />}
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
                    render={() => <div>Профиль</div>}
                />

                <Route
                    path="/leaderboard"
                    title="Таблица лидеров"
                    component={LeaderBoard}
                />

                <Redirect exact from="/" to="/game" />

                <Route component={NotFoundPage} />
            </Switch>
        </StyledPage>
    );
};

export default NavigationRouter;
