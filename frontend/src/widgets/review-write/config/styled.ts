import { getShouldForwardProps, type IsExpandedI } from "@/shared";
import styled from "styled-components";

export const ReviewWriteWrapper = styled.div`
    background: ${ ({ theme }) => theme.colors.white };
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
    padding: 2rem;
    box-shadow: ${ ({ theme }) => theme.shadows.md };
    border: 2px solid ${ ({ theme }) => theme.colors.gray200 };
    max-width: 600px;
    margin: 0 auto;
    transition: all 0.3s ease;
`;

export const ExpandedWriteWrapper = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isExpanded']),
})<IsExpandedI>`
    max-height: ${ ({ isExpanded }) => isExpanded ? '1000px' : '0' };
    overflow: hidden;
    opacity: ${ ({ isExpanded }) => isExpanded ? '1' : '0' };
    transform: translateY(${ ({ isExpanded }) => isExpanded ? '0' : '-10px' });
`;

export const WriteHeaderBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${ ({ theme }) => theme.colors.gray200 };
`;