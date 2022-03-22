import React from 'react'
import { Box, Stack } from '@mui/material';

import ThemeSwitch from '@Components/themeSwitch/ThemeSwitch';

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-start"
      spacing={0}
      >
      <ThemeSwitch />
    </Stack>
  )
}

export default Header;
