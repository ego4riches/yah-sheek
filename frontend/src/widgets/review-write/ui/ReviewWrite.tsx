import {MediaUpload} from "@/shared/ui/media-upload/MediaUpload.tsx";
import {CategorySelector, RatingSelector, ReviewComposer, TagManager} from "@/shared";
import {ExpandedWriteWrapper, ReviewWriteWrapper, WriteHeaderBox} from "@/widgets/review-write/config/styled.ts";
import {useReviewWrite, useReviewWriteStore} from "@/widgets/review-write";

export const ReviewWrite = () => {
    const {isExpanded, setIsExpanded} = useReviewWriteStore();
    const {isSubmitDisabled, composerRef, reset} = useReviewWrite();

    const handleFocus = () => {
        setIsExpanded(true);
    }

    const handleSubmit = () => {
        // 구현 예정
        reset();
    };

    return (
            <ReviewWriteWrapper ref={composerRef}>
                <ExpandedWriteWrapper isExpanded={isExpanded}>
                    <WriteHeaderBox>
                        <CategorySelector/>
                        <RatingSelector/>
                    </WriteHeaderBox>
                    <TagManager/>
                </ExpandedWriteWrapper>

                <ReviewComposer
                        isSubmitDisabled={isSubmitDisabled}
                        onFocus={handleFocus}
                        onSubmit={handleSubmit}
                />

                <ExpandedWriteWrapper isExpanded={isExpanded}>
                    <MediaUpload/>
                </ExpandedWriteWrapper>
            </ReviewWriteWrapper>
    );
};