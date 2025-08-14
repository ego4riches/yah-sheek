import {type GetReviewsResponseT} from "@/entities";
import {api, REVIEWS_BASE_URL} from "@/shared";

const BASE_URL = REVIEWS_BASE_URL;

export const fetchReviews = async (teamId: number) => {
    const params = new URLSearchParams();
    params.append('teamId', String(teamId));

    const url = `${BASE_URL}?${params.toString()}`;

    return await api.get<GetReviewsResponseT>(url);
}