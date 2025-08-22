import { useAddReviewMutation, useCategorySelectorStore } from "@/features";
import { useLayoutStore } from "@/features/teams/layout/model/layout.store";
import { mediaUploadFormatter, useMediaUploadStore, useRatingSelectorStore, useReviewContentInputStore, useTagManagerStore } from "@/shared";
import { useReviewComposerVisibility } from "@/widgets/review-composer";

export const useAddReviewForm = () => {
    const teamId = useLayoutStore((s) => s.team?.id);
    const category = useCategorySelectorStore((s) => s.category);
    const content = useReviewContentInputStore((s) => s.content);
    const rating = useRatingSelectorStore((s) => s.rating);
    const tags = useTagManagerStore((s) => s.tags);
    const attachments = useMediaUploadStore((s) => s.attachments);

    const { reset } = useReviewComposerVisibility();
    const { mutate } = useAddReviewMutation();

    const isSubmitDisabled = !teamId || !category.categoryKey || !content.trim() || rating === 0;

    const submitReview = () => {
        if (!teamId) return;

        const review = {
            userId: 0,
            teamId,
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