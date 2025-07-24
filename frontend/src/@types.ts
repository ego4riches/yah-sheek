import type { ThemeT } from "@/shared";

declare module 'styled-components' {

    export interface DefaultTheme extends ThemeT {
    }
}