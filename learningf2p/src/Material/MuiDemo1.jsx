import { Box, Grid } from '@mui/material'
import React from 'react'

export const MuiDemo1 = () => {
  return (
    <div>
      {/* <Box height={500} width={500} bgcolor={"#EAFC65"}>
        </Box> */}
      <Grid container spacing={2}>

        <Grid xs={4} bgcolor={"#EF8C1D"} height={200}>

        </Grid>
        <Grid xs={4} bgcolor={"#FFFFFF"} height={200}>

        </Grid>
        <Grid xs={4} bgcolor={"green"} height={200}>

        </Grid>


      </Grid>
    </div>
  )
}