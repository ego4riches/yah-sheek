import { useCategorySelectorStore, useMediaUploadStore, useRatingSelectorStore, useReviewContentInputStore, useTagManagerStore } from "@/shared";

export const useReviewComposerSubmit = () => {
    const { category } = useCategorySelectorStore();
    const { rating } = useRatingSelectorStore();
    const { tags } = useTagManagerStore();
    const { content } = useReviewContentInputStore();
    const { attachments } = useMediaUploadStore();

    const isSubmitDisabled = !content.trim() || !category || rating === 0;

    const submitReview = () => {
        console.log('category: ', category, 'rating: ', rating, 'tags: ', tags, 'content: ', content, 'attachments: ', attachments);
    }

    return {
        isSubmitDisabled,
        submitReview,
    }
}