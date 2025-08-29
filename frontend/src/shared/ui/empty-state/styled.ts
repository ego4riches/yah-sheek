import { flexColumnCenter, getShouldForwardProps, type TeamKeyObjI } from "@/shared";
import { getTeamColor } from "@/shared/lib/utils/get-team-color";
import styled from "styled-components";

export const EmptyStateWrapper = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['teamKey']),
}) <TeamKeyObjI>`
    ${flexColumnCenter};
    flex: 1;
    gap: 2rem;
    background: ${({ theme, teamKey }) =>
        teamKey ? getTeamColor(teamKey, 100) : theme.colors.primary100};
    border-top: 2px dashed ${({ theme, teamKey }) =>
        teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary600};

    div {
        color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary900};
        font-size: ${({ theme }) => theme.fontSizes.h1};
    }

    h3 {
        color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary900};
        font-size: ${({ theme }) => theme.fontSizes.h3};
        font-weight: 700;
    }

    p {
        color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 300) : theme.colors.primary600};
        font-size: ${({ theme }) => theme.fontSizes.lg};
        font-weight: 500;
    }
`;