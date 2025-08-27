import { DrawerBox, DrawerToggleBox, TeamDrawerWrapper, TeamsDrawerItem, useTeamsDrawerStore, useTeamsQuery } from "@/entities";
import { AsyncBoundary } from "@/shared";
import type { AxiosError } from "axios";
import { useLocation } from "react-router-dom";

export const TeamsDrawer = () => {
    const { data, status, error } = useTeamsQuery();
    const { isOpen, setIsOpen } = useTeamsDrawerStore();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === `/${path}`;

    const openDrawer = () => setIsOpen(true);
    const closeDrawer = () => setIsOpen(false);

    return (
            <TeamDrawerWrapper onMouseEnter={openDrawer} onMouseLeave={closeDrawer}>
                <DrawerToggleBox>☰</DrawerToggleBox>
                <DrawerBox open={isOpen} status={status}>
                    <AsyncBoundary
                            data={data}
                            status={status}
                            errorCode={(error as AxiosError)?.response?.status}
                    >
                        {(team) =>
                                team.map(({ teamKey, teamName }) =>
                                        <TeamsDrawerItem
                                                key={teamKey}
                                                path={teamKey}
                                                label={teamName}
                                                active={isActive(teamKey)}
                                                onClick={closeDrawer}
                                        />
                                )
                        }
                    </AsyncBoundary>
                </DrawerBox>
            </TeamDrawerWrapper>
    );
};