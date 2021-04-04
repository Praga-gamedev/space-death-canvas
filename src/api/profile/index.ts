import YandexApi from 'src/utils/api/YandexApi';
import { IPasswordUpdateData, IProfileUpdateData } from './types';

export const updateProfile = (data: IProfileUpdateData) => {
    return YandexApi.put({
        url: '/user/profile',
        data,
    });
};

export const updatePassword = (data: IPasswordUpdateData) => {
    return YandexApi.put({
        url: '/user/password',
        data,
    });
};

export const updateAvatar = (data: FormData) => {
    return YandexApi.put({
        url: '/user/profile/avatar',
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
    });
};
