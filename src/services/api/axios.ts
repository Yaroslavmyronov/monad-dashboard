import axios, { CreateAxiosDefaults } from 'axios';

export const API_URL = 'http://localhost:8080/api';

const axiosOptions: CreateAxiosDefaults = {
  baseURL: API_URL,
  withCredentials: true,
};

export const axiosClassic = axios.create(axiosOptions);
