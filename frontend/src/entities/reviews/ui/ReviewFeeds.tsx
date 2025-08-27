import { FeedList, type ReviewFeedT, ReviewFeedWrapper, useReviewsQuery } from "@/entities";
import { AsyncBoundary, } from '@/shared';
import type { AxiosError } from "axios";

export const ReviewFeeds = ({ teamId, onClick }: ReviewFeedT) => {
    const { data, status, error } = useReviewsQuery({ teamId });

    return (
            <ReviewFeedWrapper>
                <AsyncBoundary
                        data={data}
                        status={status}
                        errorCode={(error as AxiosError)?.response?.status}
                >
                    {(reviews) => <FeedList reviews={reviews} onClick={onClick}/>}
                </AsyncBoundary>
            </ReviewFeedWrapper>
    );
};