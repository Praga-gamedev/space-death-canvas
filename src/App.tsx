import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { RebootCss } from './globalStyles';

import store, { history } from './store/initStore';

import NavigationRouter from './router';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => (
    <>
        <RebootCss />

        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ErrorBoundary>
                    <NavigationRouter />
                </ErrorBoundary>
            </ConnectedRouter>
        </Provider>
    </>
);

export default App;
