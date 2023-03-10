import axios from "axios";
import { API_DELAY, API_HOST } from "../config";
import { onResponse, onResponseError } from "./interceptors";

const accessToken = localStorage.getItem("access");

export const axiosInstance = axios.create({
  baseURL: `${API_HOST}/api/v1/`,
  timeout: 15000,
  headers: {
    Authorization:
      typeof accessToken === "string" ? `Bearer ${accessToken}` : undefined,
  },
});

const delay = async (ms: number) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

if (API_DELAY > 0) {
  axiosInstance.interceptors.request.use(async (config) => {
    await delay(+API_DELAY);
    return config;
  });
}

axiosInstance.interceptors.response.use(onResponse, onResponseError);
