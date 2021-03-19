import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/App';
import 'babel-polyfill';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore } from 'src/store/initStore';
import { Provider } from 'react-redux';

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
