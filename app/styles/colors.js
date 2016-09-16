import Color from 'color';

export const primary = Color('rgb(11, 85, 136)').rgbString();
export const primaryDark = Color(primary).darken(0.2).rgbString();
export const primaryDarker = Color(primary).darken(0.4).rgbString();

export const accent = Color('rgb(92, 209, 148)').rgbString();

export const secondary = Color('rgba(0, 0, 0, 0.3)').rgbString();

export const coins = Color('rgba(255, 205, 1)').rgbString();
