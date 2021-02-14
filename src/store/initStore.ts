import { resetContext, getContext } from 'kea';
import thunkPlugin from 'kea-thunk';
import localStoragePlugin from 'kea-localstorage';

import { Reducer } from 'redux';
import reduxReset from 'redux-reset';

import { connectRouter, routerMiddleware } from 'connected-react-router';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

resetContext({
    createStore: {
        reducers: {
            router: connectRouter(history) as Reducer,
        },

        middleware: [routerMiddleware(history)],
        enhancers: [reduxReset()],
    },
    plugins: [
        thunkPlugin,
        localStoragePlugin({
            prefix: 'app',
        }),
    ],
});

export default getContext().store;
