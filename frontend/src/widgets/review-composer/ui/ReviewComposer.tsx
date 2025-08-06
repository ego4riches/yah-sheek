import {MediaUpload} from "@/shared/ui/media-upload/MediaUpload.tsx";
import {CategorySelector, RatingSelector, ReviewContentInput, TagManager} from "@/shared";
import {
    ComposerExpandedWrapper,
    ComposerHeaderBox,
    ReviewComposerWrapper,
    useReviewComposer,
    useReviewComposerStore
} from "@/widgets/review-composer";

export const ReviewComposer = () => {
    const {isExpanded, setIsExpanded} = useReviewComposerStore();
    const {isSubmitDisabled, composerRef, reset} = useReviewComposer();

    const handleFocus = () => {
        setIsExpanded(true);
    }

    const handleSubmit = () => {
        // 구현 예정
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