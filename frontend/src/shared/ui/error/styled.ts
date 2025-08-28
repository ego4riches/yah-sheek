import styled, { keyframes } from "styled-components";

export const armAnima = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(-360deg);
    }
`;

export const headAnima = keyframes`
    0% {
        top: 2.5rem;
    }
    42% {
        top: 2.5rem;
    }
    45% {
        top: 5rem;
    }
    100% {
        top: 2.5rem;
    }
`;

export const eyeAnima = keyframes`
    0% {
        height: 0.5rem;
    }
    42% {
        height: 0.5rem;
    }
    45% {
        height: 0.1rem;
    }
    100% {
        height: 0.5rem;
    }
`;

export const shadowAnima = keyframes`
    0% {
        width: 3.5rem;
        left: 8rem;
    }
    25% {
        width: 4.5rem;
        left: 8rem;
    }
    50% {
        width: 3.5rem;
        left: 8rem;
    }
    75% {
        width: 4.5rem;
        left: 0;
    }
    100% {
        width: 3.5rem;
        left: 8rem;
    }
`;

export const NotFoundBox = styled.div`
    width: 100dvw;
    height: 100dvh;
    position: relative;
    background-color: ${({ theme }) => theme.colors.gray500};
`;

export const ErrorCodeBox = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    color: rgba(19, 36, 44, 0.1);
    font-size: 30em;
    text-align: center;
    transform: translate(-50%, -50%);
`;

export const GoToHomeBox = styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const BatMansBox = styled.div`
    top: 50%;
    left: 50%;
    position: absolute;
    width: 50rem;
    height: 30rem;
    transform: translate(-50%, -50%);

    &:after {
        position: absolute;
        content: "";
        background-color: rgba(19, 36, 44, 0.1);
        border-radius: 1.2rem;
        bottom: 4rem;
        height: 1.2rem;
        left: 8rem;
        width: 35rem;
        z-index: -1;
        animation: ${shadowAnima} 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);
        animation-delay: 0.1s;
    }
`;

export const BatManBox = styled.div`
    height: 30rem;
    width: 25rem;
    position: absolute;

    &:nth-child(1) {
        right: 2rem;
    }

    &:nth-child(2) {
        left: 2rem;
        transform: rotateY(180deg);
    }
`;

export const Head = styled.div`
    width: 6.5rem;
    height: 14rem;
    position: absolute;
    top: 2.5rem;
    left: 6rem;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.gray900};
    border-radius: 5rem;
    animation: ${headAnima} 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);

    ${BatManBox}:nth-child(1) & {
        animation-delay: 0.6s;
    }

    &:after, &:before {
        content: "";
        position: absolute;
        background-color: ${({ theme }) => theme.colors.gray900};
        border-radius: 1rem;
        height: 2rem;
        width: 0.7rem;
    }

    &:after {
        left: 3.5rem;
        top: -0.8rem;
        transform: rotate(20deg);
    }

    &:before {
        left: 3rem;
        top: -0.8rem;
        transform: rotate(-20deg);
    }
`;

export const Eye = styled.div`
    position: absolute;
    transform: translateX(-50%);
    background-color: #EAB08C;
    border-radius: 5rem;
    height: 1.6rem;
    left: 45%;
    top: 4rem;
    width: 4.8rem;

    &:after, &:before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: #13242C;
        border-radius: 50%;
        height: 0.5rem;
        width: 0.5rem;
        animation: ${eyeAnima} 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);

        ${BatManBox}:nth-child(1) & {
            animation-delay: 0.6s;
        }
    }

    &:after {
        left: 0.5rem;
    }

    &:before {
        right: 0.9rem;
    }
`;

export const Nose = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #D9766C;
    border-left: 0.8rem solid rgba(19, 36, 44, 0.1);
    border-radius: 1rem;
    box-sizing: border-box;
    height: 3.5rem;
    left: 45%;
    top: 1.2rem;
    width: 1.5rem;
`;

export const Shape = styled.div`
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    border-radius: 50%;
    height: 14rem;
    overflow: hidden;
    top: 7rem;
    width: 14rem;

    ${BatManBox}:nth-child(1) & {
        background-color: ${({ theme }) => theme.colors.primary900};
    }

    ${BatManBox}:nth-child(2) & {
        background-color: ${({ theme }) => theme.colors.primary900};
    }
