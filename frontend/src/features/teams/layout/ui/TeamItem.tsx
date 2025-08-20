import type {TeamItemT} from "@/features";
import {TEAMS_MESSAGES} from "@/shared";

export const TeamItem = ({team, children}: TeamItemT) => {
    if (!team) {
        console.warn(TEAMS_MESSAGES.TEAM_NOT_FOUND);
        return null;
    }

    return children(team);
};