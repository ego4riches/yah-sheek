import {RouterProvider} from 'react-router-dom'
import {Router} from "@/app/router/Router.tsx";
import {ThemeProvider} from "styled-components";
import {theme} from "@/shared/config/theme";
import {GlobalStyle} from "@/app/global-style.styled.ts";

export const App = () => (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <RouterProvider router={Router}/>
        </ThemeProvider>
);