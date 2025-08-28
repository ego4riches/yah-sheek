import { flexCenter, getShouldForwardProps, type TeamKeyObjI } from "@/shared";
import { getTeamColor } from "@/shared/lib/utils/get-team-color";
import styled from "styled-components";

export const SearchWrapper = styled.div`
    width: fit-content;
    position: relative;
`;

export const SearchInputBox = styled.input.withConfig({
    shouldForwardProp: getShouldForwardProps(['teamKey']),
}) <TeamKeyObjI>`
    min-width: 20vw;
    padding: 1rem 3rem 1rem 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    outline: none;
    color: ${({ theme }) => theme.colors.gray800};

    &:focus {
        box-shadow: 0 0 0 0.4rem ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 100) : theme.colors.primary300};
        border-color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 300) : theme.colors.primary400};
    }
`;

export const SearchIconBox = styled.div`
    ${flexCenter};
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
`;