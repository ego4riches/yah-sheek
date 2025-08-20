import {useAddReviewMutation, useCategorySelectorStore} from "@/features";
import {mediaUploadFormatter, useMediaUploadStore, useRatingSelectorStore, useReviewContentInputStore, useTagManagerStore} from "@/shared";
import {useReviewComposerVisibility} from "@/widgets/review-composer";

export const useAddReviewForm = () => {
    const category = useCategorySelectorStore((s) => s.category);
    const rating = useRatingSelectorStore((s) => s.rating);
    const tags = useTagManagerStore((s) => s.tags);
    const content = useReviewContentInputStore((s) => s.content);
    const attachments = useMediaUploadStore((s) => s.attachments);

    const {reset} = useReviewComposerVisibility();
    const {mutate} = useAddReviewMutation();

    const isSubmitDisabled = !content.trim() || !category.categoryKey || rating === 0;

    const submitReview = () => {
        const review = {
            userId: 0,
            teamId: 0,
            categoryId: category.id,
            content,
            rating,
            tags,
            mediaList: mediaUploadFormatter(attachments)
        }

        mutate(review, {
            onSuccess: () => {
                alert("Review submitted successfully");
                reset();
            },
            onError: () => {
                alert("Failed to submit review");
            }
        })
    }

    return {
        isSubmitDisabled,
        submitReview
    }
};