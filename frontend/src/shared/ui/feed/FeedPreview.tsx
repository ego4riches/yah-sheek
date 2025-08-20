import { type FeedPreviewT, FeedPreviewWrapper, formatDate, getStarRating, PreviewCategoryBox, PreviewContentBox, PreviewMetaBox } from "@/shared";

export const FeedPreview = ({ feed }: FeedPreviewT) => {
    const { nickname, categoryName, content, createdAt, rating, viewsCount } = feed;

    return (
            <FeedPreviewWrapper>
                <PreviewCategoryBox isValue={categoryName}>{categoryName}</PreviewCategoryBox>
                <PreviewContentBox>{content}</PreviewContentBox>
                <PreviewMetaBox>
                    <span>{nickname}</span>
                    <span>{formatDate(createdAt)}</span>
                    <span>{viewsCount}</span>
                    <span>{getStarRating(rating)}</span>
                </PreviewMetaBox>
            </FeedPreviewWrapper>
    );
};