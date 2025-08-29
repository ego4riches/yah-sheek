import { FeedDetailContentsBox, type FeedDetailT, FeedDetailWrapper, useReviewByIdQuery } from "@/entities";
import { AsyncBoundary, FeedDetailHeader, FeedDetailInfo, FeedDetailSwiper, FeedLikeCounter } from "@/shared";
import Img1 from "@/shared/config/assets/test1.jpg";
import Img2 from "@/shared/config/assets/test2.jpg";
import Img3 from "@/shared/config/assets/test3.jpg";
import Img4 from "@/shared/config/assets/test4.jpg";
import Img5 from "@/shared/config/assets/test5.jpg";
import type { AxiosError } from "axios";

export const FeedDetail = ({ reviewId, onClose }: FeedDetailT) => {
    const { data, status, error } = useReviewByIdQuery(reviewId);

    const testMedia = [Img1, Img2, Img3, Img4, Img5]

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
                            />
                            <FeedDetailInfo review={review}/>
                            <FeedDetailSwiper media={testMedia}/>
                            <FeedDetailContentsBox>
                                <p>{review.content}</p>
                                <FeedLikeCounter likes={review.likesCount}/>
                            </FeedDetailContentsBox>
                        </FeedDetailWrapper>
                }
            </AsyncBoundary>
    );
};