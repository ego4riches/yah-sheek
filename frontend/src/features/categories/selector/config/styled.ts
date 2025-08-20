import {flexCenter, getShouldForwardProps, type IsOpenI} from "@/shared";
import styled from "styled-components";

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