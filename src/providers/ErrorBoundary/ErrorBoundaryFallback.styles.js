import { makeStyles } from '@mui/styles';

const ErrorBoundaryFallbackStyles = makeStyles(({ palette, typography }) => {
  return {
    root: {
      color: palette.error.dark,
      textAlign: 'center',
      ...typography.h2
    },
    code: {
      backgroundColor: palette.common.black,
      color: palette.error.light,
      paddingTop: 40,
      paddingBottom: 40,
      marginTop: 40,
      marginBottom: 40,
      ...typography.h4
    },
    stack: {
      backgroundColor: palette.common.white,
      color: palette.error.dark,
      paddingTop: 20,
      paddingBottom: 20,
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 20,
      ...typography.body2,
      textAlign: 'left'
    },
    button: {
      ...typography.body1
    }
  };
});

export default ErrorBoundaryFallbackStyles;
