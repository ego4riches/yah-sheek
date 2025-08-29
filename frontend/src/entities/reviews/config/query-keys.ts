export const REVIEWS_QUERY_KEYS = {
    all: ['reviews'],
    lists: () => [...REVIEWS_QUERY_KEYS.all, 'list'],
    list: (params: object) => [...REVIEWS_QUERY_KEYS.lists(), params],
    detail: (reviewId: string) => [...REVIEWS_QUERY_KEYS.all, 'detail', reviewId],
    posts: (userId: number) => [...REVIEWS_QUERY_KEYS.all, 'posts', userId],
};