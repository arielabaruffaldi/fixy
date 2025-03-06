import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import { getAuthToken } from '../utils/session';

export interface Dictionary<T> {
  [id: string]: T | undefined;
}

type headersType = Dictionary<string>;

const apiUrl = process.env.EXPO_PUBLIC_BASE_URL;
function http(baseURL?: string, headers?: headersType): AxiosInstance {
  const defaultHeaders: headersType = {
    'Content-type': 'application/json',
  };

  return axios.create({
    baseURL: baseURL ?? apiUrl,
    headers: headers ?? defaultHeaders,
  });
}

export const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const authToken = await getAuthToken();
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default http;
