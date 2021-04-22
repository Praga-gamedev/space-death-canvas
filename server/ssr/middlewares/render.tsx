import React from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';

import { logic } from 'src/store/AuthPage';
import { configureStore, getInitialState } from 'src/store/configureStore';

import App from 'src/App';
import { IUserProps } from 'src/types/IUserProps';
import { getUserTheme } from 'src/api/theme';
import { Theme } from 'src/theme';

const setUser = (userData: IUserProps) => {
    logic.mount();
    logic.actions.setUser(userData);
    logic.actions.setAuth(true);
};

const setTheme = (theme: Theme) => {
    logic.mount();
    logic.actions.setTheme(theme);
};

const setStoreVariables = async (response: Response) => {
    const userData = response.locals.user;
    if (userData) {
        setUser(userData);
    }
    try {
        const themeData = await getUserTheme(userData?.login);
        if (themeData.status === 200) {
            setTheme(themeData.data.name);
        }
    } catch (error) {
        console.log('ERROR WHEN RETRIEVE THEME DATA ', error.message);
    }
};

function getHtml(reactHtml: string, reduxState = {}) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" type="image/png" href="/images/favicon.jpg">
        <title>Space Death Canvas</title>
        <link href="/main.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Ubuntu:wght@400;500&display=swap"
            rel="stylesheet">
    </head>
    <body>
        <div id="root">${reactHtml}</div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(reduxState).replace(
                /</g,
                '\\u003c'
            )}
        </script>
        <script src="/main.js"></script>
    </body>
    </html>
    `;
}

export const renderMiddleware = async (
    request: Request,
    response: Response
) => {
    const location = request.url;
    const context: StaticRouterContext = {};
    const { store } = configureStore(getInitialState(location), location);

    await setStoreVariables(response);

    const jsx = (
        <ReduxProvider store={store}>
            <StaticRouter context={context} location={location}>
                <App />
            </StaticRouter>
        </ReduxProvider>
    );
    const reactHtml = renderToString(jsx);
    const keaState = store.getState();

    if (context.url) {
        response.redirect(context.url);
        return;
    }

    const html = getHtml(reactHtml, keaState);

    response.status(context.statusCode || 200).send(html);
};
