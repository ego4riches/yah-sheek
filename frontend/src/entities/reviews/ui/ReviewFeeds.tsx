import { Feeds, type ReviewFeedT, ReviewFeedWrapper, useReviewsQuery } from "@/entities";
import { AsyncBoundary, } from '@/shared';
import type { AxiosError } from "axios";

export const ReviewFeeds = ({ teamId }: ReviewFeedT) => {
    const { data, status, error } = useReviewsQuery({ teamId });

    return (
            <ReviewFeedWrapper>
                <AsyncBoundary
                        data={data}
                        status={status}
                        errorCode={(error as AxiosError)?.response?.status}
                >
                    {(reviews) => <Feeds reviews={reviews}/>}
                </AsyncBoundary>
            </ReviewFeedWrapper>
    );
};