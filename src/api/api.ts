import axios from 'axios';
import type { AxiosInstance } from 'axios';

const BASE_URL = 'http://myaidentity.com:39069';

const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    timeout: 30000,
});

export default api;

