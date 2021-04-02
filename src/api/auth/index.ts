import YandexApi from 'src/utils/api/YandexApi';

import { ILoginData } from './types';

export const login = (data: ILoginData) => {
    return YandexApi.post({
        url: '/auth/signin',
        data: data,
    });
};

export const logout = () => {
    return YandexApi.post({
        url: '/auth/logout',
        data: {},
    });
};

export const getUser = (headers?: any) => {
    return YandexApi.get({
        url: '/auth/user',
        headers,
    });
};

export const getOAuthServiceCode = () => {
    return YandexApi.get({
        baseURL: 'https://ya-praktikum.tech/api/v2/oauth/yandex/service-id',
    });
};

export const OAuth = (code: number) => {
    return YandexApi.post({
        url: '/oauth/yandex',
        data: { code },
    });
};
