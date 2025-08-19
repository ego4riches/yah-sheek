import type {SortOptionI} from "@/shared";

export const defaultSortOption = {
    id: 'recent',
    label: '최신순',
    value: 'recent',
};

export const sortOptions: SortOptionI[] = [
    defaultSortOption,
    {
        id: 'likes',
        label: '인기순',
        value: 'likes',
    },
    // {
    //     id: 'rating',
    //     label: '별점순',
    //     value: 'rating',
    // },
    // {
    //     id: 'withPhotos',
    //     label: '포토 리뷰만',
    //     value: 'withPhotos',
    // },
    // {
    //     id: 'myReviews',
    //     label: '내가 쓴 리뷰만',
    //     value: 'myReviews',
    // },
];