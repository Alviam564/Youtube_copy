import React from 'react'
import { Box, CircularProgress, Stack } from '@mui/material'

const Loader = () => (
  <Box minHeight={"95hv"}>
    <Stack sx={{ color: '#e20303' }} direction='row' justifyContent='center' alignItems='center' height='80hv' >
      <CircularProgress color="inherit" />
    </Stack>
  </Box>
)

export default Loader