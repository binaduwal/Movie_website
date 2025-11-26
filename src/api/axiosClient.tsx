import axios, { type AxiosInstance } from "axios";

export const api:AxiosInstance = axios.create({
  baseURL:import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
    const token=import.meta.env.VITE_TMDB_ACCESS_TOKEN;
    config.headers.Authorization=`Bearer ${token}`;
    return config;
},
(error) => {
    return Promise.reject(error);
});