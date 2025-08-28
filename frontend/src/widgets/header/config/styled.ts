import { getShouldForwardProps, gridCenterX, type TeamKeyObjI } from "@/shared";
import { getTeamColor } from "@/shared/lib/utils/get-team-color";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const HeaderBox = styled.header.withConfig({
    shouldForwardProp: getShouldForwardProps(['teamKey']),
})<TeamKeyObjI>`
    ${gridCenterX};
    width: 100%;
    height: 6rem;
    padding: 0 2rem;
    background: ${({ theme, teamKey }) =>
        teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary700};
`

export const LogoBox = styled(Link)`
    justify-self: center;

    img {
        height: 2.5rem;
    }
`;

export const AuthBox = styled.div`
    justify-self: end;
`