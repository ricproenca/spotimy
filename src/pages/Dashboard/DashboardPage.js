import axios from 'axios';
import React, { useEffect } from 'react';

import { SPOTIFY_ME_ROUTE } from '@Config/routes';
import { getAccessToken } from '@Utils/spotify';

/**
 * Dashboard page
 *
 */
const DashboardPage = () => {
  useEffect(() => {
    const accessToken = getAccessToken();

    axios
      .get(SPOTIFY_ME_ROUTE, { headers: { Authorization: 'Bearer ' + accessToken } })
      .then(response => {
        console.log(': DashboardPage -> response', response);
      })
      .catch(err => {
        console.log(': DashboardPage -> err', err);
      });
  }, []);

  return (
    <>
      <h2>Dashboard Page</h2>
    </>
  );
};

export default DashboardPage;
