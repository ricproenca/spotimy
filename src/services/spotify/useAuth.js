import { SPOTIFY_LOGIN_ROUTE, SPOTIFY_REFRESH_ROUTE } from '@Config/routes';
import { saveAccessToken, saveExpireTime, saveRefreshToken } from '@Utils/spotify';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useAuth = code => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post(SPOTIFY_LOGIN_ROUTE, { code })
      .then(response => {
        window.history.pushState({}, null, '/');

        setAccessToken(response.data.accessToken);
        saveAccessToken(response.data.accessToken);
      })
      .catch(() => (window.location = '/'));
  }, []);

  useEffect(() => {
    if (!refreshToken || !expiresIn) {
      return;
    }

    let interval = setInterval(() => {
      axios
        .post(SPOTIFY_REFRESH_ROUTE, { refreshToken })
        .then(response => {
          setRefreshToken(response.data.accessToken);
          saveRefreshToken(response.data.accessToken);
          setExpiresIn(response.data.expiresIn);
          saveExpireTime(response.data.expiresIn);
        })
        .catch(() => (window.location = '/'));
    }, (expiresIn - 60) * 1000);

    return () => clearInterval(interval);
  }, [refreshToken, expiresIn]);

  return accessToken;
};

export default useAuth;
