import axios, { AxiosRequestConfig } from 'axios';

import { logic } from '@store/AuthPage';
import Api from 'src/utils/api/Api';

export const HOST = 'https://ya-praktikum.tech';

export type CustomAxiosRequestConfig = Omit<AxiosRequestConfig, 'method'>;

const axiosInstance = axios.create({
    baseURL: `${HOST}/api/v2`,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return response.data;
        }
        return response;
    },
    (error) => {
        error.errorText = 'Ошибка сети';
        switch (error.response.status) {
            case 500:
                error.errorText = 'Ошибка сервера';
                break;
            case 404:
                error.errorText = 'Страница не найдена';
                break;
            case 401:
                error.errorText = 'Неавторизованный запрос';
                /* Позволяет использовать данную logic вне контекста React */
                logic.mount();

                logic.actions.setAuth(false);
                break;
        }
        return Promise.reject(error);
    }
);

export default new Api(axiosInstance);
