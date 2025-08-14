import {flexCenter} from "@/shared";
import styled from "styled-components";

export const ReviewContentInputWrapper = styled.div`
    ${flexCenter};
    width: 100%;
    height: 100%;
    gap: 1.5rem;
`;

export const ReviewTextareaBox = styled.textarea`
    flex: 1;
    padding: 1rem 1.5rem;
    color: ${({theme}) => theme.colors.gray700};
    border: 1px solid ${({theme}) => theme.colors.gray200};
    border-radius: ${({theme}) => theme.borderRadius.xl};
    font-size: ${({theme}) => theme.fontSizes.xl};
    font-weight: 700;
    resize: none;

    &:focus {
        outline: none;
        border-color: ${({theme}) => theme.colors.primary500};
    }

    &::placeholder {
        color: ${({theme}) => theme.colors.gray400};
    }
`;