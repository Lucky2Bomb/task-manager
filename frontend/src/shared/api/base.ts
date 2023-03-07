import axios from "axios";
import { API_DELAY, API_HOST } from "../config";

export const axiosInstance = axios.create({
  baseURL: `${API_HOST}/api/v1/`,
  timeout: 15000,
  
});

const sleepRequest = (milliseconds: number, originalRequest) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => resolve(instance(originalRequest)), milliseconds);
  });
};

if (API_DELAY > 0) {
  axiosInstance.interceptors.request.use(async (config) => {
    return setTimeout(() => config, 600);
    return config;
  });
}
