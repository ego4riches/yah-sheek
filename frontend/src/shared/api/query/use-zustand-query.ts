import {type BaseResponseT, useQueryEffects, useQueryStore, type ZustandQueryOptions} from "@/shared";
import {type QueryKey, useQuery} from "@tanstack/react-query";


export const useZustandQuery = <TData, TError = unknown>(
    key: QueryKey,
    queryFn: () => Promise<BaseResponseT<TData>>,
    options?: ZustandQueryOptions<BaseResponseT<TData>, TError>
) => {
    const setQuery = useQueryStore((s) => s.setQuery);

    const query = useQuery<BaseResponseT<TData>, TError, TData>({
        queryKey: key,
        queryFn,
        ...options,
        select: (res) => res.data,
    });

    useQueryEffects(query, {
        onSuccess: (data) => {
            setQuery(key.join('-'), data);
        },
    });

    return query;
};