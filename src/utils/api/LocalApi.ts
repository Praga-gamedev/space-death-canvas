// класс для обращений к экспресс-серверу с фронта
import axios from 'axios';
import Api from 'src/utils/api/Api';

const HOST = process.env.HOST;
const API_PORT = process.env.PORT;

const axiosInstance = axios.create({
    baseURL: `${HOST}:${API_PORT}/api`,
});

axiosInstance.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data;
    }
    return response;
});

export default new Api(axiosInstance);
