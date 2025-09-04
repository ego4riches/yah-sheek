import { flexColumnFill, flexColumnStart, getShouldForwardProps, type IsVisibleI, slideInFromRight, slideOutToRight } from "@/shared";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

export const ReviewFeedWrapper = styled.div`
    ${flexColumnFill};
    width: 100%;
`

export const FeedDetailWrapper = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isVisible']),
})<IsVisibleI>`
    animation: ${({ isVisible }) => (isVisible ? slideInFromRight : slideOutToRight)} 0.3s forwards;
`

export const FeedDetailContentsBox = styled.div`
    ${flexColumnStart};
    padding: 2rem;
    gap: 2rem;

    p {
        font-size: ${({ theme }) => theme.fontSizes.xl};
    }

    & > div:last-child {
        width: 7rem;
        height: 7rem;
        align-self: center;
    }
`

export const EditReviewTextareaBox = styled(TextareaAutosize)`
    border: none;
    resize: none;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.gray800};
`