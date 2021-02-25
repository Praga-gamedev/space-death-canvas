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

export const getUser = async () => {
    return Api.get({
        url: '/auth/user',
    });
};
