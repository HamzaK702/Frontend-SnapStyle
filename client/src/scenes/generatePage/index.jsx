import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FiftyFiftyComponent from './FiftyFiftyComponent';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download'; // Import the download icon

function GenerateAI() {
  const [prompt, setPrompt] = useState('');
  const [showImages, setShowImages] = useState(false);
  const fiftyFiftyRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleValueChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleClear = () => {
    setPrompt('');
  };

  const handleGenerate = () => {
    // Show hardcoded images when the generate button is clicked
    setShowImages(true);
    console.log('Generate button clicked with prompt:', prompt);
  };

  const handleExampleClick = (example) => {
    setPrompt(example);
  };

  const handleScrollToFiftyFifty = () => {
    fiftyFiftyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    // Simulate downloading the image
    const link = document.createElement('a');
    link.href = '/assets/eagle.jpg'; // URL of the image to download
    link.download = 'design.jpg'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const examplePrompts = [
    'Design a modern T-shirt with a geometric pattern.',
    'Create a T-shirt design featuring a minimalist logo.',
    'Generate a vintage-style T-shirt with a retro color scheme.',
  ];

  const chipStyles = {
    my: 1,
    color: 'white',
    backgroundColor: '#444', // Lighter shade of gray
    '&:hover': {
      backgroundColor: '#555',
    },
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'black',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              marginBottom: '20px',
              marginTop: '-100px',
              color: 'rgb(219, 244, 255)',
              fontWeight: 300,
              fontSize: '46px',
              fontFamily: 'Patua One, serif',
              textAlign: 'center',
              marginBottom: showImages ? '5vh' : '40vh',
            }}
          >
            Generate Your Design
          </Typography>
          {showImages && (
            <>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 1,
                mb: 10,
              }}
            >
              
              <img src="/assets/eagle.jpg" alt="Design 1" height="200px" />
              {/* <img src="https://via.placeholder.com/150" alt="Design 2" />
              <img src="https://via.placeholder.com/150" alt="Design 3" /> */}
            </Box>
            <IconButton
                  onClick={handleDownload}
                  sx={{ color: 'white', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
                >
                  <DownloadIcon />
                </IconButton>
            </>
          )}
          <Card sx={{ width: '100%', mb: '10vh', backgroundColor: '#333', color: 'white' }}>
            <CardContent>
              <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
                {examplePrompts.map((example, index) => (
                  <Chip
                    key={index}
                    label={example}
                    onClick={() => handleExampleClick(example)}
                    sx={{
                      my: 1,
                      color: 'white',
                      backgroundColor: '#444', // Lighter shade of gray
                      '&:hover': {
                        backgroundColor: '#555',
                      },
                    }}
                  />
                ))}
              </Stack>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5" component="div" gutterBottom>
                  Prompt
                </Typography>
                <Button
                  variant="text"
                  sx={{ color: 'white', textDecoration: 'underline', fontSize: '1rem', textTransform: 'none' }}
                  onClick={handleScrollToFiftyFifty}
                >
                  How it works
                </Button>
              </Box>
              <Box sx={{ position: 'relative' }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Type your prompt here..."
                  multiline
                  rows={2}
                  value={prompt}
                  onChange={handleValueChange}
                  InputProps={{
                    style: { color: 'white' },
                  }}
                  sx={{ '.MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' } } }}
                />
                
              </Box>
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Button variant="outlined" onClick={handleGenerate} sx={{ borderColor: 'white', color: 'white' }}>
                  Generate
                </Button>
                <Button variant="outlined" onClick={handleClear} sx={{ borderColor: 'white', color: 'white' }}>
                  Clear
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <div ref={fiftyFiftyRef}>
        <FiftyFiftyComponent />
      </div>
    </>
  );
}

export default GenerateAI;
