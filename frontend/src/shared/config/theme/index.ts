import { fontSizes } from '@/shared/config/theme/fonts';
import { borderRadius, colors, shadows } from '@/shared/config/theme/tokens';

export const theme = {
    colors,
    fontSizes,
    borderRadius,
    shadows,
};

export type ThemeT = typeof theme;

export * from '@/shared/config/theme/animations';
export * from '@/shared/config/theme/fonts';
export * from '@/shared/config/theme/media';
export * from '@/shared/config/theme/teams_colors';
export * from '@/shared/config/theme/tokens';
export * from '@/shared/config/theme/mixins';