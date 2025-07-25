import { gridCenterX } from "@/shared";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const HeaderBox = styled.header`
    ${ gridCenterX };
    width: 100%;
    height: 6rem;
    padding: 0 2rem;
    background-color: ${ ({ theme }) => theme.colors.white };
    border-bottom: ${ ({ theme }) => `0.1rem solid ${ theme.colors.gray200 }` };
    box-shadow: ${ ({ theme }) => theme.shadows.sm };
`

export const LogoBox = styled(Link)`
    justify-self: center;

    img {
        height: 2.5rem;
    }
`;

export const AuthBox = styled.div`
    justify-self: end;

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