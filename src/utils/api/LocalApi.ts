import axios from 'axios';
import Api from 'src/utils/api/Api';
import { API_PORT, HOST } from 'src/env';
import { IS_DEV } from '../../../webpack/env';

const baseUrl = IS_DEV ? `${HOST}:${API_PORT}/api` : `${HOST}/api`;

const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

export default new Api(axiosInstance);
