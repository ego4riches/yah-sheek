import { flexColumnCenter, gridCenterX, media } from "@/shared";
import styled from "styled-components";

export const ReviewHeaderWrapper = styled.div`
    ${ flexColumnCenter };
`;

export const ReviewHeaderTitle = styled.h1`
    font-family: ${ ({ theme }) => theme.fontFamilies.Paperlogy600 };
    font-size: ${ ({ theme }) => theme.fontSizes.h1 };
    color: ${ ({ theme }) => theme.colors.gray900 };
    margin: 1rem 0;
    text-align: center;
`;

export const ReviewHeaderControlBox = styled.div`
    ${ gridCenterX };
    width: 100%;
    gap: 1rem;
    padding: 0 1rem;

    > *:first-child {
        justify-self: start;
    }

    > *:nth-child(2) {
        justify-self: center;
    }

    > *:last-child {
        justify-self: end;
    }

    ${ media.mobile } {
        grid-template-rows: auto auto;
        grid-template-columns: 1fr 1fr;
    }
`;