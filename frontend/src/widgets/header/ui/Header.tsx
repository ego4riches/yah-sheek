import {useNavigate} from "react-router-dom";
import {AUTH, Drawer, ROUTES, useAuthStore} from "@/shared";
import BaseBall from '@/shared/config/assets/baseball.png'
import {AuthBox, HeaderBox, LogoBox} from "@/widgets";

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
                <Drawer/>
                <LogoBox to={ROUTES.HOME}>
                    <img src={BaseBall} alt="baseball"/>
                </LogoBox>
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