import LocalApi from 'src/utils/api/LocalApi';
import { Theme } from 'src/theme';

export const getUserTheme = (userLogin: string) => {
    return LocalApi.get({
        url: `/theme?user_login=${userLogin}`,
    });
};

export const setUserTheme = (userLogin: string, themeName: Theme) => {
    return LocalApi.put({
        url: '/theme',
        data: { userLogin, themeName },
    });
};
