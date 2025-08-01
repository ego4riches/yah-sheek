import { flexCenter, getShouldForwardProps, type IsOpenI, type IsSelectedI } from "@/shared";
import styled from "styled-components";

export const TagManagerWrapper = styled.div`
    ${ flexCenter };
    justify-content: start;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const TagExpandedBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isOpen']),
})<IsOpenI>`
    ${ flexCenter };
    justify-content: start;
    color: ${ ({ theme }) => theme.colors.gray500 };
    background: ${ ({ theme }) => theme.colors.gray100 };
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
    border-radius: ${ ({ theme, isOpen }) => isOpen ? theme.borderRadius.xl : theme.borderRadius.round };
    width: ${ ({ isOpen }) => isOpen ? '20rem' : '2.5rem' };
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

//todo 여기부터 수정
export const TagBox = styled.div`
    background: ${ ({ theme }) => theme.colors.primary200 };
    color: ${ ({ theme }) => theme.colors.primary700 };
    padding: 0.4rem 0.8rem;
    border-radius: ${ ({ theme }) => theme.borderRadius.md };
    font-size: ${ ({ theme }) => theme.fontSizes.xs };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT500 };
    display: flex;
    align-items: center;
    gap: 0.3rem;
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const TagRemoveButtonBox = styled.button`
    background: none;
    border: none;
    color: ${ ({ theme }) => theme.colors.primary700 };
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
    display: flex;
    align-items: center;

    &:hover {
        color: ${ ({ theme }) => theme.colors.danger };
    }
`;

export const TagSuggestionsBox = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${ ({ theme }) => theme.colors.white };
    border: 2px solid ${ ({ theme }) => theme.colors.primary400 };
    border-radius: ${ ({ theme }) => theme.borderRadius.lg };
    box-shadow: ${ ({ theme }) => theme.shadows.lg };
    z-index: 1000;
    max-height: 200px;
    overflow-y: auto;
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