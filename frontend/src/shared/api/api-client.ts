import {api, type BaseResponseT} from "@/shared";

export const httpClient = {
    get: <T>(url: string, params?: Record<string, any>) =>
        api.get<BaseResponseT<T>>(url, {params}).then(res => res.data),

    post: <T>(url: string, body?: unknown, params?: Record<string, any>) =>
        api.post<BaseResponseT<T>>(url, body, {params}).then(res => res.data),

    patch: <T>(url: string, body?: unknown, params?: Record<string, any>) =>
        api.patch<BaseResponseT<T>>(url, body, {params}).then(res => res.data),

    delete: <T>(url: string, params?: Record<string, any>) =>
        api.delete<BaseResponseT<T>>(url, {params}).then(res => res.data),
};