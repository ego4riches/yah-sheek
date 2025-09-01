import { useCategoriesSelectorStore, useTeamStore } from "@/entities";
import { useAddReviewMutation, useAddReviewVisibility } from "@/features";
import { mediaUploadFormatter, useMediaUploadStore, useRatingSelectorStore, useReviewContentInputStore, useTagManagerStore } from "@/shared";

export const useAddReviewForm = () => {
    const teamId = useTeamStore((s) => s.team?.id);
    const category = useCategoriesSelectorStore((s) => s.category);
    const content = useReviewContentInputStore((s) => s.content);
    const rating = useRatingSelectorStore((s) => s.rating);
    const tags = useTagManagerStore((s) => s.tags);
    const attachments = useMediaUploadStore((s) => s.attachments);

    // userId: 1 임시 하드 코딩
    const { mutate } = useAddReviewMutation(1);
    const { reset } = useAddReviewVisibility();

    const isSubmitDisabled = !teamId || !category.categoryKey || !content.trim() || rating === 0;

    const submitReview = () => {
        if (!teamId) return console.error("Cannot submit review: Missing teamId");

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