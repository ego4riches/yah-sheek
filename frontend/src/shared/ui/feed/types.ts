// Props
export type FeedT = {
    feed: FeedMockDataI
}

export type FeedPreviewT = {
    feed: FeedMockDataI
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

// Mock data
export interface FeedMockDataI {
    id: string;
    content: string;
    category: string;
    author: string;
    thumbnailUrl: string | null;
    hasVideo: boolean;
    views: number;
    likes: number;
    createdAt: string;
}