

//without animation

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Box, Typography, TextField, InputAdornment, Button, FormControl, useMediaQuery, useTheme } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

 

// // import required modules
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function BannerCarousel() {
//     const [consignmentNo, setConsignmentNo] = useState('');
//     const navigate = useNavigate();
//     const theme = useTheme();
//     const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
//     const isTablet = useMediaQuery(theme.breakpoints.down('768px'));
   
//     const handleTrackClick = () => {
//      if(consignmentNo){
//       navigate(`/tracking/${consignmentNo}`);
//      }
//     };
  


//     return (
//         <>  
       
//       <Box sx={{ marginTop:"10vh", minWidth: '100vw', display: 'flex', alignContent: 'center', justifyContent: 'center',  }}>
//         <Swiper
//           spaceBetween={30}
//           centeredSlides={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: false,
           
//           }}
//           navigation={false}
//           modules={[Autoplay, Pagination, Navigation]}
//           className="mySwiper"
//           style={{ 
//             "--swiper-pagination-color": "#FF033E",
//             "--swiper-pagination-bullet-inactive-color": "#999999",
//             position: "relative",
//             height:  "100%"
//           }}
//         >   
//              <SwiperSlide>
//                 <Box sx={{
//                     minWidth: "70vw",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     position: "relative",
//                     height: "70vh",
//                     backgroundColor: "#FFCCCC" // Soft red
//                 }}>
//                     {/* Content */}
//                 </Box>
//             </SwiperSlide>

//             <SwiperSlide>
//                 <Box sx={{
//                     minWidth: "70vw",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     position: "relative",
//                     height: "70vh",
//                     backgroundColor: "#ffa756" // Soft green
//                 }}>
//                     {/* Content */}
//                 </Box>
//             </SwiperSlide>

//             <SwiperSlide>
//                 <Box sx={{
//                     minWidth: "70vw",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     position: "relative",
//                     height: "70vh",
//                     backgroundColor: "#CCCCFF" // Soft blue
//                 }}>
//                     {/* Content */}
//                 </Box>
//             </SwiperSlide>
           
        
         
//         </Swiper>
//       </Box>
//       </>
//     );
//   }


// with animation

// import React, { useRef, useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import lottie from 'lottie-web';

// function ShirtPic() {
//     const animationContainer = useRef(null);

//     useEffect(() => {
//         const animation = lottie.loadAnimation({
//             container: animationContainer.current,
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: process.env.PUBLIC_URL + '/assets/QuestionMarkShirt.json'
//         });

//         return () => animation.destroy();
//     }, []);

//     return (
//         <Box display="flex" alignItems="center" justifyContent="center">
//             <div ref={animationContainer} style={{ width: 300, height: 300 }}></div>
//         </Box>
//     );
// }

// export default function BannerCarousel() {
//     const [consignmentNo, setConsignmentNo] = useState('');
//     const navigate = useNavigate();
//     const theme = useTheme();
//     const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

//     const handleTrackClick = () => {
//         if (consignmentNo) {
//             navigate(`/tracking/${consignmentNo}`);
//         }
//     };

//     const handleGenerateClick = () => {
//         // Navigate to the generation page or perform the desired action
//         navigate('/generate');
//     };

//     return (
//         <>
//             <Box sx={{ marginTop: "10vh", minWidth: '100vw', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
//                 <Swiper
//                     spaceBetween={30}
//                     centeredSlides={true}
//                     autoplay={{
//                         delay: 2500,
//                         disableOnInteraction: false,
//                     }}
//                     pagination={{
//                         clickable: false,
//                     }}
//                     navigation={false}
//                     modules={[Autoplay, Pagination, Navigation]}
//                     className="mySwiper"
//                     style={{
//                         "--swiper-pagination-color": "#FF033E",
//                         "--swiper-pagination-bullet-inactive-color": "#999999",
//                         position: "relative",
//                         height: "100%"
//                     }}
//                 >
//                     <SwiperSlide>
//                         <Box sx={{
//                             minWidth: "70vw",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             position: "relative",
//                             height: "70vh",
//                             backgroundColor: "#FFCCCC" // Soft red
//                         }}>
//                             <Box display="flex" flexDirection="column" alignItems="center">
//                                 <ShirtPic />
//                                 <Typography variant="h4" align="center" sx={{ marginTop: 2 }}>
//                                     Generate your own clothes now
//                                 </Typography>
//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     onClick={handleGenerateClick}
//                                     sx={{ marginTop: 2 }}
//                                 >
//                                     Generate Now!
//                                 </Button>
//                             </Box>
//                         </Box>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <Box sx={{
//                             minWidth: "70vw",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             position: "relative",
//                             height: "70vh",
//                             backgroundColor: "#ffa756" // Soft green
//                         }}>
//                             {/* Content */}
//                         </Box>
//                     </SwiperSlide>
//                     <SwiperSlide>
//                         <Box sx={{
//                             minWidth: "70vw",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             position: "relative",
//                             height: "70vh",
//                             backgroundColor: "#CCCCFF" // Soft blue
//                         }}>
//                             {/* Content */}
//                         </Box>
//                     </SwiperSlide>
//                 </Swiper>
//             </Box>
//         </>
//     );
// }

  


import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import lottie from 'lottie-web';
import ShirtPic from './ShirtPic';
import BodyScan from './BodyScan';

export default function BannerCarousel() {
    const [consignmentNo, setConsignmentNo] = useState('');
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

    const handleTrackClick = () => {
        if (consignmentNo) {
            navigate(`/tracking/${consignmentNo}`);
        }
    };

    const handleGenerateClick = () => {
        navigate('/generate');
    };

    const handleMeasureClick = () => {
        navigate('/measure');
    };

    return (
        <>
            <Box sx={{ marginTop: "10vh", minWidth: '100vw', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
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
                        height: "100%"
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
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <ShirtPic />
                                <Box sx={{ marginLeft: 5, marginRight: 5, textAlign: "center" }}>
                                    <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                                        GENERATE YOUR OWN CLOTHES NOW!
                                    </Typography>
                                </Box>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleGenerateClick}
                                    sx={{ marginLeft: 2 }}
                                    size="large"
                                >
                                    Generate Now!
                                </Button>
                            </Box>
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
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <BodyScan />
                                <Box sx={{ marginLeft: 5, marginRight: 5, textAlign: "center" }}>
                                    <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                                        GET YOURSELF MEASURED NOW!
                                    </Typography>
                                </Box>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleMeasureClick}
                                    sx={{ marginLeft: 2 }}
                                    size="large"
                                >
                                    Get Measured!
                                </Button>
                            </Box>
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
