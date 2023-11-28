import { Box, Button, IconButton } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { Fingerprint } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { number } from 'prop-types';
import Stack from '@mui/material/Stack';


export const MuiDemo2 = () => {
  const clickHandler = () => {
    alert("clicked");
  };



  return (
    <div>
      <Box>
        <Button variant='contained' onClick={clickHandler}>
          CLICK ME
        </Button>
        <Button variant='outlined' color='primary'>
          ADD
        </Button>
        <Button variant='text' color='secondary'>
          SUB
        </Button>
        <Button variant='outlined' startIcon={<SendIcon />}>
          send
        </Button>
        <Button endIcon={<DeleteIcon />}>DELETE</Button>
        <IconButton>
          <Fingerprint />
        </IconButton>
        <br />
        <br />
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab disabled aria-label="like">
          <FavoriteIcon />
        </Fab>
        <Fab variant="extended" size="small" color="primary">
          <NavigationIcon sx={{ mr: 1 }} />
          Extended
        </Fab>

        <br />
        <br />
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        </Stack>
        <br />
        <br />

      </Box>
    </div>
  );
};
