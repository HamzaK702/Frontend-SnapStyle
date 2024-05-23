import React, { useState, useCallback, useRef } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { useDropzone } from 'react-dropzone';

export default function TryOnDesignPage() {
  const [designImage, setDesignImage] = useState(null);
  const [tshirtImage, setTshirtImage] = useState(null);
  const [showTryOnResult, setShowTryOnResult] = useState(false); 
  const [showCal, setCal] = useState(false); 
  const tryOnResultRef = useRef(null);

  const onDropDesign = useCallback((acceptedFiles) => {
    setDesignImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const onDropTshirt = useCallback((acceptedFiles) => {
    setTshirtImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const handleTryOn = () => {
    console.log('Try-On button clicked');
    setCal(true);
    // Simulate an API call to get the try-on result

    // Delay to ensure the section is rendered before scrolling
    setTimeout(() => {
      setShowTryOnResult(true); 
      setTimeout(() => {
        if (tryOnResultRef.current) {
          tryOnResultRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    }, 3000); 
  };

  const { getRootProps: getDesignRootProps, getInputProps: getDesignInputProps, isDragActive: isDesignDragActive } = useDropzone({ onDrop: onDropDesign });
  const { getRootProps: getTshirtRootProps, getInputProps: getTshirtInputProps, isDragActive: isTshirtDragActive } = useDropzone({ onDrop: onDropTshirt });

  return (
    <Box sx={{ backgroundColor: 'black', width: '100%', minHeight: '100vh', paddingBottom: "200vh" }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center', padding: '50px 20px', color: 'white' }}>
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
        Visualize Your Design
        </Typography>

        <Typography
          variant="h6"
          sx={{ marginBottom: '10vh', color: '#ccc', maxWidth: '600px', marginX: 'auto' }}
        >
          Upload an image of your design and a t-shirt image to see how your design looks on the t-shirt.
        </Typography>

        <Box sx={{ marginBottom: '30px', textAlign: "left" }}>
          <Typography variant="h6" sx={{ marginBottom: '10px', color: '#ccc' }}>
            Upload an image of your design
          </Typography>
          <Box
            {...getDesignRootProps()}
            sx={{
              border: '2px dashed #ccc',
              borderRadius: '10px',
              padding: '40px',
              backgroundColor: isDesignDragActive ? '#333' : '#444',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'background-color 0.3s',
            }}
          >
            <input {...getDesignInputProps()} />
            {
              designImage ? (
                <img src={designImage} alt="Design" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              ) : (
                <Typography variant="body1" sx={{ color: '#ccc' }}>
                  {isDesignDragActive ? "Drop the image here ..." : "Drag 'n' drop an image here, or click to select one"}
                </Typography>
              )
            }
          </Box>
        </Box>

        <Box sx={{ marginBottom: '30px', textAlign: "left" }}>
          <Typography variant="h6" sx={{ marginBottom: '10px', color: '#ccc' }}>
            Upload an image of your t-shirt
          </Typography>
          <Box
            {...getTshirtRootProps()}
            sx={{
              border: '2px dashed #ccc',
              borderRadius: '10px',
              padding: '40px',
              backgroundColor: isTshirtDragActive ? '#333' : '#444',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'background-color 0.3s',
            }}
          >
            <input {...getTshirtInputProps()} />
            {
              tshirtImage ? (
                <img src={tshirtImage} alt="T-shirt" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              ) : (
                <Typography variant="body1" sx={{ color: '#ccc' }}>
                  {isTshirtDragActive ? "Drop the image here ..." : "Drag 'n' drop an image here, or click to select one"}
                </Typography>
              )
            }
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            color: "black",
            backgroundColor: "white",
            marginTop: '40px',
            mb: "5vh",
            fontSize: '18px',
            padding: '12px 30px',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
          onClick={handleTryOn}
        >
          Try-On
        </Button>

        {!showTryOnResult && showCal && (
          <Box ref={tryOnResultRef} sx={{ textAlign: "center", maxWidth: '600px', margin: 'auto' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>
              Analyzing...
            </Typography>
          </Box>
        )}

        {showTryOnResult && (
          <Box ref={tryOnResultRef} sx={{ marginTop: '30vh', textAlign: "center", maxWidth: '600px', marginX: 'auto', paddingBottom: "50vh" }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>
              See how your design looks on the T-shirt!
            </Typography>
            <img src="/assets/eagleshirt.jpg" alt="Try-On Result" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          </Box>
        )}
      </Container>
    </Box>
  );
}
