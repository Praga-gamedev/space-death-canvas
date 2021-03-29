import React from 'react';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { RebootCss } from './global-styles';
import ErrorBoundary from './components/ErrorBoundary';
import NavigationRouter from 'src/router';

import { hot } from 'react-hot-loader/root';
import { IS_DEV } from '../webpack/env';

let App = () => (
    <>
        <RebootCss />
        <ReactNotification />
        <ErrorBoundary>
            <NavigationRouter />
        </ErrorBoundary>
    </>
);

App = IS_DEV ? hot(App) : App;

export default App;
