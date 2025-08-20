import {AuthButton, TeamsDrawer} from "@/features";
import {ROUTES} from "@/shared";
import BaseBall from '@/shared/config/assets/baseball.png'
import {HeaderBox, LogoBox} from "@/widgets";

export const Header = () => {
    return (
            <HeaderBox>
                <TeamsDrawer/>
                <LogoBox to={ROUTES.HOME}>
                    <img src={BaseBall} alt="baseball"/>
                </LogoBox>
                <AuthButton/>
            </HeaderBox>
    )
};