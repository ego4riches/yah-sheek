import type {ReviewI} from "@/entities";
import type {REVIEW_MEDIA_TYPE} from "@/shared";

// Props
export type FeedT = {
    review: ReviewI;
}

export type FeedPreviewT = {
    feed: ReviewI
}

export type FeedThumbnailT = {
    image: string | null;
    video: boolean;
}

export type FeedLikeCounterT = {
    likes: number;
}

// styled-components Props
export type hasSrcT = {
    hasSrc: boolean;
}


// Item
export type ReviewMediaTypeT = keyof typeof REVIEW_MEDIA_TYPE;