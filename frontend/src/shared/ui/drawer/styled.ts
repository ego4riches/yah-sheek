import { Link } from "react-router-dom";
import styled from 'styled-components';

export const DrawerWrapper = styled.div`
    width: fit-content;
`

export const DrawerToggle = styled.div`
    font-size: 2rem;
    cursor: pointer;
`;

export const DrawerBox = styled.nav.withConfig({
    shouldForwardProp: (prop) => !['open'].includes(prop),
})<{ open: boolean }>`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    width: 22rem;
    height: 100dvh;
    background-color: ${ ({ theme }) => theme.colors.primary100 };
    border-right: ${ ({ theme }) => `0.1rem solid ${ theme.colors.gray200 }` };
    box-shadow: ${ ({ theme }) => theme.shadows.md };
    transform: ${ ({ open }) => (open ? "translateX(0)" : "translateX(-100%)") };
`

export const DrawerItemBox = styled(Link).withConfig({
    shouldForwardProp: (prop) => !['active'].includes(prop),
})<{ active: boolean }>`
    text-align: center;
    padding: calc(100vh / 25) 0;
    color: ${ ({ theme, active }) => (active ? theme.colors.primary500 : theme.colors.gray700) };
    font-family: ${ ({ theme, active }) =>
        (active ? theme.fontFamilies.Paperlogy600 : theme.fontFamilies.Paperlogy400) };
    background-color: ${ ({ theme, active }) => (active ? theme.colors.primary300 : "transparent") };
    text-decoration: none;

    &:hover {
        background-color: ${ ({ theme, active }) => (active ? theme.colors.primary300 : theme.colors.primary200) };
    }
`;