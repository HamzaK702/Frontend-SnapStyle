import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ButtonData = [
  {
    label: "Send International",
    subLabel: "Coming Soon",
    navigation: '/luggage-plus', // Corrected property name
    imgSrc: "/assets/World.png",
  },
  {
    label: "Book a Collection From Pakistan",
    subLabel: "",
    // navigation: '/book-collection', // Add your navigation path here
    imgSrc: "/assets/Book.png",
  },
  {
    label: "TCS Luggage Plus",
    subLabel: "For Excess Baggage",
    navigation: '/luggage-plus', // Add your navigation path here
    imgSrc: "/assets/luggage.png",
  },
];

const CustomButtons = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate(); // Instantiate the navigate function

  return (
    <Box sx={{ maxWidth:"md", display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: 2, gap: 2, flexDirection: isMobileOrTablet ? "column-reverse" : "row-reverse" }}>
    {ButtonData.map((button, index) => (
      <ButtonBase 
        key={index} 
        onClick={() => navigate(button.navigation)} // Use navigate with button's navigation property
        sx={{ 
          width: isMobileOrTablet ? '100%' : 280,
          border: 1,
          borderColor: "#808080", 
          borderRadius: '12px',
          overflow: 'hidden',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 5px #ec1c24',
            border: 'none',
          },
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: isMobileOrTablet ? 180 : 200,
        }}>
          <Box sx={{
            width: '100%',
            height: '140px',
            backgroundImage: `url(${button.imgSrc})`,
            // backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} />
          <Box sx={{ p: 2, textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              {button.label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {button.subLabel}
            </Typography>
          </Box>
        </Box>
      </ButtonBase>
    ))}
  </Box>
  );
};

export default CustomButtons;
 