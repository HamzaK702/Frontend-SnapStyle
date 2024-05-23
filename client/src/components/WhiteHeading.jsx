import React from 'react';
import { Box, Typography } from '@mui/material';

const WhiteHeading = () => {
  const rootStyle = {
    width: '100%',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10vh', // Adding some padding for better appearance
    paddingBottom: '10vh',
  };

  const typographyStyle = {
    fontWeight: 700,
    color: 'black', // Setting text color to black
  };

  const boxStyle = {
    margin: '0 auto', // Center the box horizontally
    width: '50%',
    padding: '16px',  // Add padding for the card-like feel
    borderRadius: '8px',  // Add border radius for rounded corners
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  // Optional: Add a subtle shadow for more card-like effect
    backgroundColor: '#fff',  // Optional: Add a background color
    textAlign: 'center'  // Center the text within the box
  };

  return (
    <div style={rootStyle}>
      <Box style={boxStyle}>
        <Typography variant="h1" style={typographyStyle}>
          What is SnapStyle?
        </Typography>
      </Box>
    </div>
  );
};

export default WhiteHeading;
