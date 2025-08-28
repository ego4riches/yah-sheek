import { teams_colors, TEAMS_KEY } from "@/shared";

export type TeamKeyT = (typeof TEAMS_KEY)[keyof typeof TEAMS_KEY];

export interface TeamKeyObjI {
    teamKey: TeamKeyT | undefined;
}

export type TeamsColorsT = keyof typeof teams_colors;