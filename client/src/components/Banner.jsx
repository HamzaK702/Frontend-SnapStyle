

// import React, { useRef, useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import ShirtPic from './ShirtPic';
// import BodyScan from './BodyScan';
// import ChooseClothes from './ChooseClothes';

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
//         navigate('/generate');
//     };

//     const handleMeasureClick = () => {
//         navigate('/measure');
//     };

//     const handleTryOnClick = () => {
//         navigate('/tryon');
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
//                             <Box display="flex" alignItems="center" justifyContent="center">
//                                 <ShirtPic />
//                                 <Box sx={{ marginLeft: 5, marginRight: 5, textAlign: "center" }}>
//                                     <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
//                                         GENERATE YOUR OWN CLOTHES NOW!
//                                     </Typography>
//                                 </Box>
//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     onClick={handleGenerateClick}
//                                     sx={{ marginLeft: 2 }}
//                                     size="large"
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
//                             <Box display="flex" alignItems="center" justifyContent="center">
//                                 <BodyScan />
//                                 <Box sx={{ marginLeft: 5, marginRight: 5, textAlign: "center" }}>
//                                     <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
//                                         GET YOURSELF MEASURED NOW!
//                                     </Typography>
//                                 </Box>
//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     onClick={handleMeasureClick}
//                                     sx={{ marginLeft: 2 }}
//                                     size="large"
//                                 >
//                                     Get Measured!
//                                 </Button>
//                             </Box>
//                         </Box>
//                     </SwiperSlide>
//                     {/* <SwiperSlide>
//                         <Box sx={{
//                             minWidth: "70vw",
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             position: "relative",
//                             height: "70vh",
//                             backgroundColor: "#CCCCFF" // Soft blue
//                         }}>
//                             <Box display="flex" alignItems="center" justifyContent="center">
//                                 <ChooseClothes />
//                                 <Box sx={{ marginLeft: 5, marginRight: 5, textAlign: "center" }}>
//                                     <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
//                                         TRY ON YOUR CLOTHES NOW!
//                                     </Typography>
//                                 </Box>
//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     onClick={handleTryOnClick}
//                                     sx={{ marginLeft: 2 }}
//                                     size="large"
//                                 >
//                                     Try On
//                                 </Button>
//                             </Box>
//                         </Box>
//                     </SwiperSlide> */}
//                     <SwiperSlide>
//     <Box sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position : "relative",
//         minHeight: "70vh",
//         backgroundColor: "#CCCCFF" // Soft blue
//     }}>
//         <Box sx={{ width: "50%" }}>
//             <ChooseClothes /> {/* Assuming this is your animation */}
//         </Box>
//         <Box sx={{ marginLeft: 5, marginRight: 5, textAlign: "right" }}>
//             <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: 2 }}>
//                 TRY ON YOUR CLOTHES NOW!
//             </Typography>
//             <Button
//                 variant="contained"
//                 color="secondary"
//                 onClick={handleTryOnClick}
//                 sx={{ marginLeft: 2 }}
//                 position ="center"
//                 align = "center"
//                 size="large"
//             >
//                 Try On
//             </Button>
//         </Box>
//     </Box>
// </SwiperSlide>

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
import ShirtPic from './ShirtPic';
import BodyScan from './BodyScan';
import ChooseClothes from './ChooseClothes';

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

    const handleTryOnClick = () => {
        navigate('/tryon');
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
                            <Box sx={{ width: "50%" }}>
                                <ShirtPic />
                            </Box>
                            <Box sx={{ marginLeft: 5, textAlign: "center", width: "50%" }}>
                                <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                                    GENERATE YOUR OWN CLOTHES NOW!
                                </Typography>
                                <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
                                    Create your unique clothing styles with our innovative tools. Design and see your creation come to life.
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleGenerateClick}
                                    sx={{ marginTop: 2 }}
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
                            <Box sx={{ width: "50%" }}>
                                <BodyScan />
                            </Box>
                            <Box sx={{ marginLeft: 5, textAlign: "center", width: "50%" }}>
                                <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                                    GET YOURSELF MEASURED NOW!
                                </Typography>
                                <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
                                    Ensure perfect fitting by getting accurate measurements. Quick and easy process.
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleMeasureClick}
                                    sx={{ marginTop: 2 }}
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
                            <Box sx={{ width: "50%" }}>
                                <ChooseClothes />
                            </Box>
                            <Box sx={{ marginLeft: 5, textAlign: "center", width: "50%" }}>
                                <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
                                    TRY ON YOUR CLOTHES NOW!
                                </Typography>
                                <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
                                    Virtually try on your designs to see how they look before making a purchase.
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleTryOnClick}
                                    sx={{ marginTop: 2 }}
                                    size="large"
                                >
                                    Try On
                                </Button>
                            </Box>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </Box>
        </>
    );
}
