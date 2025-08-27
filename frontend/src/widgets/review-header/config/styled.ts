import { flexColumnCenter, flexSpaceBetween } from "@/shared";
import styled from "styled-components";

export const ReviewHeaderWrapper = styled.div`
    ${flexColumnCenter};
    padding: 3rem 3rem 1.5rem 3rem;
    color: ${({ theme }) => theme.colors.light};
    background: ${({ theme }) => theme.colors.primary700};
    gap: 2rem;
`;

export const ReviewHeaderTitle = styled.h1`
    font-family: ${({ theme }) => theme.fontFamilies.Accent400};
    font-size: ${({ theme }) => theme.fontSizes.h1};
`;

export const ReviewHeaderControlBox = styled.div`
    ${flexSpaceBetween};
    width: 100%;
`;