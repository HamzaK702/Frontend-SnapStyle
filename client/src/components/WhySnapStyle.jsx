import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const slides = [
  {
    imgSrc: `${process.env.PUBLIC_URL}/assets/darzi.jpeg`,
    title: 'Measure Yourself To The T',
    description: 'Dont know what size you are? No worries! Use our state of the art AI to get accurate measurements of your body from the comfort of your home now!'
  },
  {
    imgSrc: `${process.env.PUBLIC_URL}/assets/suit2.jpeg`,
    title: 'Choose Your Own Style',
    description: 'No need to choose from the basic stuff, get creative and use your imagination to generate your own fantasy wardrobe with our Generative AI!'
  },
  {
    imgSrc: `${process.env.PUBLIC_URL}/assets/suit6.jpeg`,
    title: 'See How You Look',
    description: 'Get your dream clothes, then try them virtually on yourself and see how you would look before doing anything crazy!'
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
              <Box sx={{ marginLeft: '20px', textAlign: 'left', maxWidth: '500px' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {slide.title}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '10px', maxHeight: '100px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
