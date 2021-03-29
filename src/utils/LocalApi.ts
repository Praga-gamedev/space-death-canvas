// класс для обращений к экспресс-серверу с фронта
import axios from 'axios';

import { CustomAxiosRequestConfig } from 'src/utils/Api';

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const axiosInstance = axios.create({
    baseURL: `${HOST}:${PORT}/api`,
});

axiosInstance.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data;
    }
    return response;
});

export default class LocalApi {
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
