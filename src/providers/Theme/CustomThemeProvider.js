import { ThemeProvider } from '@mui/material/styles';
import { PropTypes } from 'prop-types';
import React, { createContext, useState } from 'react';

import { APP_THEME_LIGHT } from '@Config/app';
import { APP_THEME } from '@Config/storage';

import { getTheme } from './themes';

export const CustomThemeContext = createContext({
  currentTheme: APP_THEME_LIGHT,
  setTheme: null
});

const CustomThemeProvider = ({ children }) => {
  const currentTheme = localStorage.getItem(APP_THEME) || APP_THEME_LIGHT;

  const [themeName, setThemeName] = useState(currentTheme);

  const theme = getTheme(themeName);

  const persistThemeName = name => {
    localStorage.setItem(APP_THEME, name);
    setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: persistThemeName
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.element
};

export default CustomThemeProvider;
