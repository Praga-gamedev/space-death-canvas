import PropTypes from 'prop-types';
import { kea } from 'kea';

import store from '../initStore';

export const logic = kea({
    path: () => ['scenes', 'authPage'],
    actions: () => ({
        startLoading: () => undefined,

        setLoading: (loading) => loading,
        setError: (error) => error,

        setAuth: (bool) => bool,
        setUser: (payload) => ({ ...payload }),
    }),
    reducers: ({ actions }) => ({
        isLoading: [
            null,
            PropTypes.bool,
            {
                [actions.setError]: () => false,
                [actions.setLoading]: (_, payload) => payload,
                [actions.startLoading]: () => true,
            },
        ],
        isAuth: [
            false,
            PropTypes.bool,
            { persist: true },
            {
                [actions.setAuth]: (_, payload) => payload,
            },
        ],
        user: [
            {},
            PropTypes.object,
            { persist: true },
            {
                [actions.setUser]: (_, payload) => payload,
            },
        ],
    }),
    thunks: ({ actions }) => ({
        logOut: () => {
            actions.setAuth(false);

            store.dispatch({
                type: 'RESET',
                state: { scenes: { authPage: { isAuth: false } } },
            });
        },
    }),
});
