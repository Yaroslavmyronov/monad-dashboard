import axios, { CreateAxiosDefaults } from 'axios';

export const API_URL = 'https://monad-dashboard.duckdns.org/api';

const axiosOptions: CreateAxiosDefaults = {
  baseURL: API_URL,
  withCredentials: true,
};

export const axiosClassic = axios.create(axiosOptions);
