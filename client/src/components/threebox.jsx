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
        <Box ref={threeBoxRef} sx={{ display: 'flex', height: '300vh' }}>
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
                    <Box sx={{ width: '50%' }}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FF0066' }}>
                            Generate Your Own Clothes Now!
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            Create your unique clothing styles with our innovative tools. Design and see your creation come to life.
                        </Typography>
                        <Button variant="contained" sx={{ marginTop: 2, backgroundColor: '#FF0066', color: '#FFFFFF' }} size="large">
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
                    <Box sx={{ width: '50%' }}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FF4500' }}>
                            Get Yourself Measured Now!
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            Ensure perfect fitting by getting accurate measurements. Quick and easy process.
                        </Typography>
                        <Button variant="contained" sx={{ marginTop: 2, backgroundColor: '#FF4500', color: '#FFFFFF' }} size="large">
                            Get Measured!
                        </Button>
                    </Box>
                    <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                        <BodyScan />
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
                    <Box sx={{ width: '50%' }}>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#00FF00' }}>
                            Try On Your Clothes Now!
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            Virtually try on your designs to see how they look before making a purchase.
                        </Typography>
                        <Button variant="contained" sx={{ marginTop: 2, backgroundColor: '#00FF00', color: '#FFFFFF' }} size="large">
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
//         if (
//             bounding.top < window.innerHeight &&
//             bounding.bottom > 0
//         ) {
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
//                     sx={{ flex: 1, backgroundColor: '#FFCCCC', display: 'flex', alignItems: 'center', padding: 4 }}
//                 >
//                     <Box sx={{ width: '50%' }}>
//                         <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
//                             Generate Your Own Clothes Now!
//                         </Typography>
//                         <Typography variant="body1" sx={{ marginTop: 2 }}>
//                             Create your unique clothing styles with our innovative tools. Design and see your creation come to life.
//                         </Typography>
//                         <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} size="large">
//                             Generate Now!
//                         </Button>
//                     </Box>
//                     <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
//                         <ShirtPic />
//                     </Box>
//                 </Box>
//                 <Box
//                     ref={secondBannerRef}
//                     sx={{ flex: 1, backgroundColor: '#ffa756', display: 'flex', alignItems: 'center', padding: 4 }}
//                 >
//                     <Box sx={{ width: '50%' }}>
//                         <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
//                             Get Yourself Measured Now!
//                         </Typography>
//                         <Typography variant="body1" sx={{ marginTop: 2 }}>
//                             Ensure perfect fitting by getting accurate measurements. Quick and easy process.
//                         </Typography>
//                         <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} size="large">
//                             Get Measured!
//                         </Button>
//                     </Box>
//                     <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
//                         <BodyScan />
//                     </Box>
//                 </Box>
//                 <Box
//                     ref={thirdBannerRef}
//                     sx={{ flex: 1, backgroundColor: '#CCCCFF', display: 'flex', alignItems: 'center', padding: 4 }}
//                 >
//                     <Box sx={{ width: '50%' }}>
//                         <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
//                             Try On Your Clothes Now!
//                         </Typography>
//                         <Typography variant="body1" sx={{ marginTop: 2 }}>
//                             Virtually try on your designs to see how they look before making a purchase.
//                         </Typography>
//                         <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} size="large">
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
