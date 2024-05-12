import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, InputAdornment, FormControl, Box, IconButton  } from '@mui/material';
import CustomButtons from './CustomButtons';
import BiggerButton from './BiggerButtons';
// import Story from '../../components/Story';
import CustomTryOn from './CustomReviews3d';
// import Reviews from './Reviews';
import FAQ from './FAQ';
import GetInTouch from './GetInTouch';
import { useNavigate, useLocation } from 'react-router-dom';
import CookieConsent from "react-cookie-consent";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ExpressNavbar from '../expressNavbar'
import BannerCarousel from '../../components/Banner';
import BackgroundText from '../../components/BackgroundText';
import VideoPlayer from '../../components/VideoPlayer';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import FAQs from '../homepage/FAQs';
// import Review from './NewReview';
const Express = () => {
  const [consignmentNo, setConsignmentNo] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [expandedCourier, setExpanded] = useState(false);
  const [expandedLuggagePlus, setLuggageExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expandedCourier);
  };

  const handleToggleLuggageExpand = () => {
    setLuggageExpanded(!expandedLuggagePlus);
  };

  const handleTrackClick = () => {
   if(consignmentNo){
    navigate(`/tracking/${consignmentNo}`);
   }
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Ensure the element exists and is not hidden
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Use setTimeout to allow page layout to stabilize before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    }
  }, [location.hash]); 

  const handleAcceptConsent = () => {
 
    const consentInfo = {
      consentGiven: true,
      timestamp: new Date().toISOString(),
      
    };
  
    fetch(`${process.env.REACT_APP_API_URL}/auth/record-consent`, {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(consentInfo),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Consent recorded:', data);
    })
    .catch((error) => {
      console.error('Error recording consent:', error);
    });
  };
  

  return (
    <>
    <ExpressNavbar />
    <BannerCarousel/>

    <Box  sx={{  mt: "5vh"}}>
    <BackgroundText/>
    </Box>
     <Box  sx={{ display: 'flex', flexDirection: 'column', minHeight: '50vh' }}>
     
      <Box
        sx={{
          
        }}
      >
       
        <Container maxWidth="lg"
          sx={{
            marginTop: isMobileOrTablet ? "2vh" : "10vh",
            mb: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
         
          <VideoPlayer/>
      
     
          

        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      
      </Container>
      



    
      <Container  id="reviewsSection" maxWidth="lg" sx={{ display: "flex",flexDirection: "column" }}>
         
    <CustomTryOn/>
       
      </Container>
      </Box>
    </>
  );
};

export default Express;
