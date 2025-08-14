import {useReviewsQuery} from "@/entities";
import {AsyncBoundary,} from '@/shared';
import {type ReviewFeedT, ReviewFeedWrapper} from '@/widgets/review-feed';
import {Feeds} from "@/widgets/review-feed/ui/Feeds";
import type {AxiosError} from "axios";

export const ReviewFeed = ({teamId}: ReviewFeedT) => {
    const {data, status, error} = useReviewsQuery(teamId);

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