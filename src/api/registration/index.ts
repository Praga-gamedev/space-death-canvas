import YandexApi from 'src/utils/api/YandexApi';

import { IRegistrationData } from './types';

export const registration = async (data: IRegistrationData) => {
    return YandexApi.post({
        url: '/auth/signup',
        data: data,
    });
};
