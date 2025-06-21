import axios, { CreateAxiosDefaults } from 'axios';

const axiosOptions: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

export const axiosClassic = axios.create(axiosOptions);
