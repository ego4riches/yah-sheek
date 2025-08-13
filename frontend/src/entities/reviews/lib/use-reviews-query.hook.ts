import {fetchReviews, type GetReviewsResponse, REVIEWS_QUERY_KEYS} from "@/entities";
import {useZustandQuery} from "@/shared";

export const useReviewsQuery = (team: string) => {
    return useZustandQuery<GetReviewsResponse>(
        [REVIEWS_QUERY_KEYS.BASE, team],
        () => fetchReviews<GetReviewsResponse>(team),
        {
            enabled: !!team,
            staleTime: 1000 * 60, // 1분 캐시
        }
    );
};