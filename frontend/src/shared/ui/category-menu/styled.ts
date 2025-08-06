import { flexCenter, media } from "@/shared";
import styled from 'styled-components';

export const CategoryMenuBox = styled.div`
    ${ flexCenter };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT500 };
    gap: 4rem;
    padding: 2rem 4rem;
    color: ${ ({ theme }) => theme.colors.white };
    background: ${ ({ theme }) => theme.colors.primary600 };
    border-radius: ${ ({ theme }) => theme.borderRadius.topRoundedXl };

    ${ media.mobile } {
        grid-column: 1 / 3;
    }
`

export const CategoryMenuItemBox = styled.div`
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`