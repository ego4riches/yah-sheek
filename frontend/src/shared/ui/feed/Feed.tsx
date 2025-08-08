import {FeedLikeCounter, FeedPreview, type FeedT, FeedThumbnail, FeedWrapper} from "@/shared";

export const Feed = ({feed}: FeedT) => {
    const {id, likes, hasVideo, thumbnailUrl} = feed;

    return (
            <FeedWrapper key={id}>
                <FeedThumbnail image={thumbnailUrl} video={hasVideo}/>
                <FeedPreview feed={feed}/>
                <FeedLikeCounter likes={likes}/>
            </FeedWrapper>
    );
};