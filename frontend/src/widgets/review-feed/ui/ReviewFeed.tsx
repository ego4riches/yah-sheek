import {Feed, feedMockData} from "@/shared";
import {ReviewFeedWrapper} from "@/widgets/review-feed";

export const ReviewFeed = () => {

    return (
            <ReviewFeedWrapper>
                {feedMockData.map((feed) => (
                        <Feed key={feed.id} feed={feed}/>
                ))}
            </ReviewFeedWrapper>
    );
};