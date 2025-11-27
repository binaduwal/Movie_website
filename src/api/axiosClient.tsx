import axios, { type AxiosInstance } from "axios";

export const api:AxiosInstance = axios.create({
  baseURL:import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  config.params = { ...config.params, api_key: apiKey };
    return config;
},
(error) => {
    return Promise.reject(error);
});