// Props
export type StarT = {
    filled: boolean;
    onClick: () => void;
};

export type RatingSelectorT = {
    value?: number;
}

// styled-components Props
export type RatingStarButtonBoxT = {
    filled: boolean;
}

// Store
export interface RatingSelectorStoreI {
    rating: number
    setRating: (rating: number) => void
}