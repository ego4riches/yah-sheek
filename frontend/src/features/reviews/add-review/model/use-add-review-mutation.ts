import { createReview, type PostReviewRequestT, type PostReviewResponseT, REVIEWS_QUERY_KEYS } from "@/entities";
import { useZustandMutation } from "@/shared";

export const useAddReviewMutation = () => {
    return useZustandMutation<PostReviewResponseT, PostReviewRequestT>(
        [REVIEWS_QUERY_KEYS.BASE],
        (body: PostReviewRequestT) => createReview(body),
    );
};