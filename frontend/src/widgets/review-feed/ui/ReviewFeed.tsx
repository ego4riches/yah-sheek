import {useReviewsQuery} from "@/entities";
import {EmptyState, Feed, LoadingSpinner, NotFound, REVIEW_CATEGORIES, reviewCategories, type TeamT, toKeyValueMap, useCategoryMenuStore,} from '@/shared';
import {EMPTY_REVIEWS, ReviewFeedWrapper} from '@/widgets/review-feed';
import type {AxiosError} from "axios";

export const ReviewFeed = ({team}: TeamT) => {
    const {data, isLoading, error} = useReviewsQuery(team);
    const {selectedCategory} = useCategoryMenuStore();

    if (isLoading) return <LoadingSpinner/>;
    if (!data || error) return <NotFound code={(error as AxiosError).response?.status}/>;

    const categoryMap = toKeyValueMap(reviewCategories);

    const filteredData =
            selectedCategory === REVIEW_CATEGORIES.ALL.KEY
                    ? data
                    : data.filter((feed) => feed.category === categoryMap[selectedCategory]);

    const showEmpty = !isLoading && filteredData.length === 0 && !error;

    return (
            <ReviewFeedWrapper>
                {showEmpty && <EmptyState message={EMPTY_REVIEWS.MESSAGE} subMessage={EMPTY_REVIEWS.SUB_MESSAGE}/>}
                {!isLoading && !error &&
                        filteredData.map((feed) =>
                                <Feed key={feed.id} feed={feed}/>)}
            </ReviewFeedWrapper>
    );
};