import axios from 'axios';
import store from '../store/store';
import { logout } from '../store/actions/loginPageActions';

export const API_URL = `http://localhost:8000/api`;

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  config => config,
  error => {
    const originalRequst = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequst._isRetry = true;
      axios
        .get(`${API_URL}/refresh`, { withCredentials: true })
        .then(response => {
          localStorage.setItem('token', response.data.accessToken);
          return api.request(originalRequst);
        })
        .catch(error => store.dispatch(logout()));
    }
    throw error;
  }
);

export default api;
