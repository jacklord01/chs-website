import AppConst from "@config/app.const";

import axios from "axios";

const http2 = axios.create({
  baseURL: AppConst.webApiBaseUrl || `http://devwebapi.qsmart.ie/api/`,
  timeout: 300000,
});

http2.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let apiError: ApiError;
    if (
      !!error.response &&
      !!error.response.status &&
      !!error.response.data &&
      !!error.response.data.message
    ) {
      apiError = {
        name: error.response.statusText,
        status: error.response.status,
        message: error.response.data.message,
      };
    } else {
      console.error(error);
      apiError = {
        name: "Error",
        status: 500,
        message: "Something Went wrong",
      };
    }
    return Promise.reject(apiError);
  }
);

export interface ApiError extends Error {
  status: number;
  message: string;
}

export default http2;
