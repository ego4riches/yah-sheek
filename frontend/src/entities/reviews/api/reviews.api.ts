import { type DeleteReviewResponseT, type GetReviewByIdResponseT, type GetReviewsRequestT, type GetReviewsResponseT, type PostReviewRequestT, type PostReviewResponseT } from "@/entities";
import { httpClient, REVIEWS_BASE_URL } from "@/shared";

const BASE_URL = REVIEWS_BASE_URL;

export const fetchReviews = async (params: GetReviewsRequestT) => {
    return await httpClient.get<GetReviewsResponseT>(BASE_URL, params);
}

export const fetchReviewById = async (id: string) => {
    return await httpClient.get<GetReviewByIdResponseT>(`${BASE_URL}/${id}`);
}

export const createReview = async (body: PostReviewRequestT) => {
    return await httpClient.post<PostReviewResponseT>(BASE_URL, body);
}

export const editReview = async (body: PostReviewRequestT) => {
    return await httpClient.post<PostReviewResponseT>(BASE_URL, body);
}

export const deleteReview = async (body: PostReviewRequestT) => {
    return await httpClient.post<DeleteReviewResponseT>(BASE_URL, body);
}