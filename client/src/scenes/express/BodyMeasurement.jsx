import React, { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import ImageUpload from '../../components/ImageUpload';
import ExpressNavbar from '../expressNavbar';

export default function BodyMeasurement() {
  const [bodyImage, setBodyImage] = useState(null);
  const [measurementResults, setMeasurementResults] = useState(null);

  const handleBodyChange = (e) => {
    setBodyImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleGetMeasured = () => {
    console.log('Get Measured button clicked');
    // Here you would send the image to your backend and get the measurement results
    // For now, we'll just log a message
    setMeasurementResults({
      weight: '70kg',
      height: '175cm',
      waist: '32in',
      chest: '38in',
      hips: '40in'
    }); // Replace with the result from your backend
  };

  return (
    <Container sx={{ textAlign: 'center', padding: '50px 20px' }}>
      <ExpressNavbar />
      <Typography
        variant="h2"
        sx={{ fontWeight: 'bold', marginBottom: '40px', marginTop: '100px', color: '#3f51b5' }}
      >
        Body Measurement
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginBottom: '40px', color: '#333', maxWidth: '600px', margin: 'auto' }}
      >
        Upload an image of yourself and get accurate measurements of your body including weight, height, waist, chest, hips, and more. Our state-of-the-art AI will provide you with precise measurements to help you find the perfect fit.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
        <ImageUpload label="Upload Full Body Image" onChange={handleBodyChange} image={bodyImage} icon="/assets/fullbody.svg" />
      </Box>
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginTop: '40px', fontSize: '18px', padding: '12px 30px' }}
        onClick={handleGetMeasured}
      >
        Get Measured
      </Button>
      {measurementResults && (
        <Box sx={{ marginTop: '40px', textAlign: 'left', maxWidth: '600px', margin: 'auto' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Measurement Results
          </Typography>
          <Typography variant="body1">
            <strong>Weight:</strong> {measurementResults.weight}
          </Typography>
          <Typography variant="body1">
            <strong>Height:</strong> {measurementResults.height}
          </Typography>
          <Typography variant="body1">
            <strong>Waist:</strong> {measurementResults.waist}
          </Typography>
          <Typography variant="body1">
            <strong>Chest:</strong> {measurementResults.chest}
          </Typography>
          <Typography variant="body1">
            <strong>Hips:</strong> {measurementResults.hips}
          </Typography>
        </Box>
      )}
    </Container>
  );
}
