// @ts-ignore
import PropTypes from 'prop-types';
import { kea } from 'kea';

import store from '../initStore';

export const logic = kea({
    path: () => ['scenes', 'authPage'],
    actions: () => ({
        startLoading: () => undefined,
        // @ts-ignore

        setLoading: (loading) => loading,
        // @ts-ignore

        setError: (error) => error,
        // @ts-ignore

        setAuth: (bool) => bool,
        // @ts-ignore

        setUser: (payload) => ({ ...payload }),
    }),
    reducers: ({ actions }) => ({
        isLoading: [
            null,
            PropTypes.bool,
            {
                [actions.setError]: () => false,
                // @ts-ignore

                [actions.setLoading]: (_, payload) => payload,
                [actions.startLoading]: () => true,
            },
        ],
        isAuth: [
            false,
            PropTypes.bool,
            { persist: true },
            {
                // @ts-ignore

                [actions.setAuth]: (_, payload) => payload,
            },
        ],
        user: [
            {},
            PropTypes.object,
            { persist: true },
            {
                // @ts-ignore

                [actions.setUser]: (_, payload) => payload,
            },
        ],
    }),
    // @ts-ignore

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
