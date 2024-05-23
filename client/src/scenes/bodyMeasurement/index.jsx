import React, { useState, useCallback, useRef } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { useDropzone } from 'react-dropzone';

export default function BodyMeasurement() {
  const [bodyImage, setBodyImage] = useState(null);
  const [measurementResults, setMeasurementResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const resultsRef = useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    setBodyImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const handleGetMeasured = () => {
    console.log('Get Measured button clicked');
    setMeasurementResults({
      weight: '70kg',
      height: '175cm',
      waist: '32in',
      chest: '38in',
      hips: '40in'
    });

    // Show GIF instantly
    setShowGif(true);

    // Ensure "Calculating..." section is rendered first, then scroll into view
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // small delay to allow rendering

    // Show results after 3 seconds
    setTimeout(() => {
      setShowResults(true);
    }, 3000);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box sx={{ backgroundColor: 'black', width: '100%', minHeight: '100vh', paddingBottom:"40vh" }}>
      <Container sx={{ textAlign: 'center', padding: '50px 20px', color: 'white' }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            marginTop: '100px',
            color: 'rgb(219, 244, 255)',
            fontWeight: 300,
            fontSize: "46px",
            fontFamily: "Patua One, serif",
          }}
        >
          Shapy AI
        </Typography>
        <Typography
          variant="h6"
          sx={{ marginBottom: '10vh', color: '#ccc', maxWidth: '600px', marginX: 'auto' }}
        >
          Upload an image of yourself and get accurate measurements of your body including weight, height, waist, chest, hips, and more. Our state-of-the-art AI will provide you with precise measurements to help you find the perfect fit.
        </Typography>
        <Box
          {...getRootProps()}
          sx={{
            border: '2px dashed #ccc',
            borderRadius: '10px',
            padding: '40px',
            backgroundColor: isDragActive ? '#333' : '#444',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'background-color 0.3s',
          }}
        >
          <input {...getInputProps()} />
          {
            bodyImage ? (
              <img src={bodyImage} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '300px' }} />
            ) : (
              <Typography variant="body1" sx={{ color: '#ccc' }}>
                {isDragActive ? "Drop the image here ..." : "Drag 'n' drop an image here, or click to select one"}
              </Typography>
            )
          }
        </Box>
        <Button
          variant="contained"
          sx={{ 
            color: "black", 
            backgroundColor: "white", 
            marginTop: '40px', 
            mb:"20vh",
            fontSize: '18px', 
            padding: '12px 30px',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          onClick={handleGetMeasured}
        >
          Get Measured
        </Button>
        
        {showGif && (
          <Box ref={resultsRef} sx={{ textAlign: 'center', marginTop: '40px' }}>
            <img src="/assets/bodyMeasure.gif" alt="Body Measurement" style={{ maxWidth: '70%' }} />
          </Box>
        )}
        {showGif && !showResults && (
          <Box  sx={{ marginTop: '40px', textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>
              Calculating...
            </Typography>
          </Box>
        )}
        {measurementResults && showResults && (
          <Box sx={{ marginTop: '10vh', textAlign: 'center', maxWidth: '600px', marginX: 'auto' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>
              Measurement Results
            </Typography>
            <Typography variant="h4" sx={{ color: '#ccc', my: '1vh' }}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>Weight:</Box> {measurementResults.weight}
            </Typography>
            <Typography variant="h4" sx={{ color: '#ccc', my: '1vh' }}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>Height:</Box> {measurementResults.height}
            </Typography>
            <Typography variant="h4" sx={{ color: '#ccc', my: '1vh' }}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>Waist:</Box> {measurementResults.waist}
            </Typography>
            <Typography variant="h4" sx={{ color: '#ccc', my: '1vh' }}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>Chest:</Box> {measurementResults.chest}
            </Typography>
            <Typography variant="h4" sx={{ color: '#ccc', my: '1vh' }}>
              <Box component="span" sx={{ fontWeight: 'bold' }}>Hips:</Box> {measurementResults.hips}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
