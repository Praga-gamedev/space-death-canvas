import { kea } from 'kea';

import { Notification } from 'src/utils/notification';

import { getOAuthServiceCode, getUser, login as auth, logout } from '@api/auth';
import { registration } from '@api/registration';
import { updateAvatar, updatePassword, updateProfile } from '@api/profile';

import { IRegistrationData } from '@api/registration/types';
import { IPasswordUpdateData, IProfileUpdateData } from '@api/profile/types';

import { IInitOptions, IUserProps, TState } from '../types';
import { THEME, Theme } from 'src/theme';
import { HOST, PORT } from 'src/env';
import { IS_DEV } from '@webpack/env';

export const logic = kea({
    path: () => ['scenes', 'authPage'],

    actions: () => ({
        startLoadingAuth: () => undefined,
        setLoadingAuth: (loading: boolean) => loading,

        startLoadingUser: () => undefined,
        setLoadingUser: (loading: boolean) => loading,

        setLoadingRegistration: (loading: boolean) => loading,

        setError: true,
        setAuth: (value: boolean) => value,
        setOffline: (value: boolean) => value,
        setUser: (payload: IUserProps) => payload,

        setLoadingMain: (value: boolean) => value,
        setInit: (value: boolean) => value,

        toggleTheme: true,
        setTheme: (value: Theme) => value,
    }),

    reducers: ({ actions }) => ({
        theme: [
            null,
            {
                [actions.toggleTheme]: (state: Theme) => {
                    return state === THEME.DARK ? THEME.LIGHT : THEME.DARK;
                },
                [actions.setTheme]: (_: TState, value: Theme) => value,
            },
        ],
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
        isLoadingMain: [
            false,
            {
                [actions.setLoadingMain]: (_: TState, value: boolean) => value,
            },
        ],
        isInit: [
            false,
            {
                [actions.setInit]: (_: TState, value: boolean) => value,
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
        isLoadingRegistration: [
            false,
            {
                [actions.setLoadingRegistration]: (_: TState, value: boolean) =>
                    value,
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
                    await actions.init({ silent: true });
                }

                actions.setLoadingAuth(false);
            } catch (error) {
                actions.setError();

                Notification({
                    message: error.response.data.reason,
                });
            }
        },

        logInOAuth: async () => {
            try {
                const redirectUri = IS_DEV ? `${HOST}:${PORT}` : HOST;
                const serviceCode: any = await getOAuthServiceCode(redirectUri);
                location.replace(
                    `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceCode.service_id}&redirect_uri=${redirectUri}`
                );
            } catch (error) {
                Notification({
                    message: error.response.data.reason,
                });
            }
        },

        registration: async (payload: IRegistrationData) => {
            // TODO: Не нужно вытаскивать редьюсер. Достаточно блочить кнопку при запросе, как на стр Auth
            const { isLoadingRegistration } = getState().scenes.authPage;

            if (isLoadingRegistration) {
                return;
            }

            actions.setLoadingRegistration(true);

            try {
                await registration(payload);
                await actions.init({ silent: true });

                Notification({
                    type: 'success',
                    title: 'Регистрация',
                    message: 'Добро пожаловать!',
                });
            } catch (error) {
                Notification({
                    message: error.response.data.reason,
                });
            } finally {
                actions.setLoadingRegistration(false);
            }
        },

        init: async (opts: IInitOptions = {}) => {
            const { isAuth, isLoadingMain } = getState().scenes.authPage;
            const { silent = false } = opts;

            if (isAuth || isLoadingMain) {
                return;
            }

            if (!navigator.onLine) {
                actions.setOffline(true);
                actions.setLoadingMain(false);
                actions.setInit(true);
                return;
            }

            !silent && actions.setLoadingMain(true);

            try {
                const user = await getUser();
                actions.setUser(user);
                actions.setAuth(true);
            } catch (error) {
                console.error('__init__', error);
            } finally {
                actions.setLoadingMain(false);
                actions.setInit(true);
            }
        },

        logOut: async () => {
            await logout();

            actions.setUser(null);
            actions.setAuth(false);

            Notification({
                type: 'info',
                title: 'Выход',
                message: 'Вы вышли из системы',
            });
        },

        updateProfile: async (profileData: IProfileUpdateData) => {
            const { user } = getState().scenes.authPage;

            try {
                // TODO: стоит именовать санки и запросы по разному
                const newUser = await updateProfile({
                    ...user,
                    ...profileData,
                });

                actions.setUser(newUser);

                Notification({
                    type: 'success',
                    title: 'Профиль',
                    message: 'Данные успешно изменены',
                });
            } catch (error) {
                Notification({
                    message: error.response.data.reason,
                });
            }
        },

        updatePassword: async (passwordData: IPasswordUpdateData) => {
            try {
                await updatePassword(passwordData);

                Notification({
                    type: 'success',
                    title: 'Профиль',
                    message: 'Пароль изменен',
                });
            } catch (error) {
                Notification({
                    message: error.response.data.reason,
                });
            }
        },

        updateAvatar: async (file: File) => {
            const formData = new FormData();
            formData.append('avatar', file);

            try {
                const newUser = await updateAvatar(formData);

                actions.setUser(newUser);

                Notification({
                    type: 'success',
                    title: 'Профиль',
                    message: 'Аватар обновлен',
                });
            } catch (error) {
                Notification({
                    message: error.response.data.reason,
                });
            }
        },
    }),
});
