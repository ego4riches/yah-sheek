import { flexCenter, getShouldForwardProps, type TeamKeyObjI } from "@/shared";
import { getTeamColor } from "@/shared/lib/utils/get-team-color";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

export const ReviewContentInputWrapper = styled.div`
    ${flexCenter};
    width: 100%;
    height: 100%;
    gap: 1.5rem;
`;

export const ReviewTextareaBox = styled(TextareaAutosize).withConfig({
    shouldForwardProp: getShouldForwardProps(['teamKey']),
}) <TeamKeyObjI>`
    flex: 1;
    padding: 1.5rem;
    color: ${({ theme }) => theme.colors.gray700};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 500;
    resize: none;
    overflow-y: hidden;

    &:focus {
        outline: none;
        border-color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 300) : theme.colors.primary500};
    }

    &::placeholder {
        font-size: ${({ theme }) => theme.fontSizes.h3};
        color: ${({ theme }) => theme.colors.gray400};
    }
`;