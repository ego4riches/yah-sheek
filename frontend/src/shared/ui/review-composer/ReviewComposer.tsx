import {
    Button,
    BUTTON_VARIANTS,
    type ContentInputT,
    ReviewComposerWrapper,
    ReviewTextareaBox,
    type TextAreaChangeEventT
} from "@/shared";
import {useReviewComposerStore} from "@/shared/ui/review-composer/review-composer.store.ts";

export const ReviewComposer = ({isSubmitDisabled, onFocus, onSubmit}: ContentInputT) => {
    const {content, setContent} = useReviewComposerStore();

    const handleChange = (e: TextAreaChangeEventT) => {
        setContent(e.target.value)
    }

    return (
            <ReviewComposerWrapper>
                <ReviewTextareaBox
                        value={content}
                        onChange={handleChange}
                        onFocus={onFocus}
                        placeholder="오늘 내 야구 푸드는?"
                />
                <Button
                        onClick={onSubmit}
                        disabled={isSubmitDisabled}
                        variant={BUTTON_VARIANTS.PRIMARY}
                        children='등록'
                />
            </ReviewComposerWrapper>
    );
}; 