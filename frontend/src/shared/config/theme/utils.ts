import { css } from 'styled-components';

export const transitionBase = css`
    transition: all 0.3s ease-in-out;
`;

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexSpaceBetween = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const flexColumnCenter = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const textEllipsis = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const visuallyHidden = css`
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
`;