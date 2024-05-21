import React, { useState } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import ImageUpload from '../../components/ImageUpload';
import ExpressNavbar from '../expressNavbar';

export default function VirtualTryOn() {
  const [shirtImage, setShirtImage] = useState(null);
  const [pantsImage, setPantsImage] = useState(null);
  const [bodyImage, setBodyImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);

  const handleShirtChange = (e) => {
    setShirtImage(URL.createObjectURL(e.target.files[0]));
  };

  const handlePantsChange = (e) => {
    setPantsImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleBodyChange = (e) => {
    setBodyImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleTryNow = () => {
    console.log('Try Now button clicked');
    // Here you would send the images to your backend and get the generated image
    // For now, we'll just log a message
    setOutputImage(null); // Replace with the result from your backend
  };

  return (
    <Container sx={{ textAlign: 'center', padding: '50px 20px' }}>
      <ExpressNavbar />
      <Typography
        variant="h2"
        sx={{ fontWeight: 'bold', marginBottom: '40px', marginTop: '100px', color: '#3f51b5' }}
      >
        Virtual Try On
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px' }}>
        <ImageUpload label="Upload Shirt Image" onChange={handleShirtChange} image={shirtImage} icon="/assets/shirt.svg" />
        <ImageUpload label="Upload Pants Image" onChange={handlePantsChange} image={pantsImage} icon="/assets/pants.svg" />
        <ImageUpload label="Upload Full Body Image" onChange={handleBodyChange} image={bodyImage} icon="/assets/fullbody.svg" />
      </Box>
      <Button
        variant="contained"
        color="secondary"
        sx={{ marginTop: '40px', fontSize: '18px', padding: '12px 30px' }}
        onClick={handleTryNow}
      >
        Try Now
      </Button>
      {outputImage && (
        <Box sx={{ marginTop: '40px' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
            Output Image
          </Typography>
          <img src={outputImage} alt="Output" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </Box>
      )}
    </Container>
  );
}
