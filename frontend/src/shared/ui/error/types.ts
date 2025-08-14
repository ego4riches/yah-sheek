import type {ReactNode} from "react";

// Props
export type NotFoundT = {
    code?: number | undefined;
}


export type AsyncBoundaryT<T> = {
    data?: T;
    status: string;
    errorCode: number | undefined;
    children: (data: T) => ReactNode;
    pendingFallback?: ReactNode;
    errorFallback?: ReactNode;
};