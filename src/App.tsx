import React from 'react';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'src/styles/notification.css';

import { RebootCss } from './global-styles';

import { Main } from './Main';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
    <>
        <RebootCss />
        <ReactNotification />

        {/*<Provider store={store}>*/}
        {/*    <ConnectedRouter history={history}>*/}
        <ErrorBoundary>
            <Main />
        </ErrorBoundary>
        {/*    </ConnectedRouter>*/}
        {/*</Provider>*/}
    </>
);

export default App;
