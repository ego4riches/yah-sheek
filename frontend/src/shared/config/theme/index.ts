import { borderRadius, colors, fontFamilies, fontSizes, shadows } from '@/shared/config/theme/tokens';

export const theme = {
    colors,
    fontSizes,
    fontFamilies,
    borderRadius,
    shadows,
};

export type ThemeT = typeof theme;

export * from '@/shared/config/theme/fonts';
export * from '@/shared/config/theme/media';
export * from '@/shared/config/theme/tokens';
export * from '@/shared/config/theme/utils';