import { createReview, type PostReviewRequestT, type PostReviewResponseT, REVIEWS_QUERY_KEYS } from "@/entities";
import { useZustandMutation } from "@/shared";

export const useAddReviewMutation = (userId: number) => {
    return useZustandMutation<PostReviewResponseT, PostReviewRequestT>(
        REVIEWS_QUERY_KEYS.posts(userId),
        (body: PostReviewRequestT) => createReview(body),
    );
};