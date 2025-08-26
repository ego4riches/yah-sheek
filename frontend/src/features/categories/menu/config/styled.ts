import { flexCenter, getShouldForwardProps, type IsSelectedI, media } from "@/shared";
import styled from 'styled-components';

export const CategoryMenuBox = styled.div`
    ${flexCenter};
    gap: 4rem;
    padding: 2rem 4rem;
    color: white;
    background: ${({ theme }) => theme.colors.primary700};
        // border-radius: ${({ theme }) => theme.borderRadius.topRoundedXl};

    ${media.mobile} {
        grid-column: 1 / 3;
    }
`

export const CategoryMenuItemBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isSelected']),
})<IsSelectedI>`
    padding: 1rem 2rem;
    border-radius: ${({ theme }) => theme.borderRadius.xxl};
    color: ${({ theme, isSelected }) =>
        isSelected
            ? theme.colors.primary700
            : theme.colors.primary100};
    background: ${({ theme, isSelected }) =>
        isSelected
            ? theme.colors.primary100
            : theme.colors.primary700};
    font-weight: ${({ isSelected }) => isSelected ? 500 : 800};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`