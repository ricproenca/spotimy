import React from 'react';

import { SPOTIFY_LOGIN_ROUTE } from '@Config/spotify';

import ThemeSwitch from '../../components/themeSwitch/ThemeSwitch';

import useHomePageStyles from './HomePage.styles';

/**
 * Home Page
 *
 * It checks if the user has a valid session and redirect to the proper route
 * - dashboard: in case of a valid session
 * - login: in case of a non valid session
 */
const HomePage = () => {
  const classes = useHomePageStyles();

  return (
    <>
      <ThemeSwitch />
      <div className={classes.login}>
        <img src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt='Spotify' />
        <a href={SPOTIFY_LOGIN_ROUTE}>LOGIN WITH SPOTIFY</a>
      </div>
    </>
  );
};

export default HomePage;
