import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    imgSrc: 'path-to-image1.jpg',
    title: 'Free Support',
    description: 'Be it a bug fix, or adding a new shade or style, our support team is always available at your request.'
  },
  {
    imgSrc: 'path-to-image2.jpg',
    title: 'Innovative Designs',
    description: 'Experience cutting-edge designs that set you apart in the fashion world.'
  },
  {
    imgSrc: 'path-to-image3.jpg',
    title: 'Custom Fitting',
    description: 'Get clothes that fit you perfectly with our advanced measurement tools.'
  }
];

export default function WhySnapStyle() {
  return (
    <Box sx={{ backgroundColor: '#f9f9f9', padding: '50px 20px', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Why SnapStyle?
      </Typography>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        style={{ padding: '20px 0' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box
                sx={{
                  width: '200px',
                  height: '200px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              >
                <img
                  src={slide.imgSrc}
                  alt={slide.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box sx={{ marginLeft: '20px', textAlign: 'left' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {slide.title}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '10px' }}>
                  {slide.description}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
