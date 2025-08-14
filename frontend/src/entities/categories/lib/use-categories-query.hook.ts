import {CATEGORIES_QUERY_KEYS, type CategoryT, fetchCategories} from "@/entities";
import {useZustandQuery} from "@/shared";

export const useCategoriesQuery = () => {
    return useZustandQuery<CategoryT[]>(
        [CATEGORIES_QUERY_KEYS.BASE],
        () => fetchCategories(),
        {
            staleTime: 1000 * 60, // 1분 캐시
        }
    );
};