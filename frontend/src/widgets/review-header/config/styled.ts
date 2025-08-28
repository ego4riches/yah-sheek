import { flexColumnCenter, flexSpaceBetween, getShouldForwardProps, type TeamKeyObjI } from "@/shared";
import { getTeamColor } from "@/shared/lib/utils/get-team-color";
import styled from "styled-components";

export const ReviewHeaderWrapper = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['teamKey']),
})<TeamKeyObjI>`
    ${flexColumnCenter};
    padding: 1.5rem 3rem;
    color: ${({ theme }) => theme.colors.light};
    background: ${({ theme, teamKey }) =>
        teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary700};
    gap: 2rem;
`;

export const ReviewHeaderTitle = styled.h1`
    font-family: 'KboDiamondGothic', serif;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.h1};
`;

export const ReviewHeaderControlBox = styled.div`
    ${flexSpaceBetween};
    width: 100%;
`;