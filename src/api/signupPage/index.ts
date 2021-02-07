import Api from '../../utils/Api';

import {ISignupData} from '../../types/ISignupData';

export const signup = async (data: ISignupData) => {
    return Api.post({
        url: '/auth/signup',
        data: data,
    });
};
