import React from 'react';
import Lottie from 'react-lottie';
import {Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
 import ShippingForm from './ShippingForm';
 import VideoPlayer from '../../components/VideoPlayer';
 import BoxesContainer from './PermittedItems'
import FAQs from './FAQs'
import GetInTouch from '../express/GetInTouch';
const Homepage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    
    <Container maxWidth="lg" disableGutters={true} minHeight= '100vh'>   
    <Box display="flex" flexDirection={isMobile ? 'column-reverse' : 'row'} alignItems="center" marginTop={isMobile ? "1vh" : "10vh"}>
      <Box flex={1} display="flex" flexDirection="column" alignItems={isMobile ? 'center' : 'left'}>
        <Typography variant="h3" sx={{ fontWeight: '600', mb: 4, textAlign: isMobile ? 'center' : 'left', marginTop: isMobile ? "5vh" : "0"}}>
          Excess Baggage? We take the load off you!
        </Typography>
        <Typography variant="h5" sx={{ color: 'grey', mb: 1, textAlign: isMobile ? 'center' : 'left' }}>
          Send your belongings...
        </Typography>
        <ShippingForm />
      </Box>
      <VideoPlayer/>
      </Box>
      
      <BoxesContainer/>
      <Typography variant="h1" sx={{ color: '#2f3135', mb:2,  textAlign:  'left', mt:"4vh"   }}>
          Frequently Asked Questions
        </Typography>
      <FAQs/>
      <Typography variant="h1" sx={{ color: '#2f3135',   textAlign:  'center', mt:"4vh"   }}>
      Need Assistance?
        </Typography>
      <GetInTouch/>
    </Container>
     
   
  </>
  );
};

export default Homepage;
