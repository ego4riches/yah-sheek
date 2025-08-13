import {QueryClient} from "@tanstack/react-query";

const queryDefaultOptions = {
    staleTime: 0,
    gcTime: 0,
    select: (res: any) => res.data, // Response data 필드만 추출
};

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: queryDefaultOptions,
    },
});