import { fetchReviews, type GetReviewsRequestT, type GetReviewsResponseT, REVIEWS_QUERY_KEYS } from "@/entities";
import { useCategoryMenuStore } from "@/features";
import { mergeIfPresent, useSortOptionsStore, useZustandQuery } from "@/shared";

export const useReviewsQuery = (params: GetReviewsRequestT) => {
    const category = useCategoryMenuStore((s) => s.selectedCategory);
    const sort = useSortOptionsStore((s) => s.selectedSortOption.id);

    const mergedParams = mergeIfPresent(params, {
        category,
        sort,
    });

    return useZustandQuery<GetReviewsResponseT>(
        [REVIEWS_QUERY_KEYS.BASE, mergedParams],
        () => fetchReviews(mergedParams),
        {
            enabled: !!params.teamId,
            staleTime: 1000 * 60,
        }
    );
};