import { ErrorPage } from "@/pages/ErrorPage";
import { type AsyncBoundaryT, LoadingSpinner, STATUS } from "@/shared";

export const AsyncBoundary = <T, >(
        {
            data,
            status,
            errorCode,
            children,
            pendingFallback = <LoadingSpinner/>,
            errorFallback = <ErrorPage code={errorCode}/>,
        }: AsyncBoundaryT<T>) => {
    if (status === STATUS.PENDING) return <>{pendingFallback}</>;
    if (status === STATUS.ERROR) return <>{errorFallback}</>;

    return <>{children(data as T)}</>;
};