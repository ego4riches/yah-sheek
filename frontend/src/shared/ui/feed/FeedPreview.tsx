import { type FeedPreviewT, FeedPreviewWrapper, formatDate, getStarRating, PreviewCategoryBox, PreviewContentBox, PreviewMetaBox } from "@/shared";

export const FeedPreview = ({ feed }: FeedPreviewT) => {
    const { nickname, categoryId, categoryName, content, createdAt, rating, viewsCount } = feed;

    return (
            <FeedPreviewWrapper>
                <PreviewCategoryBox isId={categoryId}>{categoryName}</PreviewCategoryBox>
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