import { kea } from 'kea';

import store, { history } from '../initStore';

import { login as auth, logout, getUser } from '@api/auth';

export const logic = kea({
    path: () => ['scenes', 'authPage'],
    actions: () => ({
        startLoading: () => undefined,
        setLoading: (loading: boolean) => loading,
        setError: (error: boolean) => error,
        setAuth: (bool: boolean) => bool,
        setUser: (payload: object) => payload,
    }),
    reducers: ({ actions }) => ({
        isLoading: [
            null,
            {
                /* Если выполняется данный экшн, то isLoading всегда будет false */
                [actions.setError]: () => false,
                // @ts-ignore

                [actions.setLoading]: (_, payload) => payload,
                [actions.startLoading]: () => true,
            },
        ],
        isAuth: [
            false,
            { persist: true },
            {
                // @ts-ignore

                [actions.setAuth]: (_, payload) => payload,
            },
        ],
        user: [
            {},
            { persist: true },
            {
                // @ts-ignore

                [actions.setUser]: (_, payload) => payload,
            },
        ],
        error: [
            '',
            {
                // @ts-ignore

                [actions.setError]: (_, payload) => payload,
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
                actions.startLoading();

                const res: any = await auth({ login, password });

                if (res === 'OK') {
                    actions.setAuth(true);
                    actions.setUser(await getUser());

                    history.push('/game');
                }

                /*
                            здесь уже можем манипулировать состояние isLoading, как хотим
                            В дальнейшем, стоит добавить лоудеры в кнопку и отдельные на страницы,
                            при запросе данных //TODO
                            */
                actions.setLoading(false);
            } catch (e) {
                actions.setError(e.response.data.reason);

                // TODO: Показать в Notification ошибку, если есть
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

            /* 
                        при RESET нам нужно захардкодить состояния isAuth и user, т.к они хранятся
                        в localStorage и redux-reset полностью перезаписывает их.
                        см. https://www.npmjs.com/package/redux-reset и initStore (enhancers)
                        */
            store.dispatch({
                type: 'RESET',
                state: { scenes: { authPage: { isAuth: false, user: {} } } },
            });

            // TODO: Здесь нужно сбросить все нотификейшны методом типа clearNotificationList()
        },
    }),
});
