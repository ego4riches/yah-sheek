import { BUTTON_FONTS, BUTTON_SIZES, BUTTON_VARIANTS, BUTTON_WEIGHTS, type ButtonT, getShouldForwardProps, type TeamKeyObjI } from "@/shared";
import { getTeamColor } from "@/shared/lib/utils/get-team-color";
import styled from "styled-components";

export const ButtonBox = styled.button.withConfig({
    shouldForwardProp: getShouldForwardProps(['size', 'weight', 'variant', 'fontFamily', 'teamKey']),
})<ButtonT & TeamKeyObjI>`
    padding: ${({ size }) =>
        size === BUTTON_SIZES.SMALL ? '0.7rem 1.4rem'
            : size === BUTTON_SIZES.MEDIUM ? '1rem 2.5rem'
                : size === BUTTON_SIZES.LARGE ? '1.7rem 3.5rem'
                    : size === BUTTON_SIZES.XLARGE ? '2.5rem 5rem'
                        : '1.5rem 3rem'};
    background: ${({ theme, variant, teamKey }) =>
        variant === BUTTON_VARIANTS.TRANSPARENT ? 'transparent'
            : variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray100
                : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray200
                    : teamKey
                        ? variant === BUTTON_VARIANTS.PRIMARY_100 ? getTeamColor(teamKey, 100)
                            : variant === BUTTON_VARIANTS.PRIMARY_300 ? getTeamColor(teamKey, 300)
                                : getTeamColor(teamKey, 500)
                        : variant === BUTTON_VARIANTS.PRIMARY_100 ? theme.colors.primary600
                            : variant === BUTTON_VARIANTS.PRIMARY_300 ? theme.colors.primary700
                                : variant === BUTTON_VARIANTS.PRIMARY_500 ? theme.colors.primary700
                                    : 'white'};
    color: ${({ theme, variant, teamKey }) =>
        variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray500
            : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray700
                : teamKey
                    ? variant === BUTTON_VARIANTS.TRANSPARENT ? getTeamColor(teamKey, 100)
                        : variant === BUTTON_VARIANTS.PRIMARY_100 ? getTeamColor(teamKey, 500)
                            : variant === BUTTON_VARIANTS.PRIMARY_300 ? getTeamColor(teamKey, 100)
                                : getTeamColor(teamKey, 100)
                    : variant === BUTTON_VARIANTS.TRANSPARENT ? theme.colors.primary300
                        : variant === BUTTON_VARIANTS.PRIMARY_100 ? theme.colors.primary100
                            : variant === BUTTON_VARIANTS.PRIMARY_300 ? theme.colors.primary100
                                : variant === BUTTON_VARIANTS.PRIMARY_500 ? theme.colors.primary100
                                    : theme.colors.gray400};
    border: ${({ theme, variant }) =>
        variant ? `none` : `1px solid ${theme.colors.gray200}`};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    font-family: ${({ fontFamily }) =>
        fontFamily && BUTTON_FONTS.KBO};
    font-size: ${({ theme, size }) =>
        size === BUTTON_SIZES.SMALL ? theme.fontSizes.sm
            : size === BUTTON_SIZES.LARGE ? theme.fontSizes.lg
                : size === BUTTON_SIZES.XLARGE ? theme.fontSizes.xl
                    : theme.fontSizes.md};
    font-weight: ${({ weight }) =>
        weight === BUTTON_WEIGHTS.LIGHT ? 300
            : weight === BUTTON_WEIGHTS.BOLD ? 700
                : 500};
    box-shadow: ${({ theme, variant }) =>
        variant === BUTTON_VARIANTS.TRANSPARENT ? 'none' : theme.shadows.sm};

    &:hover {
        color: ${({ theme, variant, teamKey }) =>
            variant === BUTTON_VARIANTS.TRANSPARENT ? theme.colors.light
                : variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray600
                    : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray100
                        : teamKey
                            ? variant === BUTTON_VARIANTS.PRIMARY_100 ? getTeamColor(teamKey, 100)
                                : variant === BUTTON_VARIANTS.PRIMARY_300 ? getTeamColor(teamKey, 500)
                                    : getTeamColor(teamKey, 100)
                            : variant === BUTTON_VARIANTS.PRIMARY_100 ? theme.colors.primary100
                                : variant === BUTTON_VARIANTS.PRIMARY_300 ? theme.colors.primary100
                                    : variant === BUTTON_VARIANTS.PRIMARY_500 ? theme.colors.primary100
                                        : theme.colors.gray500};
        background: ${({ theme, variant, teamKey }) =>
            variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray200
                : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray800
                    : teamKey
                        ? variant === BUTTON_VARIANTS.PRIMARY_100 ? getTeamColor(teamKey, 300)
                            : variant === BUTTON_VARIANTS.PRIMARY_300 ? getTeamColor(teamKey, 100)
                                : getTeamColor(teamKey, 300)
                        : variant === BUTTON_VARIANTS.PRIMARY_100 ? theme.colors.primary500
                            : variant === BUTTON_VARIANTS.PRIMARY_300 ? theme.colors.primary500
                                : variant === BUTTON_VARIANTS.TRANSPARENT || BUTTON_VARIANTS.PRIMARY_500 ? theme.colors.primary500
                                    : theme.colors.gray100};
    }

    &:disabled {
        color: ${({ theme, variant, teamKey }) =>
            variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray100
                : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray400
                    : teamKey
                        ? variant === BUTTON_VARIANTS.PRIMARY_100 ? getTeamColor(teamKey, 300)
                            : variant === BUTTON_VARIANTS.PRIMARY_300 ? getTeamColor(teamKey, 300)
                                : getTeamColor(teamKey, 300)
                        : variant === BUTTON_VARIANTS.PRIMARY_100 ? theme.colors.primary300
                            : variant === BUTTON_VARIANTS.PRIMARY_300 ? theme.colors.primary300
                                : variant === BUTTON_VARIANTS.PRIMARY_500 ? theme.colors.primary300
                                    : theme.colors.gray300};
        background: ${({ theme, variant, teamKey }) =>
            variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray200
                : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray600
                    : teamKey
                        ? variant === BUTTON_VARIANTS.PRIMARY_100 ? getTeamColor(teamKey, 100)
                            : variant === BUTTON_VARIANTS.PRIMARY_300 ? getTeamColor(teamKey, 100)
                                : getTeamColor(teamKey, 100)
                        : variant === BUTTON_VARIANTS.PRIMARY_100 ? theme.colors.primary500
                            : variant === BUTTON_VARIANTS.PRIMARY_300 ? theme.colors.primary500
                                : variant === BUTTON_VARIANTS.PRIMARY_500 ? theme.colors.primary500
                                    : theme.colors.gray100};
        cursor: not-allowed;
    }
`;