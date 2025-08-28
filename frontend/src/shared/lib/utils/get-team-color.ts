import { type TeamKeyT, teams_colors, type TeamsColorsT } from "@/shared";

export const getTeamColor = (teamKey: TeamKeyT, step: 100 | 300 | 500) => {
    const prefix = teamKey.split("-")[0];
    const colorKey = `${prefix}${step}` as TeamsColorsT;
    return teams_colors[colorKey];
}