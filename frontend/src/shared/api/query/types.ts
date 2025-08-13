import type {UseQueryOptions} from "@tanstack/react-query";

// Store
export interface QueryStoreI {
    queries: Record<string, unknown>;
    setQuery: (key: string, data: unknown) => void;
}

// Hook
export interface ZustandQueryOptions<TData, TError = unknown>
    extends Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'> {
}