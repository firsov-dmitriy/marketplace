import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { authControllerRefresh, InvalidTokenResponseEnum } from "./gen";
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
  async (
    error: AxiosError<{ message?: InvalidTokenResponseEnum | string }>,
  ) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    // Проброс message в error.message для всех ошибок
    if (
      error.response?.data?.message &&
      typeof error.response.data.message === "string"
    ) {
      error.message = error.response.data.message;
    }

    if (error.response?.status === 401) {
      const errorMessage = error.response.data?.message;

      if (errorMessage === "EXPIRED" && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          if (!isRefreshing) {
            isRefreshing = true;
            await authControllerRefresh(); // обновляем токены
            isRefreshing = false;
            failedQueue.forEach((req) => req.resolve());
            failedQueue.length = 0;
          } else {
            await new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            });
          }

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          LocalStorageService.clearProfile();
          window.location.href = "/sign-in";
          return Promise.reject(refreshError);
        }
      }

      // Пробрасываем ошибку, если это не EXPIRED
      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

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
    throw err as AxiosError<TError>;
  }
};

export default axiosClient;
