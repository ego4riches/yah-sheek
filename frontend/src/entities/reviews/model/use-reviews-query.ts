import {fetchReviews, type GetReviewsRequestT, type GetReviewsResponseT, REVIEWS_QUERY_KEYS} from "@/entities";
import {mergeIfPresent, useCategoryMenuStore, useZustandQuery} from "@/shared";

export const useReviewsQuery = (params: GetReviewsRequestT) => {
    const selectedCategory = useCategoryMenuStore((s) => s.selectedCategory);
    // const selectedSortOptions = useSortOptionsStore((s) => s.selectedSortOption);

    const mergedParams = mergeIfPresent(params, {
        category: selectedCategory,
        // sort: selectedSortOptions.id
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