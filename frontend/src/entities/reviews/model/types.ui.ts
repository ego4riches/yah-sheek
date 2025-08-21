import type { ReviewI } from "@/entities";
import type { PageT } from "@/shared";

// Props
export type ReviewFeedT = {
    teamId: number;
}

export type FeedsT = {
    reviews: PageT<ReviewI>;
}