import {Link, useNavigate} from "react-router-dom";
import {AuthBox, HeaderBox, LogoBox, MenuBox} from "@/widgets/header/config/styled.ts";
import {APP_NAME, AUTH, MENU, ROUTES, useAuthStore} from "@/shared";

export const Header = () => {
    const {isLoggedIn, login, logout} = useAuthStore();
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
            <HeaderBox>
                <LogoBox>
                    <Link to={ROUTES.HOME}>{APP_NAME}</Link>
                </LogoBox>
                <MenuBox>
                    <Link to={ROUTES.SAMPLE_PAGE}>{MENU.SAMPLE}</Link>
                </MenuBox>
                <AuthBox>
                    {
                        isLoggedIn
                                ? <button onClick={handleLogout}>{AUTH.LOGOUT}</button>
                                : <button onClick={handleLogin}>{AUTH.LOGIN}</button>
                    }
                </AuthBox>
            </HeaderBox>
    )
};