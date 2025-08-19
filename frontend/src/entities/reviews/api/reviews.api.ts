import {type GetReviewsRequestT, type GetReviewsResponseT} from "@/entities";
import {httpClient, REVIEWS_BASE_URL} from "@/shared";

const BASE_URL = REVIEWS_BASE_URL;

export const fetchReviews = async (params: GetReviewsRequestT) => {
    return await httpClient.get<GetReviewsResponseT>(BASE_URL, params);
}