import {useReviewsQuery} from "@/entities";
import {EmptyState, Feed, LoadingSpinner, NotFound, REVIEW_CATEGORIES, reviewCategories, type TeamT, toKeyValueMap, useCategoryMenuStore,} from '@/shared';
import {ReviewFeedWrapper} from '@/widgets/review-feed';
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
                {showEmpty &&
                        <EmptyState
                                message="아직 등록된 리뷰가 없어요!"
                                subMessage="첫 번째 리뷰를 작성해 보세요"
                        />}
                {!isLoading && !error &&
                        filteredData.map((feed) =>
                                <Feed key={feed.id} feed={feed}/>)}
            </ReviewFeedWrapper>
    );
};