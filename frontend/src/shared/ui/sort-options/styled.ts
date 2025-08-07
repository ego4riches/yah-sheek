import { getShouldForwardProps, type IsOpenI, type IsSelectedI, media, textEllipsis } from "@/shared";
import styled from "styled-components";

export const SortOptionsWrapper = styled.div`
    position: relative;
    width: 13rem;

    ${ media.mobile } {
        width: fit-content;
        grid-row: 2;
        top: 13rem;
    }
`;

export const SortOptionsButtonBox = styled.button`
    ${ textEllipsis };
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 0.7rem 1rem;
    width: 100%;
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
    cursor: pointer;
    color: ${ ({ theme }) => theme.colors.gray700 };
    background: white;

    &:hover {
        border-color: ${ ({ theme }) => theme.colors.primary400 };
    }

    &:focus {
        box-shadow: 0 0 0 0.4rem ${ ({ theme }) => theme.colors.primary300 };
        border-color: ${ ({ theme }) => theme.colors.primary400 };
    }
`;

export const SortOptionsDropdownBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isOpen']),
})<IsOpenI>`
    position: absolute;
    top: 100%;
    left: 0;
    width: 13rem;
    margin-top: 1rem;
    z-index: 1;
    background: white;
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
    opacity: ${ ({ isOpen }) => isOpen ? 1 : 0 };
    visibility: ${ ({ isOpen }) => isOpen ? 'visible' : 'hidden' };
    transform: ${ ({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-10px)' };
    transition: all 0.2s ease;
`

export const SortOptionsItemBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isSelected']),
})<IsSelectedI>`
    width: 100%;
    padding: 0.75rem 1rem;
    cursor: pointer;
    color: ${ ({ theme, isSelected }) => isSelected ? theme.colors.primary700 : theme.colors.gray700 };
    background-color: ${ ({ theme, isSelected }) => isSelected ? theme.colors.gray100 : 'transparent' };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT500 };
    font-size: ${ ({ theme }) => theme.fontSizes.md };

    &:hover {
        background-color: ${ ({ theme }) => theme.colors.gray100 };
    }

    &:first-child {
        border-radius: ${ ({ theme }) => theme.borderRadius.topRoundedXl };
    }

    &:last-child {
        border-radius: ${ ({ theme }) => theme.borderRadius.bottomRoundedXl };
    }
`