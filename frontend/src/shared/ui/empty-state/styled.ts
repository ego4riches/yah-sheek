import { flexColumnCenter } from "@/shared";
import styled from "styled-components";

export const EmptyStateWrapper = styled.div`
    ${ flexColumnCenter };
    flex: 1; /* 부모 컨테이너의 남은 공간을 채움 */
    width: 100%;
    padding: 6rem 2rem;
    gap: 2rem;
    background: ${ ({ theme }) => theme.colors.light };
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
    border: 2px dashed ${ ({ theme }) => theme.colors.gray200 };
    margin: 2rem 0;
`;

export const EmptyStateIcon = styled.div`
    font-size: ${ ({ theme }) => theme.fontSizes.h1 };
`;

export const EmptyStateText = styled.h3`
    color: ${ ({ theme }) => theme.colors.gray700 };
    font-size: ${ ({ theme }) => theme.fontSizes.h3 };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT600 };
    text-align: center;
    margin: 0;
`;

export const EmptyStateSubText = styled.p`
    color: ${ ({ theme }) => theme.colors.gray500 };
    font-size: ${ ({ theme }) => theme.fontSizes.lg };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT500 };
    text-align: center;
    margin: 0;
    line-height: 1.5;
`;