import { TEAMS } from "@/shared";

export const getBallParkByTeamKey = (teamKey: string): string | null => {
    const teamEntry = Object.values(TEAMS).find(team => team.KEY === teamKey);
    return teamEntry?.BALL_PARK ?? null;
};