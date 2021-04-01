export type Theme = 'dark' | 'light';

export const THEME: Record<string, Theme> = {
    DARK: 'dark',
    LIGHT: 'light',
};

export type ThemeType = {
    theme: typeof darkTheme;
};

export const colors = {
    GrayScale_100: '#000000',
    GrayScale_50: '#131419',
    GrayScale_40: '#2D2D3A',
    GrayScale_30: '#5F5F6E',
    GrayScale_20: '#81818E',
    GrayScale_10: '#E5E5E5',
    GrayScale_0: '#FFFFFF',
    blue: '#4447E2',
    lightBlue: '#9091EE',
};

export const darkTheme = {
    primary: colors.GrayScale_50,
    secondary: colors.GrayScale_40,
    fontPrimary: colors.GrayScale_0,
    fontSecondary: colors.GrayScale_20,
    ...colors,
};

export const lightTheme = {
    primary: colors.GrayScale_0,
    secondary: colors.GrayScale_10,
    fontPrimary: colors.GrayScale_100,
    fontSecondary: colors.GrayScale_50,
    ...colors,
};
