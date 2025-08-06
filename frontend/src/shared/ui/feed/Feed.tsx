import {FeedLikeCounter, FeedPreview, FeedThumbnail, FeedWrapper} from "@/shared";

export const Feed = () => {

    return (
            <FeedWrapper>
                <FeedThumbnail/>
                <FeedPreview/>
                <FeedLikeCounter/>
            </FeedWrapper>
    );
};