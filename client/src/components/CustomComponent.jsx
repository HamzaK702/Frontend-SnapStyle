import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const typographyStyle = {
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 400,
  fontSize: '23px',
  color: 'rgb(219, 244, 255)',
  lineHeight: '1.5',
};

const buttonStyle = {
  backgroundColor: '#fff',
  color: '#000000',
  fontSize: '26px',
  fontWeight: 700,
  padding: '10px 20px',
  borderRadius: '5px',
  textTransform: 'none',
  marginBottom: '50px',
};

const ContainerStyle = {
  backgroundColor: '#000000',
  paddingTop: '50px',
  paddingBottom: '50px',
  borderRadius: '10px',
};

const CustomComponent = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/generate');
    };
  return (
    <Box style={ContainerStyle}>
      <Button variant="contained" style={buttonStyle} onClick={handleClick}>
        Start Designing
      </Button>
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Typography style={typographyStyle} textAlign="left" width="45%">
        SnapStyle AI revolutionizes clothing creation. It takes your measurements and generates custom designs based on your prompts. Explore uncharted territories in clothing pattern design with the help of AI.
        </Typography>
        <Typography style={typographyStyle} textAlign="left" width="45%">
        Want to take it a step further? Snap a photo of yourself and work with the AI to try-out a unique design. With SnapStyle AI, you can create a visual statement that's uniquely yours and even try on your creations virtually.  
        </Typography>
      </Box>
    </Box>
  );
};

export default CustomComponent;
