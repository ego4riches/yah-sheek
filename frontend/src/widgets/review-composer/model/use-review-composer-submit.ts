import {useCategorySelectorStore, useMediaUploadStore, useRatingSelectorStore, useReviewContentInputStore, useTagManagerStore} from "@/shared";

export const useReviewComposerSubmit = () => {
    const {category} = useCategorySelectorStore();
    const {rating} = useRatingSelectorStore();
    const {tags} = useTagManagerStore();
    const {content} = useReviewContentInputStore();
    const {attachments} = useMediaUploadStore();

    const isSubmitDisabled = !content.trim() || !category.categoryKey || rating === 0;

    const submitReview = () => {
        const review = {
            userId: 0,
            teamId: 0,
            categoryId: category.id,
            content,
            rating,
            tags,
            mediaList: attachments
        }
        console.log('review: ', review);
    }

    return {
        isSubmitDisabled,
        submitReview,
    }
}