import React from "react";
import { useSelector } from 'react-redux';
import {   Box, Typography,   useMediaQuery, useTheme  } from '@mui/material';
import Lottie from 'react-lottie';
import suitcaseAnimation from './suitcaseAnimation.json';


const AdditionalWeight = () => {
    const additionalFreeWeight = useSelector((state) => state.auth.additionalFreeWeight);
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: suitcaseAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

return(
<Box sx={{ my: "2vh", py:"1rem", px:"2rem", pl:1, border: '1px solid #528aae', borderRadius: 4, width: isMobileOrTablet ? '70vw' : "100%" , maxWidth: '95vw', display: 'flex', alignItems: 'center' }}>
{/* Lottie Animation Container */}
<Box sx={{ ml: 2, width: '20vw', height: '100%' }}>
  <Lottie options={defaultOptions} height={60} width={40} />
</Box>
{/* Text Container */}
<Box sx={{ width: '80vw', height: isMobileOrTablet ? "12vw" : "auto" }}>
  <Typography sx={{ textAlign: "right", color: '#528aae', fontSize: "13px"}}>
    Hey, you can add {additionalFreeWeight} kg more at no additional cost!
  </Typography>
</Box>
</Box>
);
}

export default AdditionalWeight;