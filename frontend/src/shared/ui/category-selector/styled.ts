import {flexCenter, getShouldForwardProps, type IsOpenI} from "@/shared";
import styled from "styled-components";

export const CategorySelectorWrapper = styled.div`
`;

export const CategorySelectorButtonBox = styled.button.withConfig({
    shouldForwardProp: getShouldForwardProps(['isOpen']),
})<IsOpenI>`
    ${flexCenter};
    background: ${({theme, isOpen}) => isOpen ? theme.colors.gray100 : 'white'};
    border: 1px solid ${({theme}) => theme.colors.gray200};
    border-radius: ${({theme}) => theme.borderRadius.xl};
    padding: 0.8rem 1.2rem;
    font-size: ${({theme}) => theme.fontSizes.sm};
    font-weight: 600;
    color: ${({theme}) => theme.colors.gray600};
    cursor: pointer;
    gap: 0.5rem;

    &:hover {
        background: ${({theme}) => theme.colors.gray100};
    }

    &::after {
        content: '▼';
        font-size: 0.8rem;
        transform: ${({isOpen}) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
`;

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