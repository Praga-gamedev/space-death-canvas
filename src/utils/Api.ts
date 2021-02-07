import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

type CustomAxiosRequestConfig = Omit<AxiosRequestConfig, 'method'>

class Api {
    static get(config: CustomAxiosRequestConfig){
        const axiosInstance = Api.createAxiosInstance('GET')
        Api.initRules(axiosInstance)
        return axiosInstance(config)
    }

    static post(config: CustomAxiosRequestConfig){
        const axiosInstance = Api.createAxiosInstance('POST')
        Api.initRules(axiosInstance)
        return axiosInstance(config)
    }

    static delete(config: CustomAxiosRequestConfig){
        const axiosInstance = Api.createAxiosInstance('DELETE')
        Api.initRules(axiosInstance)
        return axiosInstance(config)
    }

    static put(config: CustomAxiosRequestConfig){
        const axiosInstance = Api.createAxiosInstance('PUT')
        Api.initRules(axiosInstance)
        return axiosInstance(config)
    }

    private static createAxiosInstance(method: 'GET' | 'PUT' | 'POST' | 'DELETE'){
        return axios.create({
            baseURL: 'https://ya-praktikum.tech/api/v2',
            method: method
        });
    }

    private static initRules(axiosInstance: AxiosInstance){
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
                    // some logic
                }
                if (response.status !== 200) {
                    console.log('Status:', response.status);
                }
                // возвращает дату
                return response.data;
            },
            (error) => {
                error.errorText = 'Ошибка сети';
                switch (error.response.status) {
                case 502:
                case 504:
                    error.errorText = 'Запрошенный функционал или сервер в данный момент недоступен';
                    break
                case 404:
                    error.errorText = 'Страница не нацдена';
                    break
                case 401:
                    error.errorText = 'Неавторизованный запрос';
                    break
                }
                return Promise.reject(error);
            }
        );
    }
}

export default Api


