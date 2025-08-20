import { CategorySelector, useAddReviewForm } from '@/features';
import { RatingSelector, ReviewContentInput, TagManager } from '@/shared';
import { MediaUpload } from '@/shared/ui/media-upload/MediaUpload.tsx';
import { ComposerExpandedWrapper, ComposerHeaderBox, ReviewComposerWrapper, useReviewComposerStore, useReviewComposerVisibility, } from '@/widgets/review-composer';

export const ReviewComposer = () => {
    const { isExpanded, setIsExpanded } = useReviewComposerStore();
    const { isSubmitDisabled, submitReview } = useAddReviewForm();
    const { composerRef } = useReviewComposerVisibility();

    const handleFocus = () => setIsExpanded(true);

    return (
            <ReviewComposerWrapper ref={composerRef}>
                <ComposerExpandedWrapper isExpanded={isExpanded}>
                    <ComposerHeaderBox>
                        <CategorySelector/>
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