import { EMPTY_REVIEWS, type ReviewFeedT, ReviewFeedWrapper, useReviewsQuery } from "@/entities";
import { AsyncBoundary, EmptyState, Feed, } from '@/shared';
import type { AxiosError } from "axios";

export const ReviewFeeds = ({ teamId, onClick }: ReviewFeedT) => {
    const { data, status, error } = useReviewsQuery({ teamId });
    // const { data, error, status, fetchNextPage, hasNextPage, isFetchingNextPage, } = useReviewsInfiniteQuery({ teamId });
    // const { isIntersecting } = useInfiniteScrollStore();
    // const sentinelRef = useInfiniteScrollObserver();

    // 무한 스크롤 트리거
    // if (isIntersecting && hasNextPage && !isFetchingNextPage) {
    //     fetchNextPage();
    // }

    console.log('data: ', data)

    return (
            <ReviewFeedWrapper>
                <AsyncBoundary
                        data={data}
                        status={status}
                        errorCode={(error as AxiosError)?.response?.status}
                >
                    {(reviews) =>
                            reviews.length > 0
                                    ? reviews.map((review) =>
                                            <Feed key={review.id} review={review} onClick={onClick}/>)
                                    : <EmptyState
                                            message={EMPTY_REVIEWS.MESSAGE}
                                            subMessage={EMPTY_REVIEWS.SUB_MESSAGE}
                                    />
                    }

                    {/*{(pages) => {*/}
                    {/*    const reviews = pages?.pages.flatMap((page) => page.items) ?? [];*/}

                    {/*    if (reviews.length === 0) {*/}
                    {/*        return (*/}
                    {/*                <EmptyState*/}
                    {/*                        message={EMPTY_REVIEWS.MESSAGE}*/}
                    {/*                        subMessage={EMPTY_REVIEWS.SUB_MESSAGE}*/}
                    {/*                />*/}
                    {/*        );*/}
                    {/*    }*/}

                    {/*    return (*/}
                    {/*            <>*/}
                    {/*                {reviews.map((review) => (*/}
                    {/*                        <Feed key={review.id} review={review} onClick={onClick} />*/}
                    {/*                ))}*/}

                    {/*                /!* sentinel: intersection observer target *!/*/}
                    {/*                <div ref={sentinelRef} style={{ height: 1 }} />*/}

                    {/*                /!* 로딩 상태 *!/*/}
                    {/*                {isFetchingNextPage && <p>로딩 중...</p>}*/}

                    {/*                /!* 마지막 페이지 *!/*/}
                    {/*                {!hasNextPage && (*/}
                    {/*                        <p style={{ textAlign: "center", padding: "1rem", color: "#888" }}>*/}
                    {/*                            더 이상 피드가 없어요*/}
                    {/*                        </p>*/}
                    {/*                )}*/}
                    {/*            </>*/}
                    {/*    );*/}
                    {/*}}*/}
                </AsyncBoundary>
            </ReviewFeedWrapper>
    );
};