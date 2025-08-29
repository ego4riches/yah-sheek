import { css } from 'styled-components';

export const transitionBase = css`
    transition: all 0.3s ease-in-out;
`;

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexStart = css`
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const flexColumnCenter = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const flexColumnStart = css`
    display: flex;
    flex-direction: column;
    align-items: start;
`;

export const flexColumnFill = css`
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const flexSpaceBetween = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const gridCenterX = css`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
`

export const gridCenterY = css`
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    justify-items: center;
`

export const gridCenterXY = css`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 1fr auto 1fr;
    justify-items: center;
    align-items: center;
`

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