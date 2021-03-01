import { kea } from 'kea';
import { store } from 'react-notifications-component';

import { login as auth, logout, getUser } from '@api/auth';

import { TState, IUserProps } from '../types';

export const logic = kea({
    path: () => ['scenes', 'authPage'],
    actions: () => ({
        startLoadingAuth: () => undefined,
        setLoadingAuth: (loading: boolean) => loading,

        startLoadingUser: () => undefined,
        setLoadingUser: (loading: boolean) => loading,

        setError: true,
        setAuth: (bool: boolean) => bool,
        setUser: (payload: IUserProps) => payload,
    }),
    reducers: ({ actions }) => ({
        isLoadingAuth: [
            null,
            {
                /* Если выполняется данный экшн, то isLoading всегда будет false */
                [actions.setError]: () => false,

                [actions.setLoadingAuth]: (_: TState, payload: boolean) =>
                    payload,
                [actions.startLoadingAuth]: () => true,
            },
        ],
        isLoadingUser: [
            null,
            {
                [actions.setError]: () => false,

                [actions.setLoadingUser]: (_: TState, payload: boolean) =>
                    payload,
                [actions.startLoadingUser]: () => true,
            },
        ],
        isAuth: [
            false,
            {
                [actions.setAuth]: (_: TState, payload: boolean) => payload,
            },
        ],
        user: [
            {},
            {
                [actions.setUser]: (_: TState, payload: IUserProps) => payload,
            },
        ],
    }),

    thunks: ({ actions }: { actions: any }) => ({
        logIn: async (login: string, password: string) => {
            try {
                actions.startLoadingAuth();

                const res: any = await auth({ login, password });

                if (res === 'OK') {
                    actions.checkLoginOfServer();
                }

                actions.setLoadingAuth(false);
            } catch (e) {
                actions.setError();

                store.addNotification({
                    title: 'Ошибка!',
                    message: e.response.data.reason,
                    type: 'danger',
                    insert: 'top',
                    container: 'bottom-right',
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    animationOut: ['animate__animated', 'animate__fadeOut'],
                    dismiss: {
                        duration: 5000,
                        onScreen: true,
                    },
                });
            }
        },

        checkLoginOfServer: async () => {
            try {
                actions.startLoadingUser();
                actions.setUser(await getUser());
                actions.setAuth(true);
                actions.setLoadingUser(false);
            } catch (e) {
                actions.setError();
            }
        },

        resetUser: () => {
            actions.setAuth(false);
            actions.setUser({});
        },

        logOut: async () => {
            try {
                await logout();

                actions.resetUser();
            } catch (e) {
                actions.setError();
            }
        },
    }),
});
