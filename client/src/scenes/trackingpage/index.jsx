import React from 'react';
import { Container }  from '@mui/material';
import TrackingInput from '../express/TrackingInput'; // Adjust the import path as necessary

const Tracking = () => {
  

  return (
    <Container maxWidth="lg" sx={{marginTop: "10vh"}}>
      <TrackingInput />
    </Container>
  );
};

export default Tracking;
