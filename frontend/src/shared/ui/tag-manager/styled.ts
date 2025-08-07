import { flexCenter, flexStart, getShouldForwardProps, type IsExpandedI, type IsSelectedI, textEllipsis } from "@/shared";
import styled from "styled-components";

export const TagManagerWrapper = styled.div`
    ${ flexStart };
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const TagExpandedBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isExpanded']),
})<IsExpandedI>`
    ${ flexStart };
    color: ${ ({ theme }) => theme.colors.gray500 };
    background: ${ ({ theme }) => theme.colors.gray100 };
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
    border-radius: ${ ({ theme, isExpanded }) => isExpanded ? theme.borderRadius.xl : theme.borderRadius.round };
    width: ${ ({ isExpanded }) => isExpanded ? '20rem' : '2.5rem' };
    height: 2.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        background: ${ ({ theme }) => theme.colors.primary200 };
        border-color: ${ ({ theme }) => theme.colors.primary400 };
        color: ${ ({ theme }) => theme.colors.primary700 };
    }

    span {
        padding: 0.7rem;
    }
`;

export const TagInputBox = styled.input`
    height: 100%;
    border: none;
    background: transparent;

    &:hover {
        color: ${ ({ theme }) => theme.colors.primary700 };
    }

    &::placeholder {
        color: ${ ({ theme }) => theme.colors.gray400 };
    }
`;

export const TagBox = styled.div`
    ${ flexCenter };
    ${ textEllipsis };
    background: ${ ({ theme }) => theme.colors.primary200 };
    color: ${ ({ theme }) => theme.colors.primary700 };
    padding: 0.4rem 0.8rem;
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
    font-size: ${ ({ theme }) => theme.fontSizes.xs };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT500 };
    gap: 0.3rem;
    max-width: 120rem;
`;

export const TagRemoveButtonBox = styled.button`
    ${ flexCenter };
    color: ${ ({ theme }) => theme.colors.primary700 };
    cursor: pointer;
    font-size: 1.3rem;
    font-family: ${ ({ theme }) => theme.fontFamilies.Paperlogy800 };

    &:hover {
        color: ${ ({ theme }) => theme.colors.danger };
    }
`;

//todo 여기부터 수정
export const TagSuggestionsBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isExpanded']),
})<IsExpandedI>`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 2px solid ${ ({ theme }) => theme.colors.primary400 };
    border-radius: ${ ({ theme }) => theme.borderRadius.lg };
    box-shadow: ${ ({ theme }) => theme.shadows.lg };
    //z-index: 1000;
    max-height: ${ ({ isExpanded }) => isExpanded ? '100rem' : '0' };
    opacity: ${ ({ isExpanded }) => isExpanded ? '1' : '0' };
    overflow: hidden;
`;

export const TagSuggestionItemBox = styled.button.withConfig({
    shouldForwardProp: getShouldForwardProps(['isSelected']),
})<IsSelectedI>`
    width: 100%;
    padding: 0.6rem 1rem;
    background: ${ ({ theme, isSelected }) => isSelected ? theme.colors.primary100 : 'none' };
    border: none;
    text-align: left;
    font-size: ${ ({ theme }) => theme.fontSizes.xs };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT400 };
    color: ${ ({ theme }) => theme.colors.gray700 };
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        background: ${ ({ theme }) => theme.colors.primary100 };
    }
`;