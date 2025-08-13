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
    SUIT400: 'SUIT-Regular',
    SUIT500: 'SUIT-Medium',
    SUIT600: 'SUIT-SemiBold',
    SUIT700: 'SUIT-Bold',
    SUIT800: 'SUIT-ExtraBold',
    SUIT900: 'SUIT-Heavy',
    Paperlogy400: 'Paperlogy-4Regular',
    Paperlogy600: 'Paperlogy-6SemiBold',
    Paperlogy800: 'Paperlogy-8ExtraBold',
    Paperlogy900: 'Paperlogy-9Black',
}

export const fontFaces = css`
    @font-face {
        font-family: 'SUIT-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: 'SUIT-Medium';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    }

    @font-face {
        font-family: 'SUIT-SemiBold';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-SemiBold.woff2') format('woff2');
    }

    @font-face {
        font-family: 'SUIT-Bold';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2') format('woff2');
    }

    @font-face {
        font-family: 'SUIT-ExtraBold';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-ExtraBold.woff2') format('woff2');
    }

    @font-face {
        font-family: 'SUIT-Heavy';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Heavy.woff2') format('woff2');
    }

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

    @font-face {
        font-family: 'Paperlogy-9Black';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-9Black.woff2') format('woff2');
    }

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts[[210]]7@1.1/Pretendard-Regular.woff') format('woff');
    }
`;