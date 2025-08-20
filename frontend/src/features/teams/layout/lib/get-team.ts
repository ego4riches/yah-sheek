import type {TeamI} from "@/entities";

export const getTeam = (teams: TeamI[], teamKey: string): TeamI | undefined =>
    teams.find((team) => team.teamKey === teamKey);