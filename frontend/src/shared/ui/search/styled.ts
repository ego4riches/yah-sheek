import { hexToRgba } from "@/shared";
import styled from "styled-components";

export const SearchWrapper = styled.div`
    width: fit-content;
    position: relative;
`

export const SearchInputBox = styled.input`
    min-width: 30rem;
    padding: 1rem 3rem 1rem 1rem;
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
    outline: none;
    color: ${ ({ theme }) => theme.colors.gray800 };

    &:focus {
        box-shadow: 0 0 0 0.4rem ${ ({ theme }) => hexToRgba(theme.colors.ssg, 0.3) };
        border-color: ${ ({ theme }) => hexToRgba(theme.colors.ssg, 0.5) };
    }
`

export const SearchIconBox = styled.div`
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`