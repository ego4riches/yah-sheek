import { type TeamLayoutItemT, useTeamStore } from "@/entities";
import { TEAMS_MESSAGES } from "@/shared";
import { useEffect } from "react";

export const TeamLayoutItem = ({ team, children }: TeamLayoutItemT) => {
    const { setTeam, reset } = useTeamStore();

    useEffect(() => {
        setTeam(team);
        return () => reset();
    }, [])

    if (!team) {
        console.warn(TEAMS_MESSAGES.TEAM_NOT_FOUND);
        return null;
    }

    return children(team);
};