import { DASHBOARD_ROUTE } from '@Config/routes';
import useAuth from '@Services/spotify/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Spotify redirect page
 *
 * Holds the logic to get spotify code from the url and redirects to the proper page
 */
const RedirectPage = () => {
  const navigate = useNavigate();
  const accessToken = useAuth(new URLSearchParams(window.location.search).get('code'));

  useEffect(() => {
    if (accessToken) {
      navigate(DASHBOARD_ROUTE);
    }
  });

  return null;
};

export default RedirectPage;
