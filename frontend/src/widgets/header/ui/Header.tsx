import { TeamsDrawer, useTeamStore } from "@/entities";
import { AuthButton } from "@/features";
import { ROUTES } from "@/shared";
import BaseBall from '@/shared/config/assets/baseball.png'
import { HeaderBox, LogoBox } from "@/widgets";

export const Header = () => {
    const { team } = useTeamStore();

    return (
            <HeaderBox teamKey={team?.teamKey}>
                <TeamsDrawer/>
                <LogoBox to={ROUTES.HOME}>
                    <img src={BaseBall} alt="baseball"/>
                </LogoBox>
                <AuthButton/>
            </HeaderBox>
    )
};