import axios from "axios";

export const API_URL = `http://localhost:8000/api`


const api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})

api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})


export default api;