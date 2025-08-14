import {fetchReviews, type ReviewI, REVIEWS_QUERY_KEYS} from "@/entities";
import {type PageT, useZustandQuery} from "@/shared";

export const useReviewsQuery = (teamId: number) => {
    return useZustandQuery<PageT<ReviewI>>(
        [REVIEWS_QUERY_KEYS.BASE, teamId],
        () => fetchReviews(teamId),
        {
            enabled: !!teamId,
            staleTime: 1000 * 60, // 1분 캐시
        }
    );
};