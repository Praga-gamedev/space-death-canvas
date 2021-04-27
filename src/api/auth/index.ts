import YandexApi, { YANDEX_HOST } from 'src/utils/api/YandexApi';

import { ILoginData } from './types';
import axios from 'axios';

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

export const getOAuthServiceCode = (redirectUri: string) => {
    return YandexApi.get({
        baseURL: 'https://ya-praktikum.tech/api/v2/oauth/yandex/service-id',
        params: { redirect_uri: redirectUri },
    });
};

export const OAuth = (code: number | string, redirect_uri: string) => {
    return axios.post(`${YANDEX_HOST}/api/v2/oauth/yandex`, {
        code,
        redirect_uri,
    });
};
