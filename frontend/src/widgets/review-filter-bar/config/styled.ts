import { flexSpaceBetween } from "@/shared";
import styled from "styled-components";

export const ReviewFilterBarWrapper = styled.div`
    ${ flexSpaceBetween };
    padding: 2rem;
    background: ${ ({ theme }) => theme.colors.ssg };
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
`