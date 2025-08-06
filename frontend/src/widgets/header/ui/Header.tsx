import {AuthButton} from "@/features";
import {Drawer, ROUTES} from "@/shared";
import BaseBall from '@/shared/config/assets/baseball.png'
import {HeaderBox, LogoBox} from "@/widgets";

export const Header = () => {
    return (
            <HeaderBox>
                <Drawer/>
                <LogoBox to={ROUTES.HOME}>
                    <img src={BaseBall} alt="baseball"/>
                </LogoBox>
                <AuthButton/>
            </HeaderBox>
    )
};