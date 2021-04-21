import LocalApi from 'src/utils/api/LocalApi';
import { Theme } from 'src/theme';
import { AxiosPromise } from 'axios';

export const getUserTheme = (
    userLogin: string
): AxiosPromise<{ id: number; name: Theme }> => {
    return LocalApi.get({
        url: `/theme`,
        params: { user_login: userLogin },
    });
};

export const setUserTheme = (
    userLogin: string,
    themeName: Theme
): AxiosPromise<void> => {
    return LocalApi.put({
        url: '/theme',
        data: { userLogin, themeName },
    });
};
