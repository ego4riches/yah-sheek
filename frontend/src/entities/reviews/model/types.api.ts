import type {ReviewForm, ReviewI, ReviewLikeParamsI, ReviewParamsI} from "@/entities";
import type {BaseResponseT, PageT} from "@/shared";

// Reviews
export type GetReviewsResponseT = PageT<ReviewI>;
export type GetReviewByIdResponseT = BaseResponseT<ReviewI>;
export type GetReviewsRequestT = ReviewParamsI;

export type PostReviewResponseT = BaseResponseT<ReviewI>
export type PostReviewRequestT = ReviewForm;

export type DeleteReviewResponseT = BaseResponseT<null>;

// Review Likes
export type PostReviewLikeResponse = BaseResponseT<null>;
export type PostReviewLikeRequest = ReviewLikeParamsI;

export type DeleteReviewLikeResponse = BaseResponseT<null>;
export type DeleteReviewLikeRequest = ReviewLikeParamsI;