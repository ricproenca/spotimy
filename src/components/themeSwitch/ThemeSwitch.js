import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import React, { useContext } from 'react';

import { APP_THEME_DARK, APP_THEME_LIGHT } from '@Config/app';
import { CustomThemeContext } from '@Providers/Theme/CustomThemeProvider';

import ThemeSwitchStyle from './ThemeSwitch.style';

const StyledSwitch = styled(Switch)(ThemeSwitchStyle);

const ThemeSwitch = () => {
  const { currentTheme, setTheme } = useContext(CustomThemeContext);

  const isDarkTheme = Boolean(currentTheme === APP_THEME_DARK);

  const changeThemeHandler = () => setTheme(isDarkTheme ? APP_THEME_LIGHT : APP_THEME_DARK);

  return <StyledSwitch sx={{ m: 1 }} checked={isDarkTheme} onChange={changeThemeHandler} />;
};

export default ThemeSwitch;
