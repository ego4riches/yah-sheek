import { EditReviewTextareaBox, FeedDetailContentsBox, FeedDetailWrapper, useReviewByIdQuery } from "@/entities";
import { type EditReviewT, useEditReviewStore } from "@/features";
import { AsyncBoundary, FeedDetailHeader, FeedDetailInfo, FeedLikeCounter, MediaUpload, REVIEW_INPUT_PLACEHOLDER, type TextAreaChangeEventT } from "@/shared";
import Img1 from "@/shared/config/assets/test1.jpg";
import Img2 from "@/shared/config/assets/test2.jpg";
import Img3 from "@/shared/config/assets/test3.jpg";
import Img4 from "@/shared/config/assets/test4.jpg";
import Img5 from "@/shared/config/assets/test5.jpg";
import type { AxiosError } from "axios";

export const EditReview = ({ reviewId, onClose, onEdit }: EditReviewT) => {
    const { data, status, error } = useReviewByIdQuery(reviewId);
    const { isEdit, value, setValue } = useEditReviewStore();

    const testMedia = [Img1, Img2, Img3, Img4, Img5]

    const handleChange = (e: TextAreaChangeEventT) => {
        setValue(e.target.value)
    }

    return (
            <AsyncBoundary
                    data={data}
                    status={status}
                    errorCode={(error as AxiosError)?.response?.status}
            >
                {(review) =>
                        <FeedDetailWrapper isVisible={!!reviewId}>
                            <FeedDetailHeader
                                    breadcrumb={[review.teamKey, review.categoryName].filter(Boolean)}
                                    onClose={onClose}
                                    onEdit={() => onEdit(review.content)}
                            />
                            <FeedDetailInfo review={review} isEdit={isEdit}/>
                            <FeedDetailContentsBox>
                                <EditReviewTextareaBox
                                        value={value}
                                        onChange={handleChange}
                                        placeholder={REVIEW_INPUT_PLACEHOLDER}
                                        minRows={1}
                                />
                                <MediaUpload files={testMedia}/>
                                <FeedLikeCounter likes={review.likesCount}/>
                            </FeedDetailContentsBox>
                        </FeedDetailWrapper>
                }
            </AsyncBoundary>
    );
};