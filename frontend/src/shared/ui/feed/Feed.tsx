import {FeedLikeCounter, FeedPreview, type FeedT, FeedThumbnail, FeedWrapper} from "@/shared";

export const Feed = ({feed}: FeedT) => {
    const {thumbnailUrl, hasVideo, likes} = feed;

    return (
            <FeedWrapper>
                <FeedThumbnail image={thumbnailUrl} video={hasVideo}/>
                <FeedPreview feed={feed}/>
                <FeedLikeCounter likes={likes}/>
            </FeedWrapper>
    );
};