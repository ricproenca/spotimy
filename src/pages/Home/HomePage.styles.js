import { makeStyles } from '@mui/styles';

export default makeStyles({
  login: {
    display: 'grid',
    placeItems: 'center',
    // height: '100vh',

    '& img': {
      width: '50%'
    },

    '& a': {
      padding: '20px',
      borderRadius: '99px',
      backgroundColor: '#1db954',
      fontWeight: 600,
      color: 'white',
      textDecoration: 'none'
    },

    '& a:hover': {
      backgroundColor: ' white',
      borderColor: '#1db954',
      color: '#1db954'
    }
  }
});
