import type { GetTeamByKeyResponseT, GetTeamsResponseT } from "@/entities";
import { httpClient, TEAMS_BASE_URL } from "@/shared";

const BASE_URL = TEAMS_BASE_URL;

export const fetchTeams = async () => {
    return await httpClient.get<GetTeamsResponseT>(BASE_URL);
}

export const fetchTeamByKey = async (teamKey: string) => {
    return await httpClient.get<GetTeamByKeyResponseT>(BASE_URL, { teamKey });
}