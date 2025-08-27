import { type TeamLayoutItemT, useTeamLayoutStore } from "@/entities";
import { TEAMS_MESSAGES } from "@/shared";
import { useEffect } from "react";

export const TeamLayoutItem = ({ team, children }: TeamLayoutItemT) => {
    const { setTeam, reset } = useTeamLayoutStore();

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