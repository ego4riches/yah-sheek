import { EMPTY_REVIEWS, type FeedsT } from "@/entities";
import { EmptyState, Feed } from "@/shared";

export const FeedList = ({ reviews, onClick }: FeedsT) =>
        reviews.content.length > 0
                ? reviews.content.map((review) =>
                        <Feed key={review.id} review={review} onClick={onClick}/>)
                : <EmptyState
                        message={EMPTY_REVIEWS.MESSAGE}
                        subMessage={EMPTY_REVIEWS.SUB_MESSAGE}
                />