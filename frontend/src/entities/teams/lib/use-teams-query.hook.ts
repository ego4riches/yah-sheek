import {fetchTeams, type TeamI, TEAMS_QUERY_KEYS} from "@/entities";
import {useZustandQuery} from "@/shared";

export const useTeamsQuery = () => {
    return useZustandQuery<TeamI[]>(
        [TEAMS_QUERY_KEYS.BASE],
        () => fetchTeams(),
        {
            staleTime: 1000 * 60, // 1분 캐시
        }
    );
};