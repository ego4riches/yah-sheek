import {Navigate} from 'react-router-dom'
import type {ReactNode} from "react";
import {ROUTES, useUserStore} from "@/shared";

export const PublicOnly = ({children}: { children: ReactNode }) => {
    const isLoggedIn = useUserStore((s) => s.isLoggedIn)
    return isLoggedIn ? <Navigate to={ROUTES.HOME} replace/> : <>{children}</>
}

export const PrivateOnly = ({children}: { children: ReactNode }) => {
    const isLoggedIn = useUserStore((s) => s.isLoggedIn)
    return isLoggedIn ? <>{children}</> : <Navigate to={ROUTES.HOME} replace/>
}