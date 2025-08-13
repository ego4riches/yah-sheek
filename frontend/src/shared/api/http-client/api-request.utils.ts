import {httpClient, type httpClientOptionsI} from "@/shared";

export const api = {
    get: <T>(url: string, options?: httpClientOptionsI) =>
        httpClient<T>(url, {method: 'GET', ...options}),
    post: <T>(url: string, body?: unknown, options?: httpClientOptionsI) =>
        httpClient<T>(url, {method: 'POST', body, ...options}),
    patch: <T>(url: string, body?: unknown, options?: httpClientOptionsI) =>
        httpClient<T>(url, {method: 'PATCH', body, ...options}),
    delete: <T>(url: string, options?: httpClientOptionsI) =>
        httpClient<T>(url, {method: 'DELETE', ...options}),
};