import {
    Button,
    BUTTON_VARIANTS,
    type ContentInputT,
    REVIEW_INPUT_PLACEHOLDER,
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
                        placeholder={REVIEW_INPUT_PLACEHOLDER}
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