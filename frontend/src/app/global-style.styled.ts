import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SUIT-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Paperlogy-8ExtraBold';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
    }

    *,
    *::before,
    *::after {
        font-family: 'SUIT-Regular', 'Paperlogy-8ExtraBold', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background-color: ${ ({ theme }) => theme.colors.white };
        color: ${ ({ theme }) => theme.colors.black };
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