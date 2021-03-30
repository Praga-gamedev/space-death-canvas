import YandexApi from 'src/utils/api/YandexApi';

import { ILoginData } from './types';

export const login = async (data: ILoginData) => {
    return YandexApi.post({
        url: '/auth/signin',
        data: data,
    });
};

export const logout = async () => {
    return YandexApi.post({
        url: '/auth/logout',
        data: {},
    });
};

export const getUser = async (headers?: any) => {
    return YandexApi.get({
        url: '/auth/user',
        headers,
    });
};

export const getOAuthServiceCode = async () => {
    return YandexApi.get({
        baseURL: 'https://ya-praktikum.tech/api/v2/oauth/yandex/service-id',
    });
};

export const OAuth = async (code: number) => {
    return YandexApi.post({
        url: '/oauth/yandex',
        data: { code },
    });
};
