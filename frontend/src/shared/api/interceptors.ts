import { type AxiosError, type AxiosResponse } from "axios";
import snackbar from "../ui/snackbar";

export const onResponseError = async (
  error: AxiosError,
): Promise<AxiosError> => {
  snackbar.error(error.message);
  return await Promise.reject(error);
};

export const onResponse = (response: AxiosResponse): AxiosResponse => {
  // snackbar.success(response.statusText);
  return response;
};
