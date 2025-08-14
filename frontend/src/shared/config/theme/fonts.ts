import {css} from 'styled-components';

export const fontSizes = {
    xs: '1rem',
    sm: '1.2rem',
    md: '1.4rem',
    lg: '1.6rem',
    xl: '1.8rem',
    h3: '2rem',
    h2: '3rem',
    h1: '4rem',
};

export const fontFamilies = {
    Accent400: 'Paperlogy-4Regular',
    Accent600: 'Paperlogy-6SemiBold',
    Accent800: 'Paperlogy-8ExtraBold',
}

export const fontFaces = css`
    @font-face {
        font-family: 'Paperlogy-4Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-4Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Paperlogy-6SemiBold';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-6SemiBold.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Paperlogy-8ExtraBold';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2');
    }
`;