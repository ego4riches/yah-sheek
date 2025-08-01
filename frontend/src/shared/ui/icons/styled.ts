import { getShouldForwardProps, type IsOpenI } from "@/shared";
import styled from "styled-components";

export const DownIconBox = styled.svg.withConfig({
    shouldForwardProp: getShouldForwardProps(['isOpen']),
})<IsOpenI>`
    transform: ${ ({ isOpen }) =>
    (isOpen ? 'rotate(180deg)' : 'rotate(0deg)') };
`