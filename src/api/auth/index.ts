import Api from 'src/utils/Api';

import { ILoginData } from './types';

export const login = async (data: ILoginData) => {
    return Api.post({
        url: '/auth/signin',
        data: data,
    });
};

export const logout = async () => {
    return Api.post({
        url: '/auth/logout',
        data: {},
    });
};

export const getUser = async (headers?: any) => {
    return Api.get({
        url: '/auth/user',
        headers,
    });
};

export const getOAuthServiceCode = async () => {
    return Api.get({
        baseURL: 'https://ya-praktikum.tech/api/v2/oauth/yandex/service-id',
    });
};

export const OAuth = async (code: number) => {
    return Api.post({
        url: '/oauth/yandex',
        data: { code },
    });
};
