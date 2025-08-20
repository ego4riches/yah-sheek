import { CATEGORIES_KEY } from "@/features";
import { flexCenter, flexColumnCenter, flexSpaceBetween, flexStart, getShouldForwardProps, type hasSrcT, type IsValueI, textEllipsis } from "@/shared";
import LikeHoverIcon from "@/shared/config/assets/like-hover.png"
import LikeIcon from "@/shared/config/assets/like.png"
import styled from "styled-components";

export const FeedWrapper = styled.div`
    ${flexSpaceBetween};
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.gray200};
    gap: 2.5rem;
    padding: 2.5rem 2rem;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.light};
    }
`

export const FeedThumbnailBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['hasSrc']),
})<hasSrcT>`
    ${flexCenter};
    width: 8rem;
    height: 8rem;
    background: ${({ theme }) => theme.colors.gray100};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    overflow: hidden;

    img {
        width: ${({ hasSrc }) => hasSrc ? '100%' : '2.6rem'};
        height: 100%;
        object-fit: ${({ hasSrc }) => hasSrc ? 'cover' : 'contain'};
    }
`

export const FeedPreviewWrapper = styled.div`
    min-width: 0;
    gap: 0.5rem;
`

export const PreviewCategoryBox = styled.span.withConfig({
    shouldForwardProp: getShouldForwardProps(['isValue']),
})<IsValueI>`
    padding: 0.3rem 0.6rem;
    color: white;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    background: ${({ theme, isValue }) =>
        isValue === CATEGORIES_KEY.FOOD ? theme.colors.danger
            : isValue === CATEGORIES_KEY.SNACK ? theme.colors.warning
                : isValue === CATEGORIES_KEY.DRINK ? theme.colors.info
                    : isValue === CATEGORIES_KEY.ALCOHOL ? theme.colors.secondary
                        : theme.colors.gray200};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-family: ${({ theme }) => theme.fontFamilies.Accent400};
`

export const PreviewContentBox = styled.p`
    ${textEllipsis};
    width: 100%;
    color: ${({ theme }) => theme.colors.gray700};
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: 700;
`

export const PreviewMetaBox = styled.div`
    ${flexStart};
    ${textEllipsis};
    width: 100%;
    gap: 1.5rem;
    color: ${({ theme }) => theme.colors.gray600};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;

    & > span {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: -0.75rem;
            transform: translateY(-50%);
            width: 0.1rem;
            height: 1.3rem;
            background-color: ${({ theme }) => theme.colors.gray300};
        }
    }

    & > span:last-of-type {
        color: ${({ theme }) => theme.colors.warning};

        &::after {
            content: none;
        }
    }
`

export const FeedLikeCounterBox = styled.div`
    ${flexColumnCenter};
    gap: 0.5rem;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.gray500};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    background: white;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.primary600};
        border-color: ${({ theme }) => theme.colors.primary400};
        background: ${({ theme }) => theme.colors.primary100};

        & > div {
            background-image: url(${LikeHoverIcon});
        }
    }

    &:active {
        transform: scale(0.9);
    }
`

export const LikeIconBox = styled.div`
    width: 2.2rem;
    height: 2.2rem;
    background-image: url(${LikeIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const LikeCountBox = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-family: ${({ theme }) => theme.fontFamilies.Accent600};
`