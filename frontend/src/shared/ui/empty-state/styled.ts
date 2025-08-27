import { flexColumnCenter } from "@/shared";
import styled from "styled-components";

export const EmptyStateWrapper = styled.div`
    ${flexColumnCenter};
    flex: 1;
    gap: 2rem;
    background: ${({ theme }) => theme.colors.primary100};
    border-top: 2px dashed ${({ theme }) => theme.colors.primary600};
`;

export const EmptyStateIcon = styled.div`
    color: ${({ theme }) => theme.colors.primary900};
    font-size: ${({ theme }) => theme.fontSizes.h1};
`;

export const EmptyStateText = styled.h3`
    color: ${({ theme }) => theme.colors.primary900};
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: 700;
`;

export const EmptyStateSubText = styled.p`
    color: ${({ theme }) => theme.colors.primary600};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 500;
`;