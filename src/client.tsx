import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { configureStore } from '@store/configureStore';
import App from 'src/App';

const initialState = window.__INITIAL_STATE__;

const { store, history } = configureStore(initialState);

ReactDOM.hydrate(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