`;

export const Circle = styled.div`
    position: absolute;
    border-radius: 50%;
    height: 6rem;
    width: 6rem;

    &:after, &:before {
        content: "";
        position: absolute;
        border-radius: 50%;
        height: 2rem;
        width: 2rem;
    }

    &:after {
        left: 5rem;
        top: 1rem;
    }

    &:before {
        left: 6rem;
        top: 4.5rem;
    }

    &:nth-child(1) {
        left: -1.2rem;
        top: 8rem;
    }

    &:nth-child(2) {
        right: 1rem;
        top: 0;
        transform: rotate(90deg);
    }

    &:nth-child(2):after {
        left: 6.5rem;
        top: 1rem;
    }

    &:nth-child(2):before {
        display: none;
    }

    ${BatManBox}:nth-child(1) & {
        background-color: ${({ theme }) => theme.colors.primary800};

        &:after, &:before {
            background-color: ${({ theme }) => theme.colors.primary700};
        }
    }

    ${BatManBox}:nth-child(2) & {
        background-color: ${({ theme }) => theme.colors.primary700};

        &:after, &:before {
            background-color: ${({ theme }) => theme.colors.primary800};
        }
    }
`;

export const ArmRight = styled.div`
    position: absolute;
    background-color: #EAB08C;
    border-left: 0.8rem solid rgba(19, 36, 44, 0.1);
    border-radius: 5rem;
    box-sizing: border-box;
    height: 18rem;
    left: 13.5rem;
    top: 8rem;
    transform-origin: 3rem 3rem;
    width: 6rem;
    z-index: 1;
    animation: ${armAnima} 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);

    ${BatManBox}:nth-child(2) & {
        animation-delay: 0.6s;
    }
`;

export const Club = styled.div`
    position: absolute;
    border-bottom: 11rem solid #601513;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    height: 0;
    left: -6rem;
    top: 12rem;
    transform: rotate(70deg);
    width: 2rem;

    &:after, &:before {
        position: absolute;
        content: "";
        background-color: #601513;
        border-radius: 50%;
        left: 0;
    }

    &:after {
        height: 2rem;
        width: 2rem;
        top: -1rem;
    }

    &:before {
        height: 4rem;
        width: 4rem;
        left: -1rem;
        top: 9rem;
    }
`;

export const Leg = styled.div`
    position: absolute;
    border-radius: 1rem;
    width: 1rem;
    height: 5.5rem;
    top: 20rem;
    left: 14rem;
    background-color: ${({ theme }) => theme.colors.primary900};

    &:after {
        position: absolute;
        content: "";
        border-radius: 50%;
        height: 1rem;
        left: -0.5rem;
        top: 1.5rem;
        width: 1rem;
    }

    &:nth-child(1) {
        background-color: #B2524D;
        left: 9.5rem;

        &:after {
            background-color: #B2524D;
        }
    }

    &:nth-child(2) {
        background-color: #D9766C;
        left: 11.5rem;

        &:after {
            background-color: #D9766C;
        }
    }
`;

export const Foot = styled.div`
    position: absolute;
    border-radius: 2.5rem 2.5rem 0 0;
    height: 2.5rem;
    left: -4rem;
    top: 3rem;
    width: 5rem;
    background-color: #d49d7b;

    &:after, &:before, .fingers, .fingers:after {
        position: absolute;
        background-color: #EAB08C;
        border-radius: 50%;
        bottom: 0;
        height: 1.5rem;
        transform-origin: bottom;
        width: 1.5rem;
    }

    &:after {
        left: -0.6rem;
        content: "";
    }

    &:before {
        left: 0.8rem;
        transform: scale(0.6);
        content: "";
    }

    .fingers {
        left: 1.5rem;
        transform: scale(0.6);
    }

    .fingers:after {
        left: 1.1rem;
        content: "";
    }

    ${Leg}:nth-child(1) & {
        background-color: #B2524D;

        &:after {
            background-color: #B2524D;
        }

        &:before {
            display: none;
        }
    }

    ${Leg}:nth-child(2) & {
        background-color: #D9766C;
    }
`;