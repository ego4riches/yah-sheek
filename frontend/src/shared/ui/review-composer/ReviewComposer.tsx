import type {ContentInputT} from "@/shared";
import {ReviewComposerWrapper, ReviewSubmitButtonBox, ReviewTextareaBox} from "@/shared";

export const ReviewComposer = ({content, isSubmitDisabled, onContentChange, onFocus, onSubmit}: ContentInputT) => {
    return (
            <ReviewComposerWrapper>
                <ReviewTextareaBox
                        value={content}
                        onChange={onContentChange}
                        onFocus={onFocus}
                        placeholder="오늘 내 야구 푸드는?"
                />
                <ReviewSubmitButtonBox
                        onClick={onSubmit}
                        disabled={isSubmitDisabled}
                >
                    리뷰 작성
                </ReviewSubmitButtonBox>
            </ReviewComposerWrapper>
    );
}; 