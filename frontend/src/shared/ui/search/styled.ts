import { flexCenter, media } from "@/shared";
import styled from "styled-components";

export const SearchWrapper = styled.div`
    width: fit-content;
    position: relative;
`;

export const SearchInputBox = styled.input`
    min-width: 20vw;
    padding: 1rem 3rem 1rem 1rem;
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
    border: 1px solid ${ ({ theme }) => theme.colors.gray200 };
    outline: none;
    color: ${ ({ theme }) => theme.colors.gray800 };

    &:focus {
        box-shadow: 0 0 0 0.4rem ${ ({ theme }) => theme.colors.primary300 };
        border-color: ${ ({ theme }) => theme.colors.primary400 };
    }

    ${ media.mobile } {
        min-width: auto;
    }
`;

export const SearchIconBox = styled.div`
    ${ flexCenter };
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
`;