import {
    Button,
    BUTTON_VARIANTS,
    type ContentInputT,
    ReviewContentInputWrapper,
    ReviewTextareaBox,
    type TextAreaChangeEventT,
    useReviewContentInputStore
} from "@/shared";

export const ReviewContentInput = ({isSubmitDisabled, onFocus, onSubmit}: ContentInputT) => {
    const {content, setContent} = useReviewContentInputStore();

    const handleChange = (e: TextAreaChangeEventT) => {
        setContent(e.target.value)
    }

    return (
            <ReviewContentInputWrapper>
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
            </ReviewContentInputWrapper>
    );
}; 