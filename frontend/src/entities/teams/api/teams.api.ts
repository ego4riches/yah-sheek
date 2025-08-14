import type {GetTeamByKeyResponseT, GetTeamsResponseT} from "@/entities";
import {api, TEAMS_BASE_URL} from "@/shared";

const BASE_URL = TEAMS_BASE_URL;

export const fetchTeams = async () => {
    const url = `${BASE_URL}`;

    return await api.get<GetTeamsResponseT>(url);
}

export const fetchTeamByKey = async (teamKey: string) => {
    const url = `${BASE_URL}/${teamKey}`;

    return await api.get<GetTeamByKeyResponseT>(url);
}