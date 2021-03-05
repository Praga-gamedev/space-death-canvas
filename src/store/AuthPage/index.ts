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
        setAuth: (value: boolean) => value,
        setOffline: (value: boolean) => value,
        setUser: (payload: IUserProps) => payload,

        setLoading: (value: boolean) => value,
    }),

    reducers: ({ actions }) => ({
        isAuth: [
            false,
            {
                [actions.setAuth]: (_: TState, value: boolean) => value,
            },
        ],
        isOffline: [
            false,
            {
                [actions.setOffline]: (_: TState, value: boolean) => value,
            },
        ],
        loading: [
            true,
            {
                [actions.setLoading]: (_: TState, bool: boolean) => bool,
            },
        ],
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
        user: [
            null,
            {
                [actions.setUser]: (_: TState, payload: IUserProps) => payload,
            },
        ],
    }),

    thunks: ({
        actions,
        getState,
    }: {
        actions: any;
        getState: () => TState;
    }) => ({
        logIn: async (login: string, password: string) => {
            try {
                actions.startLoadingAuth();

                const res: any = await auth({ login, password });

                if (res === 'OK') {
                    await actions.init();
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

        init: async () => {
            const { isAuth, loading } = getState();
            if (isAuth || loading) return;

            if (!navigator.onLine) {
                actions.setOffline(true);
                actions.setLoading(false);
                return;
            }

            actions.setLoading(true);

            try {
                const user = await getUser();

                actions.setUser(user);
                actions.setAuth(true);
            } catch (error) {
                console.error('__init__', error);
            } finally {
                actions.setLoading(false);
            }
        },

        logout: async () => {
            try {
                await logout();

                actions.setUser(null);
                actions.setAuth(false);
            } catch (error) {
                console.error(error);
            }
        },
    }),
});
