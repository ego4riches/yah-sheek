import {type PostReviewRequestT, type PostReviewResponseT, REVIEWS_QUERY_KEYS} from "@/entities";
import {postReview} from "@/features/reviews/add-review/api/add-review.api";
import {useZustandMutation} from "@/shared";

// export const useAddReviewMutation = (body: PostReviewRequestT) => {
//     return useZustandQuery<PostReviewResponseT>(
//         [REVIEWS_QUERY_KEYS.BASE],
//         () => postReview(body),
//         {
//             enabled: !!body,
//         }
//     );
// };

export const useAddReviewMutation = () => {
    const {mutate, data, isSuccess, error, isError} = useZustandMutation<PostReviewResponseT, PostReviewRequestT>(
        [REVIEWS_QUERY_KEYS.BASE],
        (body: PostReviewRequestT) => postReview(body),
    );

    return {mutate, data, isSuccess, error, isError};
};