import type {UseQueryResult} from "@tanstack/react-query";
import {useEffect, useRef} from "react";

type QueryEffectsOptions<TData, TError> = {
    onSuccess?: (data: TData) => void;
    onError?: (error: TError) => void;
    onSettled?: (data: TData | undefined, error: TError | null) => void;
};

export const useQueryEffects = <TData, TError>(
    query: UseQueryResult<TData, TError>,
    options: QueryEffectsOptions<TData, TError>,
) => {
    const {onSuccess, onError, onSettled} = options;

    // 이전 상태 추적 ref
    const prevStateRef = useRef({
        isSuccess: false,
        isError: false,
        data: undefined as TData | undefined,
        error: null as TError | null,
    });

    useEffect(() => {
        const {isSuccess, isError, data, error} = query;
        const prevState = prevStateRef.current;

        // 성공 시 콜백 실행
        if (isSuccess && onSuccess && !prevState.isSuccess) {
            onSuccess(data as TData);
        }

        // 에러 시 콜백 실행
        if (isError && onError && !prevState.isError) {
            onError(error as TError);
        }

        // 성공 또는 에러 (요청 완료) 시 콜백 실행
        if ((isSuccess || isError) && onSettled && !(prevState.isSuccess || prevState.isError)) {
            onSettled(data, error);
        }

        // 현재 상태 저장
        prevStateRef.current = {isSuccess, isError, data, error};

    }, [query.isSuccess, query.isError, query.data, query.error, onSuccess, onError, onSettled]);

    return query;
}