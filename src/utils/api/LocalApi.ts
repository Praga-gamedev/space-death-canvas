import axios from 'axios';
import Api from 'src/utils/api/Api';
import { API_PORT, HOST } from 'src/env';

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
