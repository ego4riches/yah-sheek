import type { ReviewI } from "@/entities";

// Props
export type FeedDetailHeaderT = {
    breadcrumb: string[];
    onClose: () => void;
}

export type FeedDetailInfoT = {
    review: ReviewI;
}

export type BreadcrumbsT = {
    items: string[];
}

// Store
export interface SwiperStoreI {
    hasMultipleSlides: boolean;
    setHasMultipleSlides: (value: boolean) => void;
}