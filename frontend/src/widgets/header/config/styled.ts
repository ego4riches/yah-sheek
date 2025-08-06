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
`