import { fetchTeamByKey, type GetTeamByKeyResponseT, TEAMS_QUERY_KEYS } from "@/entities";
import { useZustandQuery } from "@/shared";

export const useTeamByKeyQuery = (team: string) => {
    return useZustandQuery<GetTeamByKeyResponseT>(
        [TEAMS_QUERY_KEYS.BASE],
        () => fetchTeamByKey(team),
        {
            staleTime: 1000 * 60 * 60 * 24
        }
    );
};