import React, { useRef, useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import SideNavbar from './SideNavbar';
import ShirtPic from './ShirtPic';
import BodyScan from './BodyScan';
import ChooseClothes from './ChooseClothes';

export default function ThreeBox() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const threeBoxRef = useRef(null);
    const firstBannerRef = useRef(null);
    const secondBannerRef = useRef(null);
    const thirdBannerRef = useRef(null);

    const scrollToFirstBanner = () => {
        firstBannerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToSecondBanner = () => {
        secondBannerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToThirdBanner = () => {
        thirdBannerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScroll = () => {
        const bounding = threeBoxRef.current.getBoundingClientRect();
        if (bounding.top < window.innerHeight && bounding.bottom > 0) {
            setIsNavbarVisible(true);
        } else {
            setIsNavbarVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box ref={threeBoxRef} sx={{ display: 'flex', maxHeight: '300vh', backgroundColor:"black" }}>
            {isNavbarVisible && (
                <SideNavbar
                    scrollToFirstBanner={scrollToFirstBanner}
                    scrollToSecondBanner={scrollToSecondBanner}
                    scrollToThirdBanner={scrollToThirdBanner}
                />
            )}
            <Box sx={{ flex: 1, flexDirection: 'column', overflow: 'hidden' }}>
                <Box
                    ref={firstBannerRef}
                    sx={{ 
                        flex: 1, 
                        backgroundColor: '#252525', 
                        display: 'flex', 
                        alignItems: 'center', 
                        padding: 4,
                        color: '#FFFFFF' 
                    }}
                >
                    <Box sx={{ width: '50%', ml: "5vw" }}>
                        <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#FF0066' }}>
                            Generate Your Own Clothes Now!
                        </Typography>
                        <Typography variant="body1" sx={{ marginY: "4vh" }}>
                            Unlock your creativity with our state-of-the-art design tools that allow you to craft your own unique clothing styles. Imagine and design with ease, and watch your creations come to life with stunning precision and detail. Whether you're an aspiring designer or a fashion enthusiast, our platform provides everything you need to bring your fashion ideas to reality.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{ marginTop: 2, backgroundColor: '#FF0066', color: '#FFFFFF' }}
                            size="large"
                            onClick={() => window.location.href = "http://frontend-snap-style.vercel.app/generate"}
                        >
                            Generate Now!
                        </Button>
                    </Box>
                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                        <ShirtPic />
                    </Box>
                </Box>
                <Box
                    ref={secondBannerRef}
                    sx={{ 
                        flex: 1, 
                        backgroundColor: '#333333', 
                        display: 'flex', 
                        alignItems: 'center', 
                        padding: 4,
                        color: '#EFEFEF' 
                    }}
                >
                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                        <BodyScan />
                    </Box>
                    <Box sx={{ width: '50%', ml: "5vw" }}>
                        <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#FF4500' }}>
                            Get Yourself Measured Now!
                        </Typography>
                        <Typography variant="body1" sx={{ marginY: "4vh" }}>
                            Achieve the perfect fit every time with our precise measurement tools that ensure your clothing fits just right. Our quick and easy process guides you step-by-step to capture accurate measurements, eliminating the guesswork and ensuring that every piece of clothing you design fits like a glove. Say goodbye to ill-fitting garments and hello to perfectly tailored outfits.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{ marginTop: 2, backgroundColor: '#FF4500', color: '#FFFFFF' }}
                            size="large"
                            onClick={() => window.location.href = "http://frontend-snap-style.vercel.app/measure"}
                        >
                            Get Measured!
                        </Button>
                    </Box>
                </Box>
                <Box
                    ref={thirdBannerRef}
                    sx={{ 
                        flex: 1, 
                        backgroundColor: '#0D0917', 
                        display: 'flex', 
                        alignItems: 'center', 
                        padding: 4,
                        color: '#FFFFFF' 
                    }}
                >
                    <Box sx={{ width: '50%', ml: "5vw" }}>
                        <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#00FF00' }}>
                            Try On Your Clothes Now!
                        </Typography>
                        <Typography variant="body1" sx={{ marginY: "4vh" }}>
                            Experience the future of shopping with our virtual try-on feature that lets you see how your designs will look before you make a purchase. Our advanced technology allows you to visualize your creations on a digital avatar, giving you a realistic preview of the fit and style. This way, you can make informed decisions and ensure that every purchase meets your expectations and style preferences.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{ marginTop: 2, backgroundColor: '#00FF00', color: '#FFFFFF' }}
                            size="large"
                            onClick={() => window.location.href = "http://frontend-snap-style.vercel.app/try"}
                        >
                            Try On
                        </Button>
                    </Box>
                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                        <ChooseClothes />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}


// import React, { useRef, useState, useEffect } from 'react';
// import { Box, Button, Typography } from '@mui/material';
// import SideNavbar from './SideNavbar';
// import ShirtPic from './ShirtPic';
// import BodyScan from './BodyScan';
// import ChooseClothes from './ChooseClothes';

// export default function ThreeBox() {
//     const [isNavbarVisible, setIsNavbarVisible] = useState(false);
//     const threeBoxRef = useRef(null);
//     const firstBannerRef = useRef(null);
//     const secondBannerRef = useRef(null);
//     const thirdBannerRef = useRef(null);

//     const scrollToFirstBanner = () => {
//         firstBannerRef.current.scrollIntoView({ behavior: 'smooth' });
//     };

//     const scrollToSecondBanner = () => {
//         secondBannerRef.current.scrollIntoView({ behavior: 'smooth' });
//     };

//     const scrollToThirdBanner = () => {
//         thirdBannerRef.current.scrollIntoView({ behavior: 'smooth' });
//     };

//     const handleScroll = () => {
//         const bounding = threeBoxRef.current.getBoundingClientRect();
//         if (bounding.top < window.innerHeight && bounding.bottom > 0) {
//             setIsNavbarVisible(true);
//         } else {
//             setIsNavbarVisible(false);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <Box ref={threeBoxRef} sx={{ display: 'flex', height: '300vh' }}>
//             {isNavbarVisible && (
//                 <SideNavbar
//                     scrollToFirstBanner={scrollToFirstBanner}
//                     scrollToSecondBanner={scrollToSecondBanner}
//                     scrollToThirdBanner={scrollToThirdBanner}
//                 />
//             )}
//             <Box sx={{ flex: 1, flexDirection: 'column', overflow: 'hidden' }}>
//                 <Box
//                     ref={firstBannerRef}
//                     sx={{ 
//                         flex: 1, 
//                         backgroundColor: '#252525', 
//                         display: 'flex', 
//                         alignItems: 'center', 
//                         padding: 4,
//                         color: '#FFFFFF' 
//                     }}
//                 >
//                     <Box sx={{ width: '50%', ml:"5vw" }}>
//                         <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#FF0066' }}>
//                             Generate Your Own Clothes Now!
//                         </Typography>
//                         <Typography variant="body1" sx={{ marginY: "4vh" }}>
//                         Unlock your creativity with our state-of-the-art design tools that allow you to craft your own unique clothing styles. Imagine and design with ease, and watch your creations come to life with stunning precision and detail. Whether you're an aspiring designer or a fashion enthusiast, our platform provides everything you need to bring your fashion ideas to reality.
//                         </Typography>
//                         <Button variant="contained" sx={{ marginTop: 2, backgroundColor: '#FF0066', color: '#FFFFFF' }} size="large">
//                             Generate Now!
//                         </Button>
//                     </Box>
//                     <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
//                         <ShirtPic />
//                     </Box>
//                 </Box>
//                 <Box
//                     ref={secondBannerRef}
//                     sx={{ 
//                         flex: 1, 
//                         backgroundColor: '#333333', 
//                         display: 'flex', 
//                         alignItems: 'center', 
//                         padding: 4,
//                         color: '#EFEFEF' 
//                     }}
//                 >
//                     <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
//                         <BodyScan />
//                     </Box>
//                     <Box sx={{ width: '50%', ml:"5vw" }}>
//                         <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#FF4500' }}>
//                             Get Yourself Measured Now!
//                         </Typography>
//                         <Typography variant="body1" sx={{ marginY: "4vh" }}>
//                         Achieve the perfect fit every time with our precise measurement tools that ensure your clothing fits just right. Our quick and easy process guides you step-by-step to capture accurate measurements, eliminating the guesswork and ensuring that every piece of clothing you design fits like a glove. Say goodbye to ill-fitting garments and hello to perfectly tailored outfits.
//                         </Typography>
//                         <Button variant="contained" sx={{ marginTop: 2, backgroundColor: '#FF4500', color: '#FFFFFF' }} size="large">
//                             Get Measured!
//                         </Button>
//                     </Box>
                    
//                 </Box>
//                 <Box
//                     ref={thirdBannerRef}
//                     sx={{ 
//                         flex: 1, 
//                         backgroundColor: '#0D0917', 
//                         display: 'flex', 
//                         alignItems: 'center', 
//                         padding: 4,
//                         color: '#FFFFFF' 
//                     }}
//                 >
//                      <Box sx={{ width: '50%', ml:"5vw" }}>
//                         <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#00FF00' }}>
//                             Try On Your Clothes Now!
//                         </Typography>
//                         <Typography variant="body1" sx={{ marginY: "4vh" }}>
//                         Experience the future of shopping with our virtual try-on feature that lets you see how your designs will look before you make a purchase. Our advanced technology allows you to visualize your creations on a digital avatar, giving you a realistic preview of the fit and style. This way, you can make informed decisions and ensure that every purchase meets your expectations and style preferences.
//                         </Typography>
//                         <Button variant="contained" sx={{ marginTop: 2, backgroundColor: '#00FF00', color: '#FFFFFF' }} size="large">
//                             Try On
//                         </Button>
//                     </Box>
//                     <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
//                         <ChooseClothes />
//                     </Box>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }



