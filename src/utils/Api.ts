import axios, { AxiosRequestConfig } from 'axios';

export const HOST = 'https://ya-praktikum.tech';

type CustomAxiosRequestConfig = Omit<AxiosRequestConfig, 'method'>;

const axiosInstance = axios.create({
    baseURL: `${HOST}/api/v2`,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

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
                break;
        }
        return Promise.reject(error);
    }
);

export default class Api {
    static get(config: CustomAxiosRequestConfig) {
        return axiosInstance({ ...config, method: 'GET' });
    }

    static post(config: CustomAxiosRequestConfig) {
        return axiosInstance({ ...config, method: 'POST' });
    }

    static delete(config: CustomAxiosRequestConfig) {
        return axiosInstance({ ...config, method: 'DELETE' });
    }

    static put(config: CustomAxiosRequestConfig) {
        return axiosInstance({ ...config, method: 'PUT' });
    }
}
