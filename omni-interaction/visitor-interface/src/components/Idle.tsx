import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Idle() {
  return (
    <div>
      <p style={{margin: '2em 1em'}}>Waiting for the host to start an activity...</p>
      <CircularProgress color="inherit" />
    </div>
  );
}

export default Idle;
