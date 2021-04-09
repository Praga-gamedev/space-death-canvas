import axios from 'axios';
import Api from 'src/utils/api/Api';
import { API_PORT, HOST } from 'src/env';

const axiosInstance = axios.create({
    baseURL: `${HOST}:${API_PORT}/api`,
    withCredentials: true,
});

export default new Api(axiosInstance);
