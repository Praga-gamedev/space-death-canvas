import React from 'react';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { ThemeProvider } from '@emotion/react';

import { RebootCss } from './global-styles';
import ErrorBoundary from './components/ErrorBoundary';
import NavigationRouter from 'src/router';

import { hot } from 'react-hot-loader/root';
import { IS_DEV } from '@webpack/env';
import { useValues } from 'kea';

import { logic } from '@store/AuthPage';
import { darkTheme, lightTheme, THEME } from 'src/theme';

let App = () => {
    const { theme } = useValues(logic);

    const themeColors = theme === THEME.DARK ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={themeColors}>
            <RebootCss />
            <ReactNotification />
            <ErrorBoundary>
                <NavigationRouter />
            </ErrorBoundary>
        </ThemeProvider>
    );
};

App = IS_DEV ? hot(App) : App;

export default App;
