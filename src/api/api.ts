import axios from 'axios';
import type { AxiosInstance } from 'axios';

const BASE_URL = 'https://myaidentity.com/artistic-seagull/api';

const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 30000,
});

export default api;

