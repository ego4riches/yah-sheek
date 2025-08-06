import styled from "styled-components";

export const FeedWrapper = styled.div`
    width: 100%;
`

export const FeedThumbnailBox = styled.div`
    width: 5rem;
    height: 5rem;
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
`

export const FeedPreviewWrapper = styled.div`
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
`

export const PreviewCategoryBox = styled.div`
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
`

export const PreviewContentBox = styled.div`
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
`

export const PreviewMetaBox = styled.div`
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
`

export const FeedLikeCounterBox = styled.div`
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
`