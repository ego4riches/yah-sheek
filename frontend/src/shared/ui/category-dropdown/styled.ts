import {getShouldForwardProps, type IsOpenI} from "@/shared";
import styled from "styled-components";

export const CategoryDropdownBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isOpen']),
})<IsOpenI>`
    background: white;
    border: 1px solid ${({theme}) => theme.colors.gray200};
    border-radius: ${({theme}) => theme.borderRadius.xl};
    box-shadow: ${({theme}) => theme.shadows.lg};
    opacity: ${({isOpen}) => isOpen ? 1 : 0};
    transform: ${({isOpen}) => isOpen ? 'translateY(0)' : 'translateY(-10px)'};
`;

export const CategoryOptionBox = styled.button`
    width: 100%;
    padding: 0.8rem 1.2rem;
    background: none;
    text-align: left;
    font-size: ${({theme}) => theme.fontSizes.sm};
    font-weight: 500;
    color: ${({theme}) => theme.colors.gray700};

    &:hover {
        background: ${({theme}) => theme.colors.gray100};
    }

    &:first-child {
        border-radius: ${({theme}) => theme.borderRadius.topRoundedXl};
    }

    &:last-child {
        border-radius: ${({theme}) => theme.borderRadius.bottomRoundedXl};
    }
`;