import { flexCenter, getShouldForwardProps, type IsSelectedI, media } from "@/shared";
import styled from 'styled-components';

export const CategoryMenuBox = styled.div`
    ${ flexCenter };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT500 };
    gap: 4rem;
    padding: 2rem 4rem;
    color: white;
    background: ${ ({ theme }) => theme.colors.primary600 };
    border-radius: ${ ({ theme }) => theme.borderRadius.topRoundedXl };

    ${ media.mobile } {
        grid-column: 1 / 3;
    }
`

export const CategoryMenuItemBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isSelected']),
})<IsSelectedI>`
    color: ${ ({ theme, isSelected }) =>
        isSelected
            ? theme.colors.primary100
            : theme.colors.primary300 };
    font-weight: ${ ({ theme, isSelected }) =>
        isSelected
            ? theme.fontFamilies.SUIT900
            : theme.fontFamilies.SUIT500
    };
    font-size: ${ ({ theme }) => theme.fontSizes.lg };
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`