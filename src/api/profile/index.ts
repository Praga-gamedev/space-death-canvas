import Api from 'src/utils/Api';
import { IPasswordUpdateData, IProfileUpdateData } from './types';

export const updateProfile = (data: IProfileUpdateData) => {
    return Api.put({
        url: '/user/profile',
        data,
    });
};

export const updatePassword = (data: IPasswordUpdateData) => {
    return Api.put({
        url: '/user/password',
        data,
    });
};

export const updateAvatar = (data: FormData) => {
    return Api.put({
        url: '/user/profile/avatar',
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
    });
};
