import {FeedLikeCounterBox, type FeedLikeCounterT, LikeCountBox, LikeIconBox} from "@/shared";

export const FeedLikeCounter = ({likes}: FeedLikeCounterT) => {
    return (
            <FeedLikeCounterBox>
                <LikeIconBox/>
                <LikeCountBox>{likes}</LikeCountBox>
            </FeedLikeCounterBox>
    );
};