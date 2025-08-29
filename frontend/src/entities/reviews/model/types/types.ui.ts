import type { ReviewI } from "@/entities";
import type { PageT } from "@/shared";

// Props
export type ReviewFeedT = {
    teamId: number;
    onClick: (id: string) => void;
}

export type FeedsT = {
    reviews: PageT<ReviewI>;
    onClick: (id: string) => void;
}

export type FeedDetailT = {
    reviewId: string;
    onClose: () => void;
};