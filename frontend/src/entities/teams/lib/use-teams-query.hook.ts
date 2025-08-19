import {fetchTeams, type GetTeamsResponseT, TEAMS_QUERY_KEYS} from "@/entities";
import {useZustandQuery} from "@/shared";

export const useTeamsQuery = () => {
    return useZustandQuery<GetTeamsResponseT>(
        [TEAMS_QUERY_KEYS.BASE],
        () => fetchTeams(),
        {
            staleTime: 1000 * 60 * 60 * 24
        }
    );
};