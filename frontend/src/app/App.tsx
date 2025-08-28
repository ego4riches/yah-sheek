import { GlobalStyle } from "@/app/global-style.styled.ts";
import { Router } from "@/app/router/Router.tsx";
import { theme } from "@/shared/config/theme";
import { Helmet } from "react-helmet-async";
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from "styled-components";

export const App = () => (
        <ThemeProvider theme={theme}>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"/>
            </Helmet>
            <GlobalStyle/>
            <RouterProvider router={Router}/>
        </ThemeProvider>
);