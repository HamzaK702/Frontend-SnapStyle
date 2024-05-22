import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    style={{
                        "--swiper-pagination-color": "#FFFFFF",
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
                            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/jacket.jpg'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: '#FFFFFF'
                        }}>
                            <Box sx={{ textAlign: "center", background: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
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
                                    sx={{ marginTop: 2, backgroundColor: '#FF0066', color: '#FFFFFF' }}
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
                            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/suit.jpg'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: '#FFFFFF'
                        }}>
                            <Box sx={{ textAlign: "center", background: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
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
                                    sx={{ marginTop: 2, backgroundColor: '#FF0066', color: '#FFFFFF' }}
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
                            backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/atta.jpg'})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            color: '#FFFFFF'
                        }}>
                            <Box sx={{ textAlign: "center", background: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
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
                                    sx={{ marginTop: 2, backgroundColor: '#FF0066', color: '#FFFFFF' }}
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
//                         "--swiper-pagination-color": "#000000",
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
//                             backgroundColor: "#E0E0E0" // Light Gray
//                         }}>
//                             <Box sx={{ width: "50%" }}>
//                                 <ShirtPic />
//                             </Box>
//                             <Box sx={{ marginLeft: 5, textAlign: "center", width: "50%" }}>
//                                 <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem', color: '#000000' }}>
//                                     GENERATE YOUR OWN CLOTHES NOW!
//                                 </Typography>
//                                 <Typography variant="body1" align="center" sx={{ marginTop: 2, color: '#000000' }}>
//                                     Create your unique clothing styles with our innovative tools. Design and see your creation come to life.
//                                 </Typography>
//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     onClick={handleGenerateClick}
//                                     sx={{ marginTop: 2 }}
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
//                             backgroundColor: "#B0B0B0" // Darker Gray
//                         }}>
//                             <Box sx={{ width: "50%" }}>
//                                 <BodyScan />
//                             </Box>
//                             <Box sx={{ marginLeft: 5, textAlign: "center", width: "50%" }}>
//                                 <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem', color: '#000000' }}>
//                                     GET YOURSELF MEASURED NOW!
//                                 </Typography>
//                                 <Typography variant="body1" align="center" sx={{ marginTop: 2, color: '#000000' }}>
//                                     Ensure perfect fitting by getting accurate measurements. Quick and easy process.
//                                 </Typography>
//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     onClick={handleMeasureClick}
//                                     sx={{ marginTop: 2 }}
//                                     size="large"
//                                 >
//                                     Get Measured!
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
//                             backgroundColor: "#F0F0F0" // Light Gray
//                         }}>
//                             <Box sx={{ width: "50%" }}>
//                                 <ChooseClothes />
//                             </Box>
//                             <Box sx={{ marginLeft: 5, textAlign: "center", width: "50%" }}>
//                                 <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem', color: '#000000' }}>
//                                     TRY ON YOUR CLOTHES NOW!
//                                 </Typography>
//                                 <Typography variant="body1" align="center" sx={{ marginTop: 2, color: '#000000' }}>
//                                     Virtually try on your designs to see how they look before making a purchase.
//                                 </Typography>
//                                 <Button
//                                     variant="contained"
//                                     color="secondary"
//                                     onClick={handleTryOnClick}
//                                     sx={{ marginTop: 2 }}
//                                     size="large"
//                                 >
//                                     Try On
//                                 </Button>
//                             </Box>
//                         </Box>
//                     </SwiperSlide>
//                 </Swiper>
//             </Box>
//         </>
//     );
// }




// // import React, { useRef, useState, useEffect } from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
// // import { useNavigate } from 'react-router-dom';
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import 'swiper/css/navigation';
// // import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// // import ShirtPic from './ShirtPic';
// // import BodyScan from './BodyScan';
// // import ChooseClothes from './ChooseClothes';

// // export default function BannerCarousel() {
// //     const [consignmentNo, setConsignmentNo] = useState('');
// //     const navigate = useNavigate();
// //     const theme = useTheme();
// //     const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

// //     const handleTrackClick = () => {
// //         if (consignmentNo) {
// //             navigate(`/tracking/${consignmentNo}`);
// //         }
// //     };

// //     const handleGenerateClick = () => {
// //         navigate('/generate');
// //     };

// //     const handleMeasureClick = () => {
// //         navigate('/measure');
// //     };

// //     const handleTryOnClick = () => {
// //         navigate('/tryon');
// //     };

// //     return (
// //         <>
// //             <Box sx={{ marginTop: "10vh", minWidth: '100vw', display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
// //                 <Swiper
// //                     spaceBetween={30}
// //                     centeredSlides={true}
// //                     autoplay={{
// //                         delay: 2500,
// //                         disableOnInteraction: false,
// //                     }}
// //                     pagination={{
// //                         clickable: false,
// //                     }}
// //                     navigation={false}
// //                     modules={[Autoplay, Pagination, Navigation]}
// //                     className="mySwiper"
// //                     style={{
// //                         "--swiper-pagination-color": "#FF033E",
// //                         "--swiper-pagination-bullet-inactive-color": "#999999",
// //                         position: "relative",
// //                         height: "100%"
// //                     }}
// //                 >
// //                     <SwiperSlide>
// //                         <Box sx={{
// //                             minWidth: "70vw",
// //                             display: "flex",
// //                             justifyContent: "center",
// //                             alignItems: "center",
// //                             position: "relative",
// //                             height: "70vh",
// //                             backgroundColor: "#FFCCCC" // Soft red
// //                         }}>
// //                             <Box sx={{ width: "50%" }}>
// //                                 <ShirtPic />
// //                             </Box>
// //                             <Box sx={{ marginLeft: 5, textAlign: "center", width: "50%" }}>
// //                                 <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
// //                                     GENERATE YOUR OWN CLOTHES NOW!
// //                                 </Typography>
// //                                 <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
// //                                     Create your unique clothing styles with our innovative tools. Design and see your creation come to life.
// //                                 </Typography>
// //                                 <Button
// //                                     variant="contained"
// //                                     color="secondary"
// //                                     onClick={handleGenerateClick}
// //                                     sx={{ marginTop: 2 }}
// //                                     size="large"
// //                                 >
// //                                     Generate Now!
// //                                 </Button>
// //                             </Box>
// //                         </Box>
// //                     </SwiperSlide>
// //                     <SwiperSlide>
// //                         <Box sx={{
// //                             minWidth: "70vw",
// //                             display: "flex",
// //                             justifyContent: "center",
// //                             alignItems: "center",
// //                             position: "relative",
// //                             height: "70vh",
// //                             backgroundColor: "#ffa756" // Soft green
// //                         }}>
// //                             <Box sx={{ width: "50%" }}>
// //                                 <BodyScan />
// //                             </Box>
// //                             <Box sx={{ marginLeft: 5, textAlign: "center", width: "50%" }}>
// //                                 <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
// //                                     GET YOURSELF MEASURED NOW!
// //                                 </Typography>
// //                                 <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
// //                                     Ensure perfect fitting by getting accurate measurements. Quick and easy process.
// //                                 </Typography>
// //                                 <Button
// //                                     variant="contained"
// //                                     color="secondary"
// //                                     onClick={handleMeasureClick}
// //                                     sx={{ marginTop: 2 }}
// //                                     size="large"
// //                                 >
// //                                     Get Measured!
// //                                 </Button>
// //                             </Box>
// //                         </Box>
// //                     </SwiperSlide>
// //                     <SwiperSlide>
// //                         <Box sx={{
// //                             minWidth: "70vw",
// //                             display: "flex",
// //                             justifyContent: "center",
// //                             alignItems: "center",
// //                             position: "relative",
// //                             height: "70vh",
// //                             backgroundColor: "#CCCCFF" // Soft blue
// //                         }}>
// //                             <Box sx={{ width: "50%" }}>
// //                                 <ChooseClothes />
// //                             </Box>
// //                             <Box sx={{ marginLeft: 5, textAlign: "center", width: "50%" }}>
// //                                 <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', fontSize: '2rem' }}>
// //                                     TRY ON YOUR CLOTHES NOW!
// //                                 </Typography>
// //                                 <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
// //                                     Virtually try on your designs to see how they look before making a purchase.
// //                                 </Typography>
// //                                 <Button
// //                                     variant="contained"
// //                                     color="secondary"
// //                                     onClick={handleTryOnClick}
// //                                     sx={{ marginTop: 2 }}
// //                                     size="large"
// //                                 >
// //                                     Try On
// //                                 </Button>
// //                             </Box>
// //                         </Box>
// //                     </SwiperSlide>
// //                 </Swiper>
// //             </Box>
// //         </>
// //     );
// // }
