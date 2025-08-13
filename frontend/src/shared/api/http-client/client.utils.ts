import {API_BASE_URL, type httpClientOptionsI} from "@/shared";

const safeReadErrorMessage = async (response: Response) => {
    try {
        const data = await response.json();
        // 문자열 에러 메시지 존재할 경우
        if (typeof data?.message === 'string') return data.message;
        return JSON.stringify(data);
    } catch {
        return null;
    }
}

export const httpClient = async <Response = unknown>(url: string, options: httpClientOptionsI) => {
    const {method, headers, body} = options;
    const endpoint = `${API_BASE_URL}/${url}`;

    try {
        const response = await fetch(endpoint, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: body !== undefined ? JSON.stringify(body) : undefined,
        });

        if (!response.ok) {
            const message = await safeReadErrorMessage(response);
            throw new Error(message ?? `Request failed with status ${response.status}`);
        }

        // 204 No Content 응답 처리
        if (response.status === 204) return undefined as unknown as Response;

        return await response.json();
    } catch (error: unknown) {
        console.error(`Error fetching ${url}:`, error);
        throw error;
    }
}