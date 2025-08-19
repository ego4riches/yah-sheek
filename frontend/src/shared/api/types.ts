export type HttpMethodT = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface httpClientOptionsI {
    method?: HttpMethodT;
    headers?: Record<string, string>;
    body?: unknown;
}