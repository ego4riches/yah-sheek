import {type BaseResponseT, useQueryStore} from "@/shared";
import {type QueryKey, useMutation, type UseMutationOptions} from "@tanstack/react-query";

export const useZustandMutation = <TData, TVariables = void, TError = unknown, TContext = unknown>(
    key: QueryKey,
    mutationFn: (variables: TVariables) => Promise<BaseResponseT<TData>>,
    options?: UseMutationOptions<BaseResponseT<TData>, TError, TVariables, TContext>
) => {
    const setQuery = useQueryStore((s) => s.setQuery);

    return useMutation<BaseResponseT<TData>, TError, TVariables, TContext>({
        mutationKey: key,
        mutationFn,
        ...options,
        onSuccess: (data, variables, context) => {
            setQuery(key.join('-'), data);
            options?.onSuccess?.(data, variables, context);
        },
        onError: (error, variables, context) => {
            options?.onError?.(error, variables, context);
        },
        onSettled: (data, error, variables, context) => {
            options?.onSettled?.(data, error, variables, context);
        },
    });
};