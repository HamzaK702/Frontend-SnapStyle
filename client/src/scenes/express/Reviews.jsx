import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

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
//   {
//     name: "Muhammad Hamid",
//     review: "Operates smoothly. Even guides for special process like document attestation for educational or immigration purposes. Quick response to grievances. Like",
    
//   },
//   {
//     name: "Muhammad Hamid",
//     review: "MashaAllah never met a staff like that, Great. Usually staff of such places are very rude but they are such a cool guys.",
    
//   }
];

const CustomButtons = () => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} style={{ color: '#FFD700' }} /> // gold color for all stars
    ));
  };

  return (
    <Box sx={{ maxWidth: "md", display: 'flex', justifyContent: 'space-around', padding: 2, gap: 2, marginBottom: "10vh"}}>
      {reviewData.map((review, index) => (
        <ButtonBase
          key={index}
          onClick={() => console.log(`${review.name} review clicked`)}
          sx={{
            width: 345,
            border: 1,
            borderColor: "#808080",
            borderRadius: '12px',
            overflow: 'hidden',
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 0 5px #528aae',
              border: 'none',
            },
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            padding: 2,
          }}>
            <Typography gutterBottom variant="h6" component="div">
              {review.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {review.review}
            </Typography>
            <Box sx={{ display: 'flex' }}>
              {renderStars()}
            </Box>
          </Box>
        </ButtonBase>
      ))}
    </Box>
  );
};

export default CustomButtons;
