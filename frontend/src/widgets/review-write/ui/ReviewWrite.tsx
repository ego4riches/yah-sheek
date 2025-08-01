import {MediaUpload} from "@/shared/ui/media-upload/MediaUpload.tsx";
import {Button, CategorySelector, RatingSelector, ReviewComposer, TagManager} from "@/shared";
import {useReviewComposer} from "@/widgets/review-write/lib/useReviewComposer.ts";
import {useClickOutside} from "@/shared/lib/hooks/useClickOutside.ts";
import {ExpandedWriteWrapper, ReviewWriteWrapper, WriteHeaderBox} from "@/widgets/review-write/config/styled.ts";

export const ReviewWrite = () => {
    const {
        // 상태
        content,
        attachments,
        isComposerExpanded,
        isTagInputOpen,
        isCategoryOpen,
        isSubmitDisabled,

        // 액션
        setContent,
        removeAttachment,
        handleContentInputFocus,
        handleCategoryToggle,
        handleTagInputBlur,
        handleFileChange,
        handleSubmit,
    } = useReviewComposer();

    // 컴포저 바깥 영역 클릭 시 컴포저 축소
    const composerRef = useClickOutside(() => {
        // 카테고리 열려 있을 경우 닫기
        // if (isCategoryOpen) {
        //     handleCategoryToggle();
        //     return;
        // }
        //
        // // 태그 열려 있을 경우 닫기
        // if (isTagInputOpen) {
        //     handleTagInputBlur();
        //     return;
        // }
        //
        // // 컴포저 확장되어 있을 경우 닫기
        // if (isComposerExpanded) {
        //     // setComposerExpanded를 store에서 가져와야 함
        //     // 현재는 hook에서 제공하지 않으므로 store에서 직접 가져옴
        //     const {setComposerExpanded} = useReviewComposerStore.getState();
        //     setComposerExpanded(false);
        // }
    }, [isComposerExpanded, isTagInputOpen, isCategoryOpen, handleTagInputBlur, handleCategoryToggle]);

    return (
            <ReviewWriteWrapper ref={composerRef}>
                <ExpandedWriteWrapper isExpanded={isComposerExpanded}>
                    <WriteHeaderBox>
                        <CategorySelector/>
                        <RatingSelector/>
                    </WriteHeaderBox>
                    <TagManager/>
                </ExpandedWriteWrapper>

                <ReviewComposer
                        content={content}
                        isSubmitDisabled={isSubmitDisabled}
                        onContentChange={(e) => setContent(e.target.value)}
                        onFocus={handleContentInputFocus}
                        onSubmit={handleSubmit}
                />

                <ExpandedWriteWrapper isExpanded={isComposerExpanded}>
                    <MediaUpload
                            attachments={attachments}
                            onFileChange={handleFileChange}
                            onAttachmentRemove={removeAttachment}
                    />
                    <Button onClick={handleSubmit} disabled={isSubmitDisabled} children='리뷰 작성하기'/>
                </ExpandedWriteWrapper>
            </ReviewWriteWrapper>
    );
};