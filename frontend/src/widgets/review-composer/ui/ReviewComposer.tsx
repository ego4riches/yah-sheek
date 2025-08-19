import {CategorySelector, RatingSelector, ReviewContentInput, TagManager} from "@/shared";
import {MediaUpload} from "@/shared/ui/media-upload/MediaUpload.tsx";
import {ComposerExpandedWrapper, ComposerHeaderBox, ReviewComposerWrapper, useReviewComposerStore, useReviewComposerSubmit, useReviewComposerVisibility} from "@/widgets/review-composer";

export const ReviewComposer = () => {
    const {isExpanded, setIsExpanded} = useReviewComposerStore();
    const {composerRef, reset} = useReviewComposerVisibility();
    const {isSubmitDisabled, submitReview} = useReviewComposerSubmit();

    const handleFocus = () => {
        setIsExpanded(true);
    }

    const handleSubmit = () => {
        submitReview();
        reset();
    };

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
                        onSubmit={handleSubmit}
                />

                <ComposerExpandedWrapper isExpanded={isExpanded}>
                    <MediaUpload/>
                </ComposerExpandedWrapper>
            </ReviewComposerWrapper>
    );
};