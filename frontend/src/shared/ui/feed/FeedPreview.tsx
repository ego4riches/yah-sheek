import {
    type FeedPreviewT,
    FeedPreviewWrapper,
    formatDate,
    getStarRating,
    PreviewCategoryBox,
    PreviewContentBox,
    PreviewMetaBox
} from "@/shared";

export const FeedPreview = ({feed}: FeedPreviewT) => {
    const {category, content, author, createdAt, views, likes} = feed;

    return (
            <FeedPreviewWrapper>
                <PreviewCategoryBox isValue={category}>{category}</PreviewCategoryBox>
                <PreviewContentBox>{content}</PreviewContentBox>
                <PreviewMetaBox>
                    <span>{author}</span>
                    <span>{formatDate(createdAt)}</span>
                    <span>{views}</span>
                    <span>{getStarRating(likes)}</span>
                </PreviewMetaBox>
            </FeedPreviewWrapper>
    );
};