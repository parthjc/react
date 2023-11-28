import { Box, createTheme, Grid, Paper, ThemeProvider } from "@mui/material";

import React from "react";
import { MuiDemo1 } from "./MuiDemo1";
import { MuiTable2 } from "./MuiTable2";

export const MaterialDashBoard = () => {
  const defaultTheme = createTheme();
  const paperStyle = {
    p: 1,
    display: "flex",
    flexDirection: "column",
    height: "auto",
    backgroundColor: "#51e2f5",
    mt: 1,
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Paper sx={paperStyle}>
        <Grid container spacing={2}>
          <Grid ml={1} item xs={6}>
            <MuiTable2 />
          </Grid>
          <Grid item xs={4} ml={2}>
            <MuiDemo1 />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};