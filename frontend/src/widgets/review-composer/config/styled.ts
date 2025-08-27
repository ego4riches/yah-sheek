import { flexColumnCenter, flexStart, getShouldForwardProps, type IsExpandedI } from "@/shared";
import styled from "styled-components";

export const ReviewComposerWrapper = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isExpanded']),
})<IsExpandedI>`
    ${flexColumnCenter};
    width: 100%;
    gap: ${({ isExpanded }) =>
        isExpanded
            ? '1.5rem'
            : '0'};
    padding: ${({ isExpanded }) => isExpanded ? '1.5rem' : '0'};
    background: ${({ theme, isExpanded }) =>
        isExpanded
            ? theme.colors.light
            : 'transparent'};
    border: ${({ theme, isExpanded }) =>
        isExpanded
            ? `1px solid ${theme.colors.gray200}`
            : 'none'};
    box-shadow: ${({ theme, isExpanded }) =>
        isExpanded
            ? theme.shadows.sm
            : 'none'};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

export const ComposerExpandedWrapper = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isExpanded']),
})<IsExpandedI>`
    width: 100%;
    visibility: ${({ isExpanded }) => isExpanded ? 'visible' : 'hidden'};
    max-height: ${({ isExpanded }) => isExpanded ? '100rem' : '0'};
    opacity: ${({ isExpanded }) => isExpanded ? '1' : '0'};
    transform: translateY(${({ isExpanded }) => isExpanded ? '0' : '-1rem'});
`;

export const ComposerHeaderBox = styled.div`
    ${flexStart};
    gap: 1.5rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;