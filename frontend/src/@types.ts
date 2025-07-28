import type { ThemeT } from "@/shared";

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeT {
    }
}

interface AppConfig {
    APP_NAME: string;
    BASE_API_URL: string;
}

declare global {
    interface Window {
        __APP_CONFIG__: AppConfig;
    }
}