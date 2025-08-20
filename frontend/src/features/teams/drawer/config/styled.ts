import type {DrawerBoxT, DrawerItemBoxT} from "@/features";
import {getShouldForwardProps} from "@/shared";
import {Link} from "react-router-dom";
import styled from 'styled-components';

export const TeamsDrawerWrapper = styled.div`
    width: fit-content;
    z-index: 1;
`

export const DrawerToggleBox = styled.div`
    font-size: 2rem;
    cursor: pointer;
`;

export const DrawerBox = styled.nav.withConfig({
    shouldForwardProp: getShouldForwardProps(['open']),
})<DrawerBoxT>`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 22rem;
    height: 100dvh;
    background-color: ${({theme}) => theme.colors.gray100};
    border-right: ${({theme}) => `0.1rem solid ${theme.colors.gray200}`};
    box-shadow: ${({theme}) => theme.shadows.md};
    transform: ${({open}) => (open ? "translateX(0)" : "translateX(-100%)")};
`

export const DrawerItemBox = styled(Link).withConfig({
    shouldForwardProp: getShouldForwardProps(['active']),
})<DrawerItemBoxT>`
    text-align: center;
    padding: calc(100vh / 25) 0;
    color: ${({theme, active}) =>
        (active ? theme.colors.gray600 : theme.colors.gray400)};
    background: ${({theme, active}) =>
        (active ? theme.colors.gray200 : "transparent")};
    font-family: ${({theme, active}) =>
        (active ? theme.fontFamilies.Accent800 : theme.fontFamilies.Accent600)};
    text-decoration: none;

    &:hover {
        color: ${({theme, active}) =>
            (active ? theme.colors.gray800 : theme.colors.gray600)};
        background: ${({theme, active}) =>
            (active ? theme.colors.gray300 : theme.colors.gray200)};
    }
`;