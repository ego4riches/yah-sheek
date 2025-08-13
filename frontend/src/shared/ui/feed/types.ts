import type { ReviewMockDataI } from "@/entities";

// Props
export type FeedT = {
    feed: ReviewMockDataI
}

export type FeedPreviewT = {
    feed: ReviewMockDataI
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