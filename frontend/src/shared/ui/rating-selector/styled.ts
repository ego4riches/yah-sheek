import { flexCenter, getShouldForwardProps, type RatingStarButtonBoxT } from "@/shared";
import styled from "styled-components";

export const RatingSelectorWrapper = styled.div`
    ${ flexCenter };
    gap: 0.5rem;
`;

export const RatingStarButtonBox = styled.button.withConfig({
    shouldForwardProp: getShouldForwardProps(['filled']),
})<RatingStarButtonBoxT>`
    font-size: 1.7rem;
    color: ${ ({ theme, filled }) => filled ? theme.colors.warning : theme.colors.gray300 };
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        color: ${ ({ theme }) => theme.colors.warning };
    }
`;