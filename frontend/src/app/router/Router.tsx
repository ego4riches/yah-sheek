import { Layout } from "@/app/layout/Layout.tsx";
import { PublicOnly } from "@/app/router/RouteGuard.tsx";
import { ErrorPage } from "@/pages/ErrorPage.tsx";
import { JoinPage } from "@/pages/JoinPage.tsx";
import { LoginPage } from "@/pages/LoginPage.tsx";
import { MainPage } from "@/pages/MainPage.tsx";
import { MyPage } from "@/pages/MyPage";
import { TeamPage } from "@/pages/TeamPage";
import { ROUTES, VALID_TEAMS } from "@/shared";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            { index: true, element: <MainPage/> },
            { path: ROUTES.MY, element: <PublicOnly><MyPage/></PublicOnly> },
            { path: ROUTES.LOGIN, element: <LoginPage/> },
            { path: ROUTES.JOIN, element: <JoinPage/> },
            {
                path: "/:teamKey",
                element: <TeamPage/>,
                loader: ({ params }) => {
                    if (!VALID_TEAMS.includes(params.teamKey!)) throw new Response("Not Found", { status: 404 });
                    return null;
                },
                children: [
                    { path: "review/:reviewId", element: <TeamPage/> },
                ],
            },
        ],
    },
    {
        path: ROUTES.NOT_FOUND,
        element: <ErrorPage/>,
    },
]);