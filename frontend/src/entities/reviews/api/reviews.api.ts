import {getTeamKey} from "@/entities";
import {api, REVIEWS_BASE_URL} from "@/shared";

const BASE_URL = REVIEWS_BASE_URL

export const fetchReviews = async <TData>(team: string) => {
    const teamKey = getTeamKey(team);
    if (!teamKey) return [];

    const url = `${BASE_URL}/${teamKey}`;

    return await api.get<TData>(url);
}