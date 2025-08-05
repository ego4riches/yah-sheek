import { BUTTON_SIZES, BUTTON_VARIANTS, BUTTON_WEIGHTS, type ButtonT, getShouldForwardProps } from "@/shared";
import styled from "styled-components";

export const ButtonBox = styled.button.withConfig({
    shouldForwardProp: getShouldForwardProps(['size', 'weight', 'variant']),
})<ButtonT>`
    padding: ${ ({ size }) =>
        size === BUTTON_SIZES.SMALL ? '1rem 2rem'
            : size === BUTTON_SIZES.LARGE ? '2rem 4rem'
                : size === BUTTON_SIZES.XLARGE ? '2.5rem 5rem'
                    : '1.5rem 3rem' };
    background: ${ ({ theme, variant }) =>
        variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray100
            : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray200
                : variant === BUTTON_VARIANTS.PRIMARY ? theme.colors.primary700
                    : theme.colors.white };
    color: ${ ({ theme, variant }) =>
        variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray500
            : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray700
                : variant === BUTTON_VARIANTS.PRIMARY ? theme.colors.primary100
                    : theme.colors.gray400 };
    border: ${ ({ theme, variant }) =>
        variant ? `none` : `1px solid ${ theme.colors.gray200 }` };
    border-radius: ${ ({ theme }) => theme.borderRadius.xl };
    font-size: ${ ({ theme, size }) =>
        size === BUTTON_SIZES.SMALL ? theme.fontSizes.sm
            : size === BUTTON_SIZES.LARGE ? theme.fontSizes.lg
                : size === BUTTON_SIZES.XLARGE ? theme.fontSizes.xl
                    : theme.fontSizes.md };
    font-family: ${ ({ theme, weight }) =>
        weight === BUTTON_WEIGHTS.NORMAL ? theme.fontFamilies.Paperlogy400
            : weight === BUTTON_WEIGHTS.SEMIBOLD ? theme.fontFamilies.Paperlogy600
                : weight === BUTTON_WEIGHTS.BOLD ? theme.fontFamilies.Paperlogy800
                    : weight === BUTTON_WEIGHTS.EXTRABOLD ? theme.fontFamilies.Paperlogy900
                        : theme.fontFamilies.SUIT500 };
    box-shadow: ${ ({ theme }) => theme.shadows.sm };

    &:hover {
        color: ${ ({ theme, variant }) =>
            variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray600
                : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray100
                    : variant === BUTTON_VARIANTS.PRIMARY ? theme.colors.primary100
                        : theme.colors.gray500 };
        background: ${ ({ theme, variant }) =>
            variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray200
                : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray800
                    : variant === BUTTON_VARIANTS.PRIMARY ? theme.colors.primary500
                        : theme.colors.gray100 };
    }

    &:disabled {
        color: ${ ({ theme, variant }) =>
            variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray100
                : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray400
                    : variant === BUTTON_VARIANTS.PRIMARY ? theme.colors.primary300
                        : theme.colors.gray300 };
        background: ${ ({ theme, variant }) =>
            variant === BUTTON_VARIANTS.LIGHT_GRAY ? theme.colors.gray200
                : variant === BUTTON_VARIANTS.GRAY ? theme.colors.gray600
                    : variant === BUTTON_VARIANTS.PRIMARY ? theme.colors.primary500
                        : theme.colors.gray100 };
        cursor: not-allowed;
    }
`;