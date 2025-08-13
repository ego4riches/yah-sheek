import {useQueryEffects, useQueryStore, type ZustandQueryOptions} from "@/shared";
import {type QueryKey, useQuery} from "@tanstack/react-query";


export const useZustandQuery = <TData, TError = unknown>(
    key: QueryKey,
    queryFn: () => Promise<TData>,
    options?: ZustandQueryOptions<TData, TError>
) => {
    const setQuery = useQueryStore((s) => s.setQuery);

    const query = useQuery<TData, TError, TData>({
        queryKey: key,
        queryFn,
        ...options,
    });

    useQueryEffects(query, {
        onSuccess: (data) => {
            setQuery(key.join('-'), data);
        },
    });

    return query;
};