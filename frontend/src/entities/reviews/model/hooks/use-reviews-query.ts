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

// export const useReviewsInfiniteQuery = (params: GetReviewsRequestT) => {
//     const categoryId = useCategoryMenuStore((s) => s.selectedCategoryId);
//     const sort = useSortOptionsStore((s) => s.selectedSortOption.value);
//
//     const mergedParams = mergeIfPresent(params, {
//         categoryId,
//         sort,
//     });
//
//     return useInfiniteQuery<GetReviewsResponseT, Error, GetReviewsResponseT, ReturnType<typeof REVIEWS_QUERY_KEYS.list>, string | null>({
//         queryKey: REVIEWS_QUERY_KEYS.list(mergedParams),
//         initialPageParam: null,
//         queryFn: ({ pageParam }) =>
//             fetchReviews({ ...mergedParams, cursor: pageParam, limit: 10 }),
//         getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
//         enabled: !!params.teamId,
//     });
// };