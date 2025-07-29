import type { SortOptionI } from "@/shared";

export const defaultSortOption = {
    id: 'latest',
    label: '최신순',
    value: 'latest',
};

export const sortOptions: SortOptionI[] = [
    {
        id: 'latest',
        label: '최신순',
        value: 'latest',
    },
    {
        id: 'popular',
        label: '인기순',
        value: 'popular',
    },
    {
        id: 'rating',
        label: '별점순',
        value: 'rating',
    },
    {
        id: 'withPhotos',
        label: '포토 리뷰만',
        value: 'withPhotos',
    },
    {
        id: 'myReviews',
        label: '내가 쓴 리뷰만',
        value: 'myReviews',
    },
];