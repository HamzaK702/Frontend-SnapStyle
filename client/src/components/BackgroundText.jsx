import React from 'react';
import { Typography } from '@mui/material';


const BackgroundText = () => {
  const rootStyle = {
    width: '100%',
    backgroundColor: '#640433',
    textAlign: 'center',
    padding: '20px', // Adding some padding for better appearance
  };

  const typographyStyle = {
    fontWeight: 700,
    color: '#ffffff', // Setting text color to white
  };

  return (
    <div style={rootStyle}>
      <Typography variant="h1" style={typographyStyle}>
        FROM THE STUDENTS OF IBA
      </Typography>
    </div>
  );
};

export default BackgroundText;
