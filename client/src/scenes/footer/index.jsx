import React, {useState} from 'react';
import { Container, Box, Button, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ScrollToTop from '../../components/ScrollToTop';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const [showSlider, setShowSlider] = useState({ location: false, email: false, phone: false });


    const handleShowSlider = (type) => {
        setShowSlider({ ...showSlider, [type]: true });
        setTimeout(() => {
          setShowSlider({ ...showSlider, [type]: false });
        }, 3000);  
      };

      const handleButtonClick = (url) => {
     
        window.location.href = url;
        // Alternatively, to open in a new tab, you can use:
        // window.open(url, '_blank');
      };
    

  return (
        <Container   disableGutters={true} sx={{
            position: 'relative',  
            marginTop: 'auto',
            borderTop: '1px solid #2f3135',  
            left: 0,
            right: 0,
            bottom: 0,  
            backgroundColor: '#fff',  
            zIndex: 1, 
            width: '100vw',
            mb:"6.5vh"
             
        }}>
           {/* <ScrollToTop />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0px 0',
        }}
      >
         
        <Box>
          <Button variant="text" onClick={() => navigate('/terms-condition')} sx={{color: '#2f3135', fontSize: isMobileOrTablet ? "11px" : "14.5px", textTransform:"none"}}>Terms & Conditions</Button>
          <Button variant="text" onClick={() => navigate('/privacy-policy')} sx={{color: '#2f3135', fontSize: isMobileOrTablet ? "11px" : "14.5px", textTransform:"none"}}>Privacy Policy</Button> 
          <Button variant="text" onClick={() => navigate('/prohibited-items')} sx={{color: '#2f3135', fontSize: isMobileOrTablet ? "11px" : "14.5px", textTransform:"none"}}>Prohibited Items</Button>
        </Box>
         
        {/* Box 3: Icons */}
        {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton aria-label="location" onClick={() => handleShowSlider('location')}>
            <LocationOnIcon sx={{ color: '#2f3135'}}/>
            {showSlider.location && (
              <Typography sx={{ ml: 1, transition: 'all 0.5s ease-in-out', color: '#2f3135', fontSize: isMobileOrTablet ? "10px" : "16px"}}>1000 Great West Road, Brentford, Middlesex TW8 9DW London, UK</Typography>
            )}
          </IconButton>
          <IconButton aria-label="email" onClick={() => handleShowSlider('email')}>
            <EmailIcon sx={{ color: '#2f3135'}}/>
            {showSlider.email && (
              <Typography sx={{ ml: 1, transition: 'all 0.5s ease-in-out', color: '#2f3135', fontSize: isMobileOrTablet ? "10px" : "18px" }}>info@tcsexpress.co.uk </Typography>
            )}
          </IconButton>
          <IconButton aria-label="phone" onClick={() => handleShowSlider('phone')}>
            <PhoneIcon sx={{ color: '#2f3135'}}/>
            {showSlider.phone && (
              <Typography sx={{ ml: 1, transition: 'all 0.5s ease-in-out', color: '#2f3135', fontSize: isMobileOrTablet ? "10px" : "18px" }}>+442088495600</Typography>
            )}
          </IconButton>
        </Box>

        <Box>
        <Button variant="text" onClick={() => handleButtonClick('https://artisan10x.com/')} >
          <Typography variant="body2" color="textSecondary"  marginRight={"20px"} sx={{fontSize: isMobileOrTablet ? "10px" : "16px", textTransform:"none" }}>
            Powered by Artisan10x
          </Typography>
          </Button>
        </Box>

        
       
      </Box>  */}
    </Container>
  );
};

export default Footer;
