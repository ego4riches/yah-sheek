import { type FeedDetailT, FeedDetailWrapper } from "@/entities";

export const FeedDetail = ({ reviewId, onClose }: FeedDetailT) => {
    return (
            <FeedDetailWrapper isVisible={!!reviewId}>
                <button onClick={onClose}>이전</button>
                디테일 페이지
                {/*<p>Rating: {review.rating}</p>*/}
                {/*<p>{review.content}</p>*/}
                {/*{review.media && review.media.mediaType === REVIEW_MEDIA_TYPE.IMAGE && (*/}
                {/*        <img alt="image" src={review.media.mediaUrl}*/}
                {/*             style={{ width: "100%", borderRadius: 8 }}/>*/}
                {/*)}*/}
                {/*{review.media && review.media.mediaType === REVIEW_MEDIA_TYPE.VIDEO && (*/}
                {/*        <video controls style={{ width: "100%", borderRadius: 8 }}>*/}
                {/*            <source src={review.media.mediaUrl} type="video/mp4"/>*/}
                {/*        </video>*/}
                {/*)}*/}
            </FeedDetailWrapper>
    );
};