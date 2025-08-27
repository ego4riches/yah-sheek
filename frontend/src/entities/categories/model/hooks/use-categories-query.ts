import { CATEGORIES_QUERY_KEYS, fetchCategories, type GetCategoriesResponseT } from "@/entities";
import { useZustandQuery } from "@/shared";

export const useCategoriesQuery = () => {
    return useZustandQuery<GetCategoriesResponseT>(
        CATEGORIES_QUERY_KEYS.all,
        () => fetchCategories(),
        { staleTime: 1000 * 60 * 60 * 24 }
    );
};