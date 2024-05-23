import React, { useState, useCallback, useRef } from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { useDropzone } from 'react-dropzone';

export default function TryOnPage() {
  const [topImage, setTopImage] = useState(null);
  const [bottomImage, setBottomImage] = useState(null);
  const [fullBodyImage, setFullBodyImage] = useState(null);
  const [measurementResults, setMeasurementResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [showCal, setCal] = useState(false);
  const [showTryOnResult, setShowTryOnResult] = useState(false); // New state for showing the try-on result
  const resultsRef = useRef(null);
  const tryOnResultRef = useRef(null); // New ref for the try-on result

  const onDropTop = useCallback((acceptedFiles) => {
    setTopImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const onDropBottom = useCallback((acceptedFiles) => {
    setBottomImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const onDropFullBody = useCallback((acceptedFiles) => {
    setFullBodyImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const handleTryOn = () => {
    console.log('Try-On button clicked');
    setCal(true)
    // Simulate an API call to get the try-on result
    setMeasurementResults({
      weight: '70kg',
      height: '175cm',
      waist: '32in',
      chest: '38in',
      hips: '40in'
    });

    // Show GIF instantly
    

    // Delay to ensure the section is rendered before scrolling
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Small delay to allow rendering

    // Show try-on result after 3 seconds
    setTimeout(() => {
      setShowResults(true);
      setShowTryOnResult(true); // Show the try-on result section
      setTimeout(() => {
        if (tryOnResultRef.current) {
          tryOnResultRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow rendering
    }, 3000);
  };

  const { getRootProps: getTopRootProps, getInputProps: getTopInputProps, isDragActive: isTopDragActive } = useDropzone({ onDrop: onDropTop });
  const { getRootProps: getBottomRootProps, getInputProps: getBottomInputProps, isDragActive: isBottomDragActive } = useDropzone({ onDrop: onDropBottom });
  const { getRootProps: getFullBodyRootProps, getInputProps: getFullBodyInputProps, isDragActive: isFullBodyDragActive } = useDropzone({ onDrop: onDropFullBody });

  return (
    <Box sx={{ backgroundColor: 'black', width: '100%', minHeight: '100vh', paddingBottom:"200vh" }}>
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
          Virtual Try-On AI
        </Typography>

        <Typography
          variant="h6"
          sx={{ marginBottom: '10vh', color: '#ccc', maxWidth: '600px', marginX: 'auto' }}
        >
          Upload images of the clothing items you want to try, along with a full body image of yourself. Our state-of-the-art AI will let you try your favorite fit.
        </Typography>

        <Box sx={{ marginBottom: '30px', textAlign: "left" }}>
          <Typography variant="h6" sx={{ marginBottom: '10px', color: '#ccc' }}>
            Upload a picture of the top you want to try
          </Typography>
          <Box
            {...getTopRootProps()}
            sx={{
              border: '2px dashed #ccc',
              borderRadius: '10px',
              padding: '40px',
              backgroundColor: isTopDragActive ? '#333' : '#444',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'background-color 0.3s',
            }}
          >
            <input {...getTopInputProps()} />
            {
              topImage ? (
                <img src={topImage} alt="Top" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              ) : (
                <Typography variant="body1" sx={{ color: '#ccc' }}>
                  {isTopDragActive ? "Drop the image here ..." : "Drag 'n' drop an image here, or click to select one"}
                </Typography>
              )
            }
          </Box>
        </Box>

        <Box sx={{ marginBottom: '30px', textAlign: "left" }}>
          <Typography variant="h6" sx={{ marginBottom: '10px', color: '#ccc' }}>
            Upload a picture of the bottom you want to try
          </Typography>
          <Box
            {...getBottomRootProps()}
            sx={{
              border: '2px dashed #ccc',
              borderRadius: '10px',
              padding: '40px',
              backgroundColor: isBottomDragActive ? '#333' : '#444',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'background-color 0.3s',
            }}
          >
            <input {...getBottomInputProps()} />
            {
              bottomImage ? (
                <img src={bottomImage} alt="Bottom" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              ) : (
                <Typography variant="body1" sx={{ color: '#ccc' }}>
                  {isBottomDragActive ? "Drop the image here ..." : "Drag 'n' drop an image here, or click to select one"}
                </Typography>
              )
            }
          </Box>
        </Box>

        <Box sx={{ marginBottom: '30px', textAlign: "left" }}>
          <Typography variant="h6" sx={{ marginBottom: '10px', color: '#ccc' }}>
            Upload a full body image
          </Typography>
          <Box
            {...getFullBodyRootProps()}
            sx={{
              border: '2px dashed #ccc',
              borderRadius: '10px',
              padding: '40px',
              backgroundColor: isFullBodyDragActive ? '#333' : '#444',
              cursor: 'pointer',
              textAlign: 'center',
              transition: 'background-color 0.3s',
            }}
          >
            <input {...getFullBodyInputProps()} />
            {
              fullBodyImage ? (
                <img src={fullBodyImage} alt="Full Body" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              ) : (
                <Typography variant="body1" sx={{ color: '#ccc' }}>
                  {isFullBodyDragActive ? "Drop the image here ..." : "Drag 'n' drop an image here, or click to select one"}
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

        {!showTryOnResult && showCal &&(
          <Box ref={tryOnResultRef} sx={{ textAlign: "center", maxWidth: '600px', margin: 'auto' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>
             Analyzing...
            </Typography>
            
          </Box>
        )}

        {showTryOnResult && (
          <Box ref={tryOnResultRef} sx={{ marginTop: '30vh', textAlign: "center", maxWidth: '600px', marginX: 'auto', paddingBottom:"50vh"}}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>
              See how it looks on you!
            </Typography>
            <img src="/assets/eagleman.jpg" alt="Try-On Result" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          </Box>
        )}

      </Container>
    </Box>
  );
}
