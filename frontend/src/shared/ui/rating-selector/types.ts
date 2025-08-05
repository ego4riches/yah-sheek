// Props
export type StarT = {
    filled: boolean;
    onClick: () => void;
};

// styled-components Props
export type RatingStarButtonBoxT = {
    filled: boolean;
}

// Store
export interface RatingSelectorStoreI {
    rating: number
    setRating: (rating: number) => void
}