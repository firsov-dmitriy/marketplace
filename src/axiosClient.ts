import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { InvalidTokenResponseEnum } from "./gen";
import { LocalStorageService } from "@/services";

export type RequestConfig<TData = unknown> = {
  url?: string;
  method: "GET" | "PUT" | "PATCH" | "POST" | "DELETE";
  params?: unknown;
  data?: TData;
  responseType?:
    | "arraybuffer"
    | "blob"
    | "document"
    | "json"
    | "text"
    | "stream";
  signal?: AbortSignal;
  headers?: AxiosRequestConfig["headers"];
};

export type ResponseConfig<TData = unknown> = {
  data: TData;
  status: number;
  statusText: string;
  headers?: AxiosResponse["headers"];
};

export const axiosInstance = axios.create({
  timeout: 1000,
  withCredentials: true,
});

let isRefreshing = false;
const failedQueue: {
  resolve: (value?: AxiosResponse) => void;
  reject: (error: unknown) => void;
}[] = [];

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<{ message: InvalidTokenResponseEnum }>) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (
        error.response.data?.message === "EXPIRED" &&
        window.location.pathname !== "/sign-in"
      ) {
        window.location.href = "/sign-in";
      } else if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then(() => axiosInstance(originalRequest));
      } else if (window.location.pathname !== "/sign-in") {
        LocalStorageService.clearProfile();
        window.location.href = "/sign-in";
      }

      originalRequest._retry = true;
      isRefreshing = true;
    }

    return Promise.reject({
      status: error.response?.status,
      statusText: error.response?.statusText,
      headers: error.response?.headers,
      data: error.response?.data,
    });
  },
);

// ✅ Универсальный клиент с правильной типизацией
export const axiosClient = async <
  TData,
  TError = unknown,
  TVariables = unknown,
>(
  config: RequestConfig<TVariables>,
): Promise<ResponseConfig<TData>> => {
  try {
    const response = await axiosInstance.request<
      TVariables,
      AxiosResponse<TData>
    >({
      ...config,
    });

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    };
  } catch (err) {
    throw err as {
      status?: number;
      statusText?: string;
      headers?: Record<string, string>;
      data?: TError;
    };
  }
};

export default axiosClient;
