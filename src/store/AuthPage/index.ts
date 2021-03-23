import { kea } from 'kea';

import { Notification } from 'src/utils/notification';

import {
    login as auth,
    logout,
    getUser,
    getOAuthServiceCode,
    OAuth,
} from '@api/auth';
import { registration } from '@api/registration';
import { updateProfile, updatePassword, updateAvatar } from '@api/profile';

import { IRegistrationData } from '@api/registration/types';
import { IPasswordUpdateData, IProfileUpdateData } from '@api/profile/types';

import { TState, IUserProps, IInitOptions } from '../types';

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
                const serviceCode: any = await getOAuthServiceCode();

                location.replace(
                    `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceCode.service_id}&redirect_uri=`
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

            if (isLoadingRegistration) return;

            actions.setLoadingRegistration(true);

            try {
                await registration(payload);
                await actions.init({ silent: true });
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

            const codeOAuth = getState().router.location.query?.code;

            if (isAuth || isLoadingMain) return;

            if (!navigator.onLine) {
                actions.setOffline(true);
                actions.setLoadingMain(false);
                actions.setInit(true);
                return;
            }

            !silent && actions.setLoadingMain(true);

            try {
                codeOAuth && (await OAuth(codeOAuth));

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
            } catch (error) {
                Notification({
                    message: error.response.data.reason,
                });
            }
        },

        updatePassword: async (passwordData: IPasswordUpdateData) => {
            try {
                await updatePassword(passwordData);
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
            } catch (error) {
                Notification({
                    message: error.response.data.reason,
                });
            }
        },
    }),
});
