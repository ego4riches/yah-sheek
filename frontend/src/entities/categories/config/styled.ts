import { flexCenter, getShouldForwardProps, type IsOpenI, type IsSelectedI, media, type TeamKeyObjI } from "@/shared";
import { getTeamColor } from "@/shared/lib/utils/get-team-color";
import styled from 'styled-components';

// Categories Menu
export const CategoriesMenuBox = styled.div`
    ${flexCenter};
    gap: 4rem;

    ${media.mobile} {
        gap: 1rem;
    }
`

export const CategoryMenuItemBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isSelected', 'teamKey']),
})<IsSelectedI & TeamKeyObjI>`
    padding: 1rem 3rem;
    border-radius: ${({ theme }) => theme.borderRadius.xxl};
    color: ${({ theme, isSelected, teamKey }) =>
        teamKey
            ? isSelected
                ? getTeamColor(teamKey, 500)
                : getTeamColor(teamKey, 100)
            : isSelected
                ? theme.colors.primary700
                : theme.colors.primary100};
    background: ${({ theme, isSelected }) =>
        isSelected
            ? theme.colors.light
            : 'transparent'};
    font-family: 'KboDiamondGothic', sans-serif;
    font-weight: ${({ isSelected }) => isSelected ? 500 : 700};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }

    ${media.mobile} {
        padding: 0.5rem 1.4rem;
    }
`

// Categories Selector
export const CategoriesSelectorBox = styled.button.withConfig({
    shouldForwardProp: getShouldForwardProps(['isOpen', 'teamKey']),
})<IsOpenI & TeamKeyObjI>`
    ${flexCenter};
    background: ${({ theme, isOpen }) => isOpen ? theme.colors.gray100 : 'white'};
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    padding: 0.8rem 1.2rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray600};
    cursor: pointer;
    gap: 0.5rem;

    &:hover {
        background: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 100) : theme.colors.primary200};
        border-color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 300) : theme.colors.primary400};
        color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary700};
    }

    &::after {
        content: '▼';
        font-size: 0.8rem;
        transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
`;

export const CategoriesDropdownBox = styled.div.withConfig({
    shouldForwardProp: getShouldForwardProps(['isOpen']),
})<IsOpenI>`
    background: white;
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    box-shadow: ${({ theme }) => theme.shadows.lg};
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transform: ${({ isOpen }) => isOpen ? 'translateY(0)' : 'translateY(-10px)'};
`;

export const CategoryOptionBox = styled.button`
    width: 100%;
    padding: 0.8rem 1.2rem;
    background: none;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray700};

    &:hover {
        background: ${({ theme }) => theme.colors.gray100};
    }

    &:first-child {
        border-radius: ${({ theme }) => theme.borderRadius.topRoundedXl};
    }

    &:last-child {
        border-radius: ${({ theme }) => theme.borderRadius.bottomRoundedXl};
    }
`;