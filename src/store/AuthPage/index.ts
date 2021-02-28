import { kea } from 'kea';

import { login as auth, logout, getUser } from '@api/auth';

import { TState, IUserProps } from '../types';

export const logic = kea({
    path: () => ['scenes', 'authPage'],
    actions: () => ({
        startLoadingAuth: () => undefined,
        setLoadingAuth: (loading: boolean) => loading,

        startLoadingUser: () => undefined,
        setLoadingUser: (loading: boolean) => loading,

        setError: (error: boolean) => error,
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
                /* Если выполняется данный экшн, то isLoading всегда будет false */
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
        error: [
            '',
            {
                [actions.setError]: (_: TState, payload: string) => payload,
            },
        ],
    }),

    thunks: ({ actions }: { actions: any }) => ({
        logIn: async (login: string, password: string) => {
            try {
                /*
                            isLoading при вызове данного экшна всегда будет true (начало загрузки),
                            используется как дефолт
                            */
                actions.startLoadingAuth();

                const res: any = await auth({ login, password });

                if (res === 'OK') {
                    actions.checkLoginOfServer();
                }

                /*
                            здесь уже можем манипулировать состояние isLoading, как хотим
                            В дальнейшем, стоит добавить лоудеры в кнопку и отдельные на страницы,
                            при запросе данных //TODO
                            */
                actions.setLoadingAuth(false);
            } catch (e) {
                actions.setError(e.response.data.reason);

                // TODO: Показать в Notification ошибку, если есть
            }
        },

        checkLoginOfServer: async () => {
            try {
                actions.startLoadingUser();
                actions.setUser(await getUser());
                actions.setAuth(true);
                actions.setLoadingUser(false);
            } catch (e) {
                actions.setError(e.response.data.reason);
                actions.setAuth(false);
            }
        },

        logOut: async () => {
            try {
                await logout();

                actions.setAuth(false);
                actions.setUser({});
            } catch (e) {
                actions.setError(e.response.data.reason);
            }

            // TODO: Здесь нужно сбросить все нотификейшны методом типа clearNotificationList()
        },
    }),
});
