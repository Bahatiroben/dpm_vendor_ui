import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const axiosInstance = axios;

const ACCESS_TOKEN = localStorage.getItem('DPMAccessToken');
const baseURL = process.env.REACT_APP_baseURL;
axiosInstance.defaults.baseURL = baseURL;
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

export default axiosInstance.create();