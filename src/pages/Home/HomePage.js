import React from 'react';
/**
 * Home Page
 *
 * It checks if the user has a valid session and redirect to the proper route
 * - dashboard: in case of a valid session
 * - login: in case of a non valid session
 */
const HomePage = ({ state, validSession }) => {
  console.log(': HomePage -> state', state);
  console.log(': HomePage -> validSession', validSession);
  return (
    <>
      <h2>Homepage</h2>
    </>
  );
};

export default HomePage;
