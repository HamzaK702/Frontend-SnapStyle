import React, { useRef } from 'react';
import { Box } from '@mui/material';

export default function ThreeBox() {
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

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '300vh', overflow: 'hidden' }}>
      <Box
        ref={secondBannerRef}
        sx={{ flex: 1, backgroundColor: '#FFCCCC', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={scrollToSecondBanner}
      >
        <h1>Banner 1 (Pink)</h1>
      </Box>
      <Box
        ref={thirdBannerRef}
        sx={{ flex: 1, backgroundColor: '#ffa756', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={scrollToThirdBanner}
      >
        <h1>Banner 2 (Orange)</h1>
      </Box>
      <Box 
        ref={firstBannerRef}
        sx={{ flex: 1, backgroundColor: '#CCCCFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={scrollToFirstBanner}
      >
        <h1>Banner 3 (Light Blue)</h1>
      </Box>
    </Box>
  );
}



// import React, { useRef } from 'react';
// import { Box } from '@mui/material';

// export default function ThreeBox() {
//   const secondBannerRef = useRef(null);
//   const thirdBannerRef = useRef(null);

//   const scrollToSecondBanner = () => {
//     secondBannerRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   const scrollToThirdBanner = () => {
//     thirdBannerRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', height: '300vh', overflow: 'hidden' }}>
//       <Box
//         ref={secondBannerRef}
//         sx={{ flex: 1, backgroundColor: '#FFCCCC', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//       >
//         <h1 onClick={scrollToSecondBanner}>Banner 1 (Pink)</h1>
//       </Box>
//       <Box
//         ref={thirdBannerRef}
//         sx={{ flex: 1, backgroundColor: '#ffa756', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//       >
//         <h1 onClick={scrollToThirdBanner}>Banner 2 (Orange)</h1>
//       </Box>
//       <Box sx={{ flex: 1, backgroundColor: '#CCCCFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <h1>Banner 3 (Light Blue)</h1>
//       </Box>
//     </Box>
//   );
// }


// import React from 'react';
// import { Box } from '@mui/material';

// export default function ThreeBox() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', height: '300vh', overflow: 'hidden' }}>
//       <Box sx={{ flex: 1, backgroundColor: '#FFCCCC', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         {/* Content for the first banner */}
//         <h1>Banner 1 (Pink)</h1>
//       </Box>
//       <Box sx={{ flex: 1, backgroundColor: '#ffa756', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         {/* Content for the second banner */}
//         <h1>Banner 2 (Orange)</h1>
//       </Box>
//       <Box sx={{ flex: 1, backgroundColor: '#CCCCFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         {/* Content for the third banner */}
//         <h1>Banner 3 (Light Blue)</h1>
//       </Box>
//     </Box>
//   );
// }



// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Box } from '@mui/material';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// export default function ThreeBox() {
//   const [consignmentNo, setConsignmentNo] = useState('');
  
//   return (
//     <Box sx={{ marginTop: "10vh", minWidth: '100vw', display: 'flex', justifyContent: 'center' }}>
//       <Swiper
//         direction="vertical"
//         slidesPerView={1}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: false,
//         }}
//         navigation={false}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//         style={{
//           "--swiper-pagination-color": "#FF033E",
//           "--swiper-pagination-bullet-inactive-color": "#999999",
//           position: "relative",
//           height: "210vh" // Adjust height according to your need
//         }}
//       >
//         <SwiperSlide>
//           <Box sx={{
//             minWidth: "100vw",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "70vh",
//             backgroundColor: "#FFCCCC" // Soft pink
//           }}>
//             {/* Content */}
//           </Box>
//         </SwiperSlide>

//         <SwiperSlide>
//           <Box sx={{
//             minWidth: "100vw",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "70vh",
//             backgroundColor: "#ffa756" // Soft orange
//           }}>
//             {/* Content */}
//           </Box>
//         </SwiperSlide>

//         <SwiperSlide>
//           <Box sx={{
//             minWidth: "100vw",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "70vh",
//             backgroundColor: "#CCCCFF" // Soft light blue
//           }}>
//             {/* Content */}
//           </Box>
//         </SwiperSlide>
//       </Swiper>
//     </Box>
//   );
// }




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Typography, Button } from '@mui/material';

// const ThreeBox = () => {
//   return (
//     <div className="virtual-makeup-section" style={{ display: 'flex', backgroundColor: '#FFC0CB' }}>
//       <div style={{ flex: 1, padding: '2rem' }}>
//         <Typography variant="h3" component="h2" className="mb-3">
//           VIRTUAL MAKEUP
//         </Typography>
//         <Typography variant="h4" component="h3" className="mb-4">
//           Realistic Beauty Try-on Simulations
//         </Typography>
//         <Typography variant="body1" component="p" className="mb-5">
//           Let buyers experiment with trending looks or your products and virtually try makeup on your app, site, or even a retail kiosk
//         </Typography>
//         <Link to="/virtual-try-on">
//           <Button color="secondary" size="large" className="m-2">
//             Try it now
//           </Button>
//         </Link>
//         <Link to="/learn-more">
//           <Button outline color="secondary" size="large" className="m-2">
//             Learn More
//           </Button>
//         </Link>
//       </div>
//       <div style={{ flex: 1 }}>
//         <img src="../content/images/testpic.jpg" alt="Virtual Try-On" style={{ width: '80%', height: '100%' }} />
//       </div>
//     </div>
//   );
// };

// export default ThreeBox;
