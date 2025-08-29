import { AuthButtonItem } from "@/features";
import { AUTH, ROUTES, useAuthStore } from "@/shared";
import { AuthBox } from "@/widgets";
import { useNavigate } from "react-router-dom";

export const AuthButton = () => {
    const { isLoggedIn, login, logout } = useAuthStore();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate(ROUTES.LOGIN);
    };

    const handleLogout = () => {
        logout();
        navigate(ROUTES.HOME);
    };

    return (
            <AuthBox>
                {
                    isLoggedIn
                            ? <AuthButtonItem onClick={handleLogout} children={AUTH.LOGIN}/>
                            : <AuthButtonItem onClick={handleLogin} children={AUTH.LOGOUT}/>
                }
            </AuthBox>
    );
};