import { flexColumnCenter, flexStart, getShouldForwardProps, type IsExpandedI, media } from "@/shared";
import styled from "styled-components";

export const ReviewWriteWrapper = styled.div`
    ${ flexColumnCenter };
    width: 100%;
    gap: 1.5rem;
    background: ${ ({ theme }) => theme.colors.white };
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
    padding: 1.5rem;
    box-shadow: ${ ({ theme }) => theme.shadows.sm };
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };

    ${ media.mobile } {
        position: relative;
        top: -5rem;
    }
`;

export const ExpandedWriteWrapper = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isExpanded']),
})<IsExpandedI>`
    width: 100%;
    visibility: ${ ({ isExpanded }) => isExpanded ? 'visible' : 'hidden' };
    max-height: ${ ({ isExpanded }) => isExpanded ? '100rem' : '0' };
    opacity: ${ ({ isExpanded }) => isExpanded ? '1' : '0' };
    transform: translateY(${ ({ isExpanded }) => isExpanded ? '0' : '-1rem' });
`;

export const WriteHeaderBox = styled.div`
    ${ flexStart };
    gap: 1.5rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${ ({ theme }) => theme.colors.gray200 };
`;