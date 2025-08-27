import { fetchTeamByKey, type GetTeamByKeyResponseT, TEAMS_QUERY_KEYS } from "@/entities";
import { useZustandQuery } from "@/shared";

export const useTeamByKeyQuery = (team: string) => {
    return useZustandQuery<GetTeamByKeyResponseT>(
        [TEAMS_QUERY_KEYS.TEAM],
        () => fetchTeamByKey(team),
    );
};