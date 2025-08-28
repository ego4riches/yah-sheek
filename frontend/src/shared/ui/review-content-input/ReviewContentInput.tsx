import { useTeamStore } from "@/entities";
import { Button, BUTTON_SIZES, BUTTON_VARIANTS, BUTTON_WEIGHTS, type ContentInputT, REVIEW_INPUT_PLACEHOLDER, ReviewContentInputWrapper, ReviewTextareaBox, type TextAreaChangeEventT, useReviewContentInputStore } from "@/shared";

export const ReviewContentInput = ({ isSubmitDisabled, onFocus, onSubmit }: ContentInputT) => {
    const { team } = useTeamStore();
    const { content, setContent } = useReviewContentInputStore();

    const handleChange = (e: TextAreaChangeEventT) => {
        setContent(e.target.value)
    }

    return (
            <ReviewContentInputWrapper>
                <ReviewTextareaBox
                        teamKey={team?.teamKey}
                        value={content}
                        onChange={handleChange}
                        onFocus={onFocus}
                        placeholder={REVIEW_INPUT_PLACEHOLDER}
                        minRows={1}
                        maxRows={20}
                />
                <Button
                        onClick={onSubmit}
                        disabled={isSubmitDisabled}
                        size={BUTTON_SIZES.LARGE}
                        weight={BUTTON_WEIGHTS.BOLD}
                        variant={BUTTON_VARIANTS.PRIMARY_300}
                        children='등록'
                />
            </ReviewContentInputWrapper>
    );
}; 