import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import { Header } from '@components/Header';
import { AuthPage, NotFoundPage, GamePage, ProfilePage } from '@pages';

import { StyledPage } from './units';

import { tabs } from './tabs';

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
                    path="/leaderboard"
                    title="Таблица лидеров"
                    render={() => <div>Таблица лидеров</div>}
                />

                <Route
                    path="/game"
                    title="Space Death Canvas"
                    render={() => <GamePage />}
                />

                <Route
                    path="/forum"
                    title="Форум"
                    render={() => <div>Форум</div>}
                />

                <Route
                    path="/profile"
                    title="Профиль"
                    component={ProfilePage}
                />

                <Redirect exact from="/" to="/game" />

                <Route component={NotFoundPage} />
            </Switch>
        </StyledPage>
    );
};

export default NavigationRouter;
