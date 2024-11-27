import axios from 'axios';

axios.defaults.baseURL = 'https://django-rest-unit-e67236d699b8.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

// Interceptors
export const axiosReq = axios.create();
export const axiosRes = axios.create();