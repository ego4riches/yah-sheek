import { getShouldForwardProps, hexToRgba, type SortOptionsDropdownBoxT, type SortOptionsItemBoxT } from "@/shared";
import styled from "styled-components";

export const SortOptionsWrapper = styled.div`
    position: relative;
    width: 13rem;
`

export const SortOptionsButtonBox = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    width: 100%;
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
    cursor: pointer;
    color: ${ ({ theme }) => theme.colors.gray700 };

    &:hover {
        border-color: ${ ({ theme }) => hexToRgba(theme.colors.ssg, 0.5) };
    }

    &:focus {
        box-shadow: 0 0 0 0.4rem ${ ({ theme }) => hexToRgba(theme.colors.ssg, 0.3) };
        border-color: ${ ({ theme }) => hexToRgba(theme.colors.ssg, 0.5) };
    }
`

export const SortOptionsDropdownBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isOpen']),
})<SortOptionsDropdownBoxT>`
    position: absolute;
    top: 100%;
    left: 0;
    width: 13rem;
    margin-top: 1rem;
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
    opacity: ${ ({ isOpen }) => isOpen ? 1 : 0 };
    visibility: ${ ({ isOpen }) => isOpen ? 'visible' : 'hidden' };
    transform: ${ ({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-10px)' };
    transition: all 0.2s ease;
`

export const SortOptionsItemBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isSelected']),
})<SortOptionsItemBoxT>`
    width: 100%;
    padding: 0.75rem 1rem;
    cursor: pointer;
    color: ${ ({ theme, isSelected }) => isSelected ? theme.colors.ssg : theme.colors.gray700 };
    background-color: ${ ({ theme, isSelected }) => isSelected ? theme.colors.light : 'transparent' };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT500 };
    font-size: ${ ({ theme }) => theme.fontSizes.md };

    &:hover {
        background-color: ${ ({ theme }) => theme.colors.light };
    }

    &:first-child {
        border-radius: ${ ({ theme }) => theme.borderRadius.topRoundedXl };
    }

    &:last-child {
        border-radius: ${ ({ theme }) => theme.borderRadius.bottomRoundedXl };
    }
`