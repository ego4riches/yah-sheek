import { flexCenter } from "@/shared";
import styled, { keyframes } from 'styled-components';

const load = keyframes`
    0% {
        background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%, calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%
    }
    16.67% {
        background-position: calc(0 * 100% / 3) 0, calc(1 * 100% / 3) 50%, calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%
    }
    33.33% {
        background-position: calc(0 * 100% / 3) 100%, calc(1 * 100% / 3) 0, calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%
    }
    50% {
        background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 100%, calc(2 * 100% / 3) 0, calc(3 * 100% / 3) 50%
    }
    66.67% {
        background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%, calc(2 * 100% / 3) 100%, calc(3 * 100% / 3) 0
    }
    83.33% {
        background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%, calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 100%
    }
    100% {
        background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%, calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%
    }
`

export const LoadingSpinnerWrapper = styled.div`
    ${flexCenter};
    position: fixed;
    z-index: 9999;
    inset: 0;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(0.2rem);
`;

export const LoadingSpinnerBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const LoadingSpinnerItemBox = styled.div`
    height: 30px;
    --_g1: ${({ theme }) => `no-repeat radial-gradient(farthest-side, ${theme.colors.primary200} 90%, #0000)`};
    --_g2: ${({ theme }) => `no-repeat radial-gradient(farthest-side, ${theme.colors.primary300} 90%, #0000)`};
    --_g3: ${({ theme }) => `no-repeat radial-gradient(farthest-side, ${theme.colors.primary400} 90%, #0000)`};
    --_g4: ${({ theme }) => `no-repeat radial-gradient(farthest-side, ${theme.colors.primary500} 90%, #0000)`};
    background: var(--_g1), var(--_g2), var(--_g3), var(--_g4);
    background-size: 20% 50%;
    aspect-ratio: 2.5;
    animation: ${load} 1s infinite linear;
`;