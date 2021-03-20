import { getContext, resetContext } from 'kea';
import thunkPlugin from 'kea-thunk';
import { connectRouter, RouterState } from 'connected-react-router';
import { Reducer } from 'redux';
import { createBrowserHistory, createMemoryHistory } from 'history';

export const isServer = !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

export const getInitialState = (pathname: string = '/'): any => {
    return {
        router: {
            location: { pathname, search: '', hash: '', key: '' },
            action: 'POP',
        } as RouterState,
    };
};

export function configureStore(initialState: any, url = '/') {
    const history = isServer
        ? createMemoryHistory({ initialEntries: [url] })
        : createBrowserHistory();

    resetContext({
        createStore: {
            reducers: {
                router: connectRouter(history) as Reducer,
            },
        },
        defaults: initialState,
        plugins: [thunkPlugin],
    });

    const store = getContext().store;

    return { store, history };
}
