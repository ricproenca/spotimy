import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import dark from './dark';
import light from './light';

const baseTheme = createTheme();

const themes = {
  dark: deepmerge(baseTheme, dark),
  light: deepmerge(baseTheme, light)
};

export const getTheme = theme => themes[theme] || themes.light;
