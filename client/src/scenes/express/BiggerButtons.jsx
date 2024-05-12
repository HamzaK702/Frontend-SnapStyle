import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ButtonData = [
  {
    label: "Gifts For Every Moment",
    url: "https://sentimentsexpress.com/",
    imgSrc: "/assets/Sentiments.png",
  },
  {
    label: "Fashion Delivered Worldwide",
    url: "https://www.studiobytcs.com/",
    imgSrc: "/assets/StudioBlack.png",
  },
];

const BiggerButton = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const handleButtonClick = (url) => {
     
    window.location.href = url;
    // Alternatively, to open in a new tab, you can use:
    // window.open(url, '_blank');
  };

  return (
    <Box sx={{ maxWidth: "md", display: 'flex',  flexDirection: isMobileOrTablet ? 'column' : 'row',
     justifyContent: 'space-between', padding: 2,  
     gap: isMobileOrTablet ? 2 : 5,
     marginTop: isMobileOrTablet ? '5vh' : '15vh', }}>
      {ButtonData.map((button, index) => (
        <ButtonBase 
          key={index}
          onClick={() => handleButtonClick(button.url)}
          sx={{
            width: isMobileOrTablet ? "90vw" : 400,
            border: 1,
            borderColor: "#808080",
            borderRadius: '2px',
            overflow: 'hidden',
            marginBottom: isMobileOrTablet ? "2vh" :  "10vh",
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
            height: isMobileOrTablet ? 280 : 350,
          }}>
            <Box sx={{
              width: '100%',
              height: '240px',
              backgroundImage: `url(${button.imgSrc})`,
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

export default BiggerButton;
