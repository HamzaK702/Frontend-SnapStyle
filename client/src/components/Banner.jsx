import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, TextField, InputAdornment, Button, FormControl, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

 

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BannerCarousel() {
    const [consignmentNo, setConsignmentNo] = useState('');
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('768px'));
   
    const handleTrackClick = () => {
     if(consignmentNo){
      navigate(`/tracking/${consignmentNo}`);
     }
    };
  


    return (
        <>  
       
      <Box sx={{ marginTop:"10vh", minWidth: '100vw', display: 'flex', alignContent: 'center', justifyContent: 'center',  }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
           
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          style={{ 
            "--swiper-pagination-color": "#FF033E",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            position: "relative",
            height:  "100%"
          }}
        >   
             <SwiperSlide>
                <Box sx={{
                    minWidth: "70vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    height: "70vh",
                    backgroundColor: "#FFCCCC" // Soft red
                }}>
                    {/* Content */}
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box sx={{
                    minWidth: "70vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    height: "70vh",
                    backgroundColor: "#ffa756" // Soft green
                }}>
                    {/* Content */}
                </Box>
            </SwiperSlide>

            <SwiperSlide>
                <Box sx={{
                    minWidth: "70vw",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    height: "70vh",
                    backgroundColor: "#CCCCFF" // Soft blue
                }}>
                    {/* Content */}
                </Box>
            </SwiperSlide>
           
        
         
        </Swiper>
      </Box>
      </>
    );
  }
  
