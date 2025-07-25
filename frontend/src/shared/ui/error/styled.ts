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
    height: 100dvh;
    background-color: ${ ({ theme }) => theme.colors.primary500 };
    font-family: ${ ({ theme }) => theme.fontFamilies.Paperlogy800 };
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
        animation: ${ shadowAnima } 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);
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
    position: absolute;
    background-color: ${ ({ theme }) => theme.colors.primary400 };
    border-radius: 50px;
    height: 140px;
    left: 60px;
    top: 25px;
    width: 65px;
    animation: ${ headAnima } 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);

    ${ BatManBox }:nth-child(1) & {
        animation-delay: 0.6s;
    }

    &:after, &:before {
        content: "";
        position: absolute;
        background-color: #13242C;
        border-radius: 10px;
        height: 20px;
        width: 7px;
    }

    &:after {
        left: 35px;
        top: -8px;
        transform: rotate(20deg);
    }

    &:before {
        left: 30px;
        top: -8px;
        transform: rotate(-20deg);
    }
`;

export const Eye = styled.div`
    position: absolute;
    transform: translateX(-50%);
    background-color: #EAB08C;
    border-radius: 50px;
    height: 16px;
    left: 45%;
    top: 40px;
    width: 48px;

    &:after, &:before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: #13242C;
        border-radius: 50%;
        height: 0.5rem;
        width: 0.5rem;
        animation: ${ eyeAnima } 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);

        ${ BatManBox }:nth-child(1) & {
            animation-delay: 0.6s;
        }
    }

    &:after {
        left: 5px;
    }

    &:before {
        right: 9px;
    }
`;

export const Nose = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #D9766C;
    border-left: 8px solid rgba(19, 36, 44, 0.1);
    border-radius: 10px;
    box-sizing: border-box;
    height: 35px;
    left: 45%;
    top: 12px;
    width: 15px;
`;

export const Shape = styled.div`
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    border-radius: 50%;
    height: 140px;
    overflow: hidden;
    top: 70px;
    width: 140px;

    ${ BatManBox }:nth-child(1) & {
        background-color: #D13433;
    }

    ${ BatManBox }:nth-child(2) & {
        background-color: #932422;
    }
`;

export const Circle = styled.div`
    position: absolute;
    border-radius: 50%;
    height: 60px;
    width: 60px;

    &:after, &:before {
        content: "";
        position: absolute;
        border-radius: 50%;
        height: 20px;
        width: 20px;
    }

    &:after {
        left: 50px;
        top: 10px;
    }

    &:before {
        left: 60px;
        top: 45px;
    }

    &:nth-child(1) {
        left: -12px;
        top: 80px;
    }

    &:nth-child(2) {
        right: 10px;
        top: 0px;
        transform: rotate(90deg);
    }

    &:nth-child(2):after {
        left: 65px;
        top: 10px;
    }

    &:nth-child(2):before {
        display: none;
    }

    ${ BatManBox }:nth-child(1) & {
        background-color: #932422;

        &:after, &:before {
            background-color: #932422;
        }
    }

    ${ BatManBox }:nth-child(2) & {
        background-color: #D13433;

        &:after, &:before {
            background-color: #D13433;
        }
    }
`;

export const ArmRight = styled.div`
    position: absolute;
    background-color: #EAB08C;
    border-left: 8px solid rgba(19, 36, 44, 0.1);
    border-radius: 50px;
    box-sizing: border-box;
    height: 180px;
    left: 135px;
    top: 80px;
    transform-origin: 30px 30px;
    width: 60px;
    z-index: 1;
    animation: ${ armAnima } 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);

    ${ BatManBox }:nth-child(2) & {
        animation-delay: 0.6s;
    }
`;

export const Club = styled.div`
    position: absolute;
    border-bottom: 110px solid #601513;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    height: 0;
    left: -60px;
    top: 120px;
    transform: rotate(70deg);
    width: 20px;

    &:after, &:before {
        position: absolute;
        content: "";
        background-color: #601513;
        border-radius: 50%;
        left: 0;
    }

    &:after {
        height: 20px;
        width: 20px;
        top: -10px;
    }

    &:before {
        height: 40px;
        width: 40px;
        left: -10px;
        top: 90px;
    }
`;

export const Leg = styled.div`
    position: absolute;
    border-radius: 10px;
    height: 55px;
    top: 200px;
    width: 10px;

    &:after {
        position: absolute;
        content: "";
        border-radius: 50%;
        height: 10px;
        left: -5px;
        top: 15px;
        width: 10px;
    }

    &:nth-child(1) {
        background-color: #B2524D;
        left: 95px;

        &:after {
            background-color: #B2524D;
        }
    }

    &:nth-child(2) {
        background-color: #D9766C;
        left: 115px;

        &:after {
            background-color: #D9766C;
        }
    }
`;

export const Foot = styled.div`
    position: absolute;
    border-radius: 25px 25px 0 0;
    height: 25px;
    left: -38px;
    top: 30px;
    width: 50px;

    &:after, &:before, .fingers, .fingers:after {
        position: absolute;
        background-color: #EAB08C;
        border-radius: 50%;
        bottom: 0px;
        height: 15px;
        transform-origin: bottom;
        width: 15px;
    }

    &:after {
        left: -6px;
        content: "";
    }

    &:before {
        left: 8px;
        transform: scale(0.6);
        content: "";
    }

    .fingers {
        left: 15px;
        transform: scale(0.6);
    }

    .fingers:after {
        left: 11px;
        content: "";
    }

    ${ Leg }:nth-child(1) & {
        background-color: #B2524D;

        &:after {
            background-color: #B2524D;
        }

        &:before {
            display: none;
        }
    }

    ${ Leg }:nth-child(2) & {
        background-color: #D9766C;
    }
`;