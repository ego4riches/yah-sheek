import {
    EmptyState,
    Feed,
    feedMockData,
    REVIEW_CATEGORIES,
    reviewCategories,
    toKeyValueMap,
    useCategoryMenuStore
} from "@/shared";
import {ReviewFeedWrapper} from "@/widgets/review-feed";

export const ReviewFeed = () => {
    const {selectedCategory} = useCategoryMenuStore();

    const categoryMap = toKeyValueMap(reviewCategories);

    const filteredData = selectedCategory === REVIEW_CATEGORIES.ALL.KEY
            ? feedMockData
            : feedMockData.filter(feed => feed.category === categoryMap[selectedCategory]);

    return (
            <ReviewFeedWrapper>
                {
                    filteredData.length === 0
                            ? <EmptyState
                                    message="아직 등록된 리뷰가 없어요!"
                                    subMessage="첫 번째 리뷰를 작성해 보세요"
                            />
                            : filteredData.map((feed) =>
                                    <Feed key={feed.id} feed={feed}/>
                            )
                }
            </ReviewFeedWrapper>
    );
};