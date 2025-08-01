import { type ButtonT, getShouldForwardProps } from "@/shared";
import styled from "styled-components";

export const ButtonBox = styled.button.withConfig({
    shouldForwardProp: getShouldForwardProps(['disabled', 'size', 'variant']),
})<ButtonT>`
    width: 100%;
    padding: 1rem 2rem;
    background: ${ ({ theme }) => theme.colors.primary600 };
    color: ${ ({ theme }) => theme.colors.white };
    border: none;
    border-radius: ${ ({ theme }) => theme.borderRadius.lg };
    font-size: ${ ({ theme }) => theme.fontSizes.md };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT600 };
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: ${ ({ theme }) => theme.colors.primary700 };
        transform: translateY(-2px);
        box-shadow: ${ ({ theme }) => theme.shadows.md };
    }

    &:disabled {
        background: ${ ({ theme }) => theme.colors.gray400 };
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }
`;