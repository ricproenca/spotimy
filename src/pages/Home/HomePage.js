import React from 'react';

import ThemeSwitch from '../../components/themeSwitch/ThemeSwitch';
/**
 * Home Page
 *
 * It checks if the user has a valid session and redirect to the proper route
 * - dashboard: in case of a valid session
 * - login: in case of a non valid session
 */
const HomePage = () => {
  return (
    <>
      <ThemeSwitch />
      <h2>Homepage</h2>
    </>
  );
};

export default HomePage;
