import {ReviewComposerWrapper} from "@/shared/ui/review-composer/styled.ts";
import {useReviewComposerStore} from "@/shared";

export const ReviewComposer = () => {
    const {content, setContent} = useReviewComposerStore();

    return (
            <ReviewComposerWrapper>
                <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="리뷰를 입력해주세요"
                />
            </ReviewComposerWrapper>
    );
};