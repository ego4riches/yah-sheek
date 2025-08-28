import { BUTTON_FONTS, BUTTON_SIZES, BUTTON_VARIANTS, BUTTON_WEIGHTS } from "@/shared";
import type { ReactNode } from "react";

// Props
export type ButtonT = {
    onClick: () => void;
    disabled?: boolean;
    children: ReactNode;
    variant?: ButtonVariantsT;
    size?: ButtonSizesT;
    weight?: ButtonWeightsT;
    fontFamily?: ButtonFontsT;
}

// Config
export type ButtonVariantsT = typeof BUTTON_VARIANTS[keyof typeof BUTTON_VARIANTS];
export type ButtonSizesT = typeof BUTTON_SIZES[keyof typeof BUTTON_SIZES];
export type ButtonWeightsT = typeof BUTTON_WEIGHTS[keyof typeof BUTTON_WEIGHTS];
export type ButtonFontsT = typeof BUTTON_FONTS[keyof typeof BUTTON_FONTS];