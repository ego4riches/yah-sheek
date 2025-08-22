import type { TeamItemT } from "@/features";
import { useLayoutStore } from "@/features/teams/layout/model/layout.store";
import { TEAMS_MESSAGES } from "@/shared";
import { useEffect } from "react";

export const TeamItem = ({ team, children }: TeamItemT) => {
    const { setTeam, reset } = useLayoutStore();

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