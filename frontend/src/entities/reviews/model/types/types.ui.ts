import type { ReviewI } from "@/entities";
import type { PageT } from "@/shared";

// Props
export type ReviewFeedT = {
    teamId: number;
    onClick: (id: number) => void;
}

export type FeedsT = {
    reviews: PageT<ReviewI>;
    onClick: (id: number) => void;
}

export type FeedDetailT = {
    reviewId: number;
    onClose: () => void;
};