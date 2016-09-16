import Color from 'color';

export const primary = Color('rgb(18, 86, 185)').rgbString();
export const primaryDark = Color(primary).darken(0.2).rgbString();
export const primaryDarker = Color(primary).darken(0.4).rgbString();

export const accent = Color('rgb(92, 209, 148)').rgbString();

export const secondary = Color('rgba(0, 0, 0, 0.3)').rgbString();
