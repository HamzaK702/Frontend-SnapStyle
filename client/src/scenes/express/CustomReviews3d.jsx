import React, { useRef, useState } from 'react';
import { Box, Typography, ButtonBase, useTheme, useMediaQuery } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import 'swiper/css/autoplay'; 

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const reviewData = [
    {
      name: "Farukh Shahzad",
      review: "Good Services round the clock, TCS has great storage facility where the goods are delivered all over the city and country, in fact dispatched for overseas as well, delivery and tracking system is best among the courier services of Pakistan, they deliver very on time and safely, so it is recommended and authentic courier service.",
      
    },
    {
      name: "Azhar Javed",
      review: "TCS Express and Logistics is one and only reliable and trusted courier/logistic company.",
      
    },
    {
      name: "M Jawwad Moeen",
      review: "Friendly Cooperative Staff. Guides well for documentation work. Customers are generally satisfied with this courier service.",
      
    },
    {
    name: "Muhammad Hamid",
    review: "Operates smoothly. Even guides for special process like document attestation for educational or immigration purposes. Quick response to grievances. Like",
    
    },
    {
    name: "Junaid Ali",
    review: "MashaAllah never met a staff like that, Great. Usually staff of such places are very rude but they are such a cool guys.",
    },
   
];

export default function CustomTryOn() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
 

  const smallMobile = useMediaQuery(theme.breakpoints.down('321')); 
  const mediumMobile = useMediaQuery(theme.breakpoints.between('321', '376'));
  const largeMobile = useMediaQuery(theme.breakpoints.between('377', '424'));
  

    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => (
          <StarIcon key={index} style={{ color: '#FFD700' }} /> // gold color for all stars
        ));
      };

  return (
    <>
    <Box id="customReviews" maxWidth="lg" style={{ margin: "0 auto", textAlign: "center" }}>
    <Swiper
          effect={'flip'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false, // Continue autoplay when swiper is interacted with
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination, Autoplay]} // Include Autoplay in the modules array
          className="mySwiper"
        >
        
        {reviewData.map((review, index) => (
            <SwiperSlide>
        <ButtonBase
          key={index}
          
          sx={{
            maxWidth: 345,
            width:   isMobileOrTablet ? mediumMobile ? "80vw" : "70vw" : 345,
            height: isMobileOrTablet ? 250 : 300,
            marginLeft: smallMobile ? "4vh" : mediumMobile ? "1vh" : largeMobile ? "0vh" : 0,
            
            border: 0,
           
          
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            padding: 2,
          }}>
            <img src={`assets/${index+1}.png`} alt=""/>
            
          </Box>
        </ButtonBase>
        </SwiperSlide>
      ))}
       
      </Swiper>
      </Box>
    </>
  );
}
