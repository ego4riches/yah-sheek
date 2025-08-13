import {flexColumnCenter} from "@/shared";
import styled from "styled-components";

export const EmptyStateWrapper = styled.div`
    ${flexColumnCenter};
    flex: 1;
    gap: 2rem;
    margin-top: 2rem;
    background: ${({theme}) => theme.colors.light};
    border-radius: ${({theme}) => theme.borderRadius.xl};
    border: 2px dashed ${({theme}) => theme.colors.gray200};
`;

export const EmptyStateIcon = styled.div`
    font-size: ${({theme}) => theme.fontSizes.h1};
`;

export const EmptyStateText = styled.h3`
    color: ${({theme}) => theme.colors.gray700};
    font-size: ${({theme}) => theme.fontSizes.h3};
    font-family: ${({theme}) => theme.fontFamilies.SUIT600};
`;

export const EmptyStateSubText = styled.p`
    color: ${({theme}) => theme.colors.gray500};
    font-size: ${({theme}) => theme.fontSizes.lg};
    font-family: ${({theme}) => theme.fontFamilies.SUIT500};
`;