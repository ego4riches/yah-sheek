import { FeedLikeCounter, FeedPreview, type FeedT, FeedThumbnail, FeedWrapper, REVIEW_MEDIA_TYPE } from "@/shared";

export const Feed = ({ review, onClick }: FeedT) => {
    const { id, rating, media } = review;

    return (
            <FeedWrapper key={id} onClick={() => onClick(id)}>
                <FeedThumbnail
                        image={media.thumbnailUrl}
                        video={media.mediaType === REVIEW_MEDIA_TYPE.VIDEO}
                />
                <FeedPreview feed={review}/>
                <FeedLikeCounter likes={rating}/>
            </FeedWrapper>
    );
};