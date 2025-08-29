import { CategoriesSelector } from "@/entities/categories/ui/selector";
import { useAddReviewForm } from '@/features';
import { RatingSelector, ReviewContentInput, TagManager, useFeedStore } from '@/shared';
import { MediaUpload } from '@/shared/ui/media-upload/MediaUpload.tsx';
import { ComposerExpandedWrapper, ComposerHeaderBox, ReviewComposerWrapper, useReviewComposerStore, useReviewComposerVisibility, } from '@/widgets/review-composer';

export const ReviewComposer = () => {
    const { isExpanded, setIsExpanded } = useReviewComposerStore();
    const { selectedFeedId } = useFeedStore();
    const { isSubmitDisabled, submitReview } = useAddReviewForm();
    const { composerRef } = useReviewComposerVisibility();

    const handleFocus = () => setIsExpanded(true);

    return (
            !selectedFeedId &&
            <ReviewComposerWrapper ref={composerRef} isExpanded={isExpanded}>
                <ComposerExpandedWrapper isExpanded={isExpanded}>
                    <ComposerHeaderBox>
                        <CategoriesSelector/>
                        <RatingSelector/>
                    </ComposerHeaderBox>
                    <TagManager/>
                </ComposerExpandedWrapper>

                <ReviewContentInput
                        isSubmitDisabled={isSubmitDisabled}
                        onFocus={handleFocus}
                        onSubmit={submitReview}
                />

                <ComposerExpandedWrapper isExpanded={isExpanded}>
                    <MediaUpload/>
                </ComposerExpandedWrapper>
            </ReviewComposerWrapper>);
};