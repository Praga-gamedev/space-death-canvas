import Api from 'src/utils/Api';

import {ILoginData} from '../../types/ILoginData';


export const login = async (data: ILoginData) => {
    return Api.post({
        url: '/auth/signin',
        data: data
    });
};

export const logout = async () => {
    return Api.post({
        url: '/auth/logout',
        data: {},
        /*
             Есть вопрос - что будет, если куки не обнулять?
             Просто оно и без этого хидера работает
        */
        headers: { 'Set-Cookie': 'expires=0' },
    });
};

export const user = async () => {
    return Api.get({
        url: '/auth/user',
    });
};
