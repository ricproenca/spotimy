import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import SpotimyLogo from '@Assets/images/spotify/Spotify_Logo_RGB_Green.png';
import { HOME_ROUTE } from '@Config/routes';
import { logoutUser } from '@Utils/auth';
import { deleteAccessToken } from '@Utils/spotify';

const Appbar = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    deleteAccessToken();
    logoutUser();
    navigate(HOME_ROUTE);
  };

  return (
    <AppBar position='static' color='transparent'>
      <Toolbar>
        <Grid container>
          <img src={SpotimyLogo} alt='Spotimy' width={128} />
        </Grid>
        <Grid container justifyContent='flex-end'>
          <Button variant='outlined' endIcon={<LogoutIcon />} onClick={logoutHandler}>
            Logout
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
