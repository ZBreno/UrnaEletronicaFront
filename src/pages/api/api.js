import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.112.4.21:8000/'
    });
export default api;