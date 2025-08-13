// Reviews: Mock data
export interface ReviewMockDataI {
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