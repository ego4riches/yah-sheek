import { type DownIconBoxT, getShouldForwardProps } from "@/shared";
import styled from "styled-components";

export const DownIconBox = styled.svg.withConfig({
    shouldForwardProp: getShouldForwardProps(['isOpen']),
})<DownIconBoxT>`
    transform: ${ ({ isOpen }) =>
        (isOpen ? 'rotate(180deg)' : 'rotate(0deg)') };
`