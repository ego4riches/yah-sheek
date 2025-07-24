import {createBrowserRouter} from "react-router-dom";
import {PublicOnly} from "@/app/router/RouteGuard.tsx";
import {LoginPage} from "@/pages/LoginPage.tsx";
import {JoinPage} from "@/pages/JoinPage.tsx";
import {NotFoundPage} from "@/pages/NotFoundPage.tsx";
import {Layout} from "@/app/layout/Layout.tsx";
import {MainPage} from "@/pages/MainPage.tsx";
import {DoosanPage} from "@/pages/teams/DoosanPage.tsx";
import {ROUTES} from "@/shared";
import {HanhwaPage} from "@/pages/teams/HanhwaPage.tsx";
import {KiaPage} from "@/pages/teams/KiaPage.tsx";
import {KiwoomPage} from "@/pages/teams/KiwoomPage.tsx";
import {KTPage} from "@/pages/teams/KTPage.tsx";
import {LGPage} from "@/pages/teams/LGPage.tsx";
import {LottePage} from "@/pages/teams/LottePage.tsx";
import {NCPage} from "@/pages/teams/NCPage.tsx";
import {SamsungPage} from "@/pages/teams/SamsungPage.tsx";
import {SSGPage} from "@/pages/teams/SSGPage.tsx";

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
                path: ROUTES.KIA,
                element: <KiaPage/>
            },
            {
                path: ROUTES.DOOSAN,
                element: <DoosanPage/>
            },
            {
                path: ROUTES.LOTTE,
                element: <LottePage/>
            },
            {
                path: ROUTES.SAMSUNG,
                element: <SamsungPage/>
            },
            {
                path: ROUTES.SSG,
                element: <SSGPage/>
            },
            {
                path: ROUTES.NC,
                element: <NCPage/>
            },
            {
                path: ROUTES.LG,
                element: <LGPage/>
            },
            {
                path: ROUTES.KIWOOM,
                element: <KiwoomPage/>
            },
            {
                path: ROUTES.KT,
                element: <KTPage/>
            },
            {
                path: ROUTES.HANHWA,
                element: <HanhwaPage/>
            },
        ]
    },
    {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage/>,
    },
]);