import { fetchReviews, type GetReviewsRequestT, type GetReviewsResponseT, REVIEWS_QUERY_KEYS } from "@/entities";
import { mergeIfPresent, useZustandQuery } from "@/shared";

export const useReviewsQuery = (params: GetReviewsRequestT) => {
    // const categoryId = useCategoryMenuStore((s) => s.selectedCategoryId);
    // const sort = useSortOptionsStore((s) => s.selectedSortOption.value);

    const mergedParams = mergeIfPresent(params, {
        // categoryId,
        // sort,
    });

    return useZustandQuery<GetReviewsResponseT>(
        REVIEWS_QUERY_KEYS.list(mergedParams),
        () => fetchReviews(mergedParams),
        { enabled: !!params.teamId }
    );
};