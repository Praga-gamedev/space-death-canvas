import { kea } from 'kea';

import { store } from 'react-notifications-component';

import {
    login as auth,
    logout,
    getUser,
    getOAuthServiceCode,
    getOAuthCode,
} from '@api/auth';
import { registration } from '@api/registration';
import { updateProfile, updatePassword, updateAvatar } from '@api/profile';

import { TState, IUserProps, IInitOptions } from '../types';
import { IRegistrationData } from '@api/registration/types';
import { IPasswordUpdateData, IProfileUpdateData } from '@api/profile/types';

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

        setOAuthCode: (payload: number) => payload,
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
        OAuthCode: [
            null,
            {
                [actions.setOAuthCode]: (_: TState, payload: number) => payload,
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

        logInOAuth: async () => {
            const serviceCode: any = await getOAuthServiceCode();

            location.replace(
                `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceCode.service_id}&redirect_uri=`
            );

            // await getOAuthCode(getState().scenes.authPage.code);
        },

        registration: async (payload: IRegistrationData) => {
            const { isLoadingRegistration } = getState().scenes.authPage;
            if (isLoadingRegistration) return;

            actions.setLoadingRegistration(true);

            try {
                await registration(payload);
                await actions.init({ silent: true });
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
                // actions.setOAuthCode(getState().router.location.query?.code);
                codeOAuth && (await getOAuthCode(codeOAuth));

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
            const newUser = await updateProfile({ ...user, ...profileData });

            actions.setUser(newUser);
        },

        updatePassword: (passwordData: IPasswordUpdateData) => {
            return updatePassword(passwordData);
        },

        updateAvatar: async (file: File) => {
            const formData = new FormData();
            formData.append('avatar', file);

            const newUser = await updateAvatar(formData);
            actions.setUser(newUser);
        },
    }),
});
