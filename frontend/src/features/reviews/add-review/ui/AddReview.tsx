import { CategoriesSelector } from "@/entities";
import { AddReviewExpandedWrapper, AddReviewHeaderBox, AddReviewWrapper, useAddReviewForm, useAddReviewStore, useAddReviewVisibility } from '@/features';
import { MediaUpload, RatingSelector, ReviewContentInput, TagManager, useFeedStore } from '@/shared';

export const AddReview = () => {
    const { isExpanded, setIsExpanded } = useAddReviewStore();
    const { selectedFeedId } = useFeedStore();
    const { isSubmitDisabled, submitReview } = useAddReviewForm();
    const { composerRef } = useAddReviewVisibility();

    const handleFocus = () => setIsExpanded(true);

    return (
            !selectedFeedId &&
            <AddReviewWrapper ref={composerRef} isExpanded={isExpanded}>
                <AddReviewExpandedWrapper isExpanded={isExpanded}>
                    <AddReviewHeaderBox>
                        <CategoriesSelector/>
                        <RatingSelector/>
                    </AddReviewHeaderBox>
                    <TagManager/>
                </AddReviewExpandedWrapper>

                <ReviewContentInput
                        isSubmitDisabled={isSubmitDisabled}
                        onFocus={handleFocus}
                        onSubmit={submitReview}
                />

                <AddReviewExpandedWrapper isExpanded={isExpanded}>
                    <MediaUpload/>
                </AddReviewExpandedWrapper>
            </AddReviewWrapper>);
};