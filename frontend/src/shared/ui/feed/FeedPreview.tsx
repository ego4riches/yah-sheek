import {FeedPreviewWrapper, PreviewCategoryBox, PreviewContentBox, PreviewMetaBox} from "@/shared";

export const FeedPreview = () => {

    return (
            <FeedPreviewWrapper>
                <PreviewCategoryBox>음식</PreviewCategoryBox>
                <PreviewContentBox>내용</PreviewContentBox>
                <PreviewMetaBox>
                    <span>마무리일짱조뱅</span>
                    <span>17:22</span>
                    <span>★★★★★</span>
                    <span>152</span>
                </PreviewMetaBox>
            </FeedPreviewWrapper>
    );
};