import { fetchReviewById, type GetReviewByIdResponseT, REVIEWS_QUERY_KEYS } from "@/entities";
import { useZustandQuery } from "@/shared";

export const useReviewByIdQuery = (reviewId: number) => {
    return useZustandQuery<GetReviewByIdResponseT>(
        REVIEWS_QUERY_KEYS.detail(reviewId),
        () => fetchReviewById(reviewId),
        { enabled: !!reviewId }
    );
};