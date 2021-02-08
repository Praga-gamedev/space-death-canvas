import Api from '@/utils/Api';

import { IRegistrationData } from './types';

export const registration = async (data: IRegistrationData) => {
    return Api.post({
        url: '/auth/signup',
        data: data,
    });
};
