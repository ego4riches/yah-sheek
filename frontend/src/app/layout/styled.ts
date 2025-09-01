import { flexColumnFill } from "@/shared";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 49rem;
    min-height: 100dvh;
`

export const MainWrapper = styled.main`
    ${flexColumnFill};
`