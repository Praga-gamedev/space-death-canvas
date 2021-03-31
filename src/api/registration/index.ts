import Api from 'src/utils/Api';

import { IRegistrationData } from './types';

export const registration = (data: IRegistrationData) => {
    return Api.post({
        url: '/auth/signup',
        data: data,
    });
};
