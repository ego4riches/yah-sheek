import { flexSpaceBetween } from "@/shared";
import styled from 'styled-components';

export const HeaderBox = styled.header`
    ${ flexSpaceBetween };
    width: 100%;
    height: 6rem;
    padding: 0 2rem;
    background-color: ${ ({ theme }) => theme.colors.white };
    border-bottom: ${ ({ theme }) => `0.1rem solid ${ theme.colors.gray200 }` };
    box-shadow: ${ ({ theme }) => theme.shadows.sm };
`

export const BaseballIcon = styled.img`
    height: 2.5rem;
`;

export const AuthBox = styled.div`
    button {
        padding: 0.9rem 1.5rem;
        font-size: 1.1rem;
        font-family: ${ ({ theme }) => theme.fontFamilies.Paperlogy800 };
        color: ${ ({ theme }) => theme.colors.secondary300 };
        background-color: ${ ({ theme }) => theme.colors.secondary700 };
        border-radius: ${ ({ theme }) => theme.borderRadius.lg };
        box-shadow: ${ ({ theme }) => theme.shadows.sm };
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background: ${ ({ theme }) => theme.colors.secondary600 };
        }
    }
`