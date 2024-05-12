import React from 'react';
import { Card, CardContent, Typography, Button, Grid, useMediaQuery, useTheme } from '@mui/material';

const InfoBox = ({ title, description, buttonText, imgUrl }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Card sx={{ maxWidth: "100%", minHeight:"320px", my: 2, boxShadow: 3, borderRadius: '5px', bgcolor: '#f1f1ee' }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <img src={imgUrl} alt={title} style={{ maxWidth: '30%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h1" component="div" sx={{ textAlign: 'center', fontWeight:600, }}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button size="small">{buttonText}</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const BoxesContainer = () => {
  return (
    <>
      <Typography variant='h1' sx={{marginTop:"10vh"}}>What you can send</Typography>
      
      <Grid container justifyContent="center" marginTop="5vh" spacing={2} sx={{ borderRadius: '5px' }}>
          {/* Ensure each InfoBox takes full width on smaller screens and adjust as necessary for larger screens */}
          <Grid item xs={12} sm={6} lg={4}> 
            <InfoBox
              title="Suitcases & Bags"
              description="Please Ensure you use a robust suitcase or bag."
              // buttonText="Show More"
              imgUrl="/assets/bags.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <InfoBox
              title="Boxes"
              description="Yes! We send boxes too, but only use sturdy double walled cardboard boxes."
              // buttonText="Show More"
              imgUrl="/assets/boxes.png"
            />
          </Grid>
      </Grid>
    </>
  );
}

export default BoxesContainer;
