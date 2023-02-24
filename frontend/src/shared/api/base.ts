import axios from "axios";
import { API_HOST } from "../config";

export const axiosInstance = axios.create({
  baseURL: `${API_HOST}/api/v1/`,
  timeout: 15000,
  headers: { "X-Custom-Header": "foobar" },
});
