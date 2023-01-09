import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {createToken} from './token';

const BASE_URL = 'https://10.react.pages.academy/wtw';
const TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  });
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (!config.headers){
        return config;
      }

      const token = createToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );
  return api;
};
