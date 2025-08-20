import type {PostReviewRequestT, PostReviewResponseT} from "@/entities";
import {httpClient, REVIEWS_BASE_URL} from "@/shared";

const BASE_URL = REVIEWS_BASE_URL;

export const postReview = async (body: PostReviewRequestT) => {
    return await httpClient.post<PostReviewResponseT>(BASE_URL, body);
}