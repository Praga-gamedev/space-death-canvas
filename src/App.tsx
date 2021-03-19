import React from 'react';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'src/styles/notification.css';

import { RebootCss } from './global-styles';
import ErrorBoundary from './components/ErrorBoundary';
import NavigationRouter from 'src/router';

const App = () => (
    <>
        <RebootCss />
        <ReactNotification />
        <ErrorBoundary>
            <NavigationRouter />
        </ErrorBoundary>
    </>
);

export default App;
