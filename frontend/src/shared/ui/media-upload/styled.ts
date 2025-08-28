import { flexCenter, flexStart, getShouldForwardProps, type TeamKeyObjI } from "@/shared";
import { getTeamColor } from "@/shared/lib/utils/get-team-color";
import styled from "styled-components";

export const MediaUploadInputBox = styled.label.withConfig({
    shouldForwardProp: getShouldForwardProps(['teamKey']),
}) <TeamKeyObjI>`
    ${flexCenter};
    width: fit-content;
    vertical-align: center;
    padding: 0.8rem 1.2rem;
    background: ${({ theme }) => theme.colors.gray100};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray700};
    cursor: pointer;

    &:hover {
        background: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 100) : theme.colors.primary200};
        border-color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 300) : theme.colors.primary400};
        color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary700};
    }

    input {
        display: none;
    }
`;

export const MediaPreviewWrapper = styled.div`
    ${flexStart};
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
`;

export const MediaPreviewBox = styled.div`
    position: relative;
    width: 8rem;
    height: 8rem;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    overflow: hidden;
`;

export const PreviewImageBox = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PreviewVideoBox = styled.div`
    ${flexCenter};
    height: 100%;
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray400};
`;

export const MediaRemoveButtonBox = styled.button.withConfig({
    shouldForwardProp: getShouldForwardProps(['teamKey']),
}) <TeamKeyObjI>`
    ${flexCenter};
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 0.3rem;
    right: 0.3rem;
    color: white;
    background: ${({ theme, teamKey }) =>
        teamKey ? getTeamColor(teamKey, 300) : theme.colors.primary600};
    border-radius: 50%;
    font-size: ${({ theme }) => theme.fontSizes.xs};

    &:hover {
        background: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary700};
`;