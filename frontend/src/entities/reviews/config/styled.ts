import { flexColumnFill, getShouldForwardProps, type IsVisibleI, slideInFromRight, slideOutToRight } from "@/shared";
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