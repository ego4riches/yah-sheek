import { flexCenter, flexStart, getShouldForwardProps, type IsExpandedI, type IsSelectedI, type TeamKeyObjI, textEllipsis } from "@/shared";
import { getTeamColor } from "@/shared/lib/utils/get-team-color";
import styled from "styled-components";

export const TagManagerWrapper = styled.div`
    ${flexStart};
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const TagExpandedBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isExpanded', 'teamKey']),
}) <IsExpandedI & TeamKeyObjI>`
    ${flexStart};
    color: ${({ theme }) => theme.colors.gray500};
    background: ${({ theme }) => theme.colors.gray100};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: ${({ theme, isExpanded }) => isExpanded ? theme.borderRadius.xl : theme.borderRadius.round};
    width: ${({ isExpanded }) => isExpanded ? '20rem' : '2.5rem'};
    height: 2.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        background: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 100) : theme.colors.primary200};
        border-color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 300) : theme.colors.primary400};
        color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary700};
    }

    span {
        padding: 0.7rem;
    }

    input {
        height: 100%;
        border: none;
        background: transparent;

        &:hover {
            color: ${({ theme, teamKey }) =>
                teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary700};
        }

        &::placeholder {
            color: ${({ theme }) => theme.colors.gray400};
        }
    }
`;

export const TagBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['teamKey']),
}) <TeamKeyObjI>`
    ${flexCenter};
    ${textEllipsis};
    background: ${({ theme, teamKey }) =>
        teamKey ? getTeamColor(teamKey, 100) : theme.colors.primary200};
    color: ${({ theme, teamKey }) =>
        teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary700};
    padding: 0.4rem 0.8rem;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 700;
    gap: 0.3rem;
    max-width: 120rem;

    // 태그 삭제 버튼

    button {
        ${flexCenter};
        color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary700};
        cursor: pointer;
        font-size: 1.3rem;

        &:hover {
            color: ${({ theme }) => theme.colors.danger};
        }
    }
`;

export const TagSuggestionsBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isExpanded', 'teamKey']),
})<IsExpandedI & TeamKeyObjI>`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    font-weight: 100;
    background: white;
    border: ${({ theme, isExpanded, teamKey }) =>
        isExpanded
            ? `1px solid ${teamKey ? getTeamColor(teamKey, 300) : theme.colors.primary400}`
            : 'none'};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    max-height: ${({ isExpanded }) => isExpanded ? '100rem' : '0'};
    opacity: ${({ isExpanded }) => isExpanded ? '1' : '0'};
    overflow: hidden;
`;

export const TagSuggestionItemBox = styled.button.withConfig({
    shouldForwardProp: getShouldForwardProps(['isSelected', 'teamKey']),
})<IsSelectedI & TeamKeyObjI>`
    width: 100%;
    padding: 0.6rem 1rem;
    background: ${({ theme, teamKey, isSelected }) =>
        isSelected
            ? teamKey
                ? getTeamColor(teamKey, 100)
                : theme.colors.primary100 : 'none'};
    border: none;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray700};
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        background: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 100) : theme.colors.primary100};
    }
`;