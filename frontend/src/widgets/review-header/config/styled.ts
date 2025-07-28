import { flexColumnCenter } from "@/shared";
import styled from "styled-components";

export const ReviewHeaderWrapper = styled.div`
    ${ flexColumnCenter };
`

export const ReviewHeaderTitle = styled.h1`
    font-family: ${ ({ theme }) => theme.fontFamilies.Paperlogy600 };
    color: ${ ({ theme }) => theme.colors.gray900 };
    margin: 1rem 0;
`