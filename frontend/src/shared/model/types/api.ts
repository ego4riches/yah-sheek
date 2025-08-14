// 기본 응답 래핑
export type BaseResponseT<T> = {
    status: number;
    message: string;
    data: T;
};

export type BaseErrorResponseT = {
    status: number;
    message: string;
};

// 페이지 데이터 응답 래핑
export type PageT<T> = {
    content: T[];
    pageable: PaginationResponseT;
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: SortResponseT;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
};

// 정렬 응답 래핑
export type SortResponseT = {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
};

// 페이지네이션 응답 래핑
export type PaginationResponseT = {
    sort: SortResponseT;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
};