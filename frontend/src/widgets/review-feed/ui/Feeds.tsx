import {EmptyState, Feed} from "@/shared";
import {EMPTY_REVIEWS, type FeedsT} from "@/widgets/review-feed";

export const Feeds = ({reviews}: FeedsT) =>
        reviews.content.length > 0

                ? reviews.content.map((review) =>
                        <Feed key={review.id} review={review}/>)

                : <EmptyState
                        message={EMPTY_REVIEWS.MESSAGE}
                        subMessage={EMPTY_REVIEWS.SUB_MESSAGE}
                />