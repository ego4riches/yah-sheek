import { fontFaces, transitionBase } from "@/shared";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${ fontFaces }
    *,
    *::before,
    *::after {
        ${ transitionBase };
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'SUIT-Regular', sans-serif;
        font-size: 1.6rem;
        background-color: white;
        color: ${ ({ theme }) => theme.colors.gray900 };
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
        user-select: none;

        &:focus {
            outline: none;
        }
    }

    ul, ol {
        list-style: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    input, textarea {
        outline: none;
    }

    *:not(input):not(textarea) {
        user-select: none;
    }
`;