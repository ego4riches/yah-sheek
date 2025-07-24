import {createBrowserRouter} from "react-router-dom";
import {PublicOnly} from "@/app/router/RouteGuard.tsx";
import {LoginPage} from "@/pages/LoginPage.tsx";
import {JoinPage} from "@/pages/JoinPage.tsx";
import {NotFoundPage} from "@/pages/NotFoundPage.tsx";
import {Layout} from "@/app/layout/Layout.tsx";
import {MainPage} from "@/pages/MainPage.tsx";
import {SamplePage} from "@/pages/SamplePage.tsx";
import {ROUTES} from "@/shared";

export const Router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Layout/>,
        errorElement: <NotFoundPage/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: ROUTES.LOGIN,
                element:
                        <PublicOnly>
                            <LoginPage/>
                        </PublicOnly>
            },
            {
                path: ROUTES.JOIN,
                element: (
                        <PublicOnly>
                            <JoinPage/>
                        </PublicOnly>
                ),
            },
            {
                path: ROUTES.SAMPLE_PAGE,
                element: <SamplePage/>
            },
        ]
    },
    {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage/>,
    },
]);