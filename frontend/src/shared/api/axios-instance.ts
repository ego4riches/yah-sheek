import {API_BASE_URL} from "@/shared";
import axios from 'axios';

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // 필요 시 (쿠키 기반 인증)
});