import React from 'react';
import { Typography, Container } from '@mui/material';
import CustomComponent from './CustomComponent';


const BackgroundText = () => {
  const rootStyle = {
    width: '100%',
    backgroundColor: '#000',
    textAlign: 'left',
    padding: '20px', // Adding some padding for better appearance
  };

  const typographyStyle = {
    fontWeight: 700,
    color: 'rgb(219, 244, 255)', // Setting text color to white
    fontWeight: 300,
    fontSize:"46px",
    fontFamily:  "Patua One, serif",
   
  };

  return (
    <div style={rootStyle}>
     <Container maxWidth={"lg"}>
      <Typography variant="h1" style={typographyStyle} textAlign={"left"} sx={{ mt: "9vh", mb:"7vh"}}>
        Create and try-on unique clothing  with the help  of AI
      </Typography>
      <CustomComponent/>
      </Container> 
    </div>
  );
};

export default BackgroundText;
