import type { ReviewForm, ReviewI, ReviewLikeParamsI, ReviewParamsI } from "@/entities";

// Reviews
export type GetReviewsResponseT = ReviewI[];
export type GetReviewsRequestT = ReviewParamsI;

export type GetReviewByIdResponseT = ReviewI;

export type PostReviewResponseT = ReviewI;
export type PostReviewRequestT = ReviewForm;

export type DeleteReviewResponseT = null;

// Review Likes
export type PostReviewLikeResponse = null;
export type PostReviewLikeRequest = ReviewLikeParamsI;

export type DeleteReviewLikeResponse = null;
export type DeleteReviewLikeRequest = ReviewLikeParamsI;