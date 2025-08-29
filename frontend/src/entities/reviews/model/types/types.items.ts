import type { ReviewMediaTypeT } from "@/shared";

// Item
export interface ReviewI {
    id: string;
    userId: number;
    nickname: string;
    teamId: number;
    teamKey: string;
    categoryId: number;
    categoryName: string;
    content: string;
    rating: number;
    viewsCount: number;
    likesCount: number;
    createdAt: string; // ISO8601 string
    tags: string[];
    media: ReviewMediaItemI;
}

export interface ReviewMediaItemI {
    mediaType: ReviewMediaTypeT;
    mediaUrl: string[];
    thumbnailUrl: string | null;
    orderIndex: number | null;
}

export interface ReviewMediaListI extends ReviewMediaItemI {
    fileSize?: number | null;
    mimeType?: string | null;
}

// Params
export interface ReviewParamsI {
    teamId: number;
    categoryId?: number;
    sort?: 'recent' | string;
    page?: number;
    size?: number;
}

export interface ReviewLikeParamsI {
    userId: number
}

// Body
export interface ReviewForm {
    userId: number;
    teamId: number;
    categoryId: number;
    content: string;
    rating: number;
    tags?: string[] | null;
    mediaList?: ReviewMediaListI[] | null;
}