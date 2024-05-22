import React, { useState } from 'react';
import { Box, Button, Typography, Container, TextField } from '@mui/material';
import { styled } from '@mui/system';
import ExpressNavbar from '../expressNavbar';

const BackgroundBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #2b2b2b 25%, #1a1a1a 25%, #1a1a1a 50%, #2b2b2b 50%, #2b2b2b 75%, #1a1a1a 75%, #1a1a1a)',
  backgroundSize: '56.57px 56.57px',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff'
}));

const CustomButton = styled(Button)(({ theme }) => ({
  border: '2px solid #fff',
  color: '#fff',
  margin: '10px',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#000',
  }
}));

const ShirtImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '50vh',
  margin: '20px 0'
});

const GeneratedImage = styled('img')({
  maxWidth: '50%',
  maxHeight: '50vh',
  margin: '20px',
  borderRadius: '8px'
});

export default function AIGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const defaultGif = `${process.env.PUBLIC_URL}/assets/shirtgif.gif`;

  const handleGenerateClick = () => {
    // Logic to generate the clothing image based on the prompt
    setGeneratedImage('path-to-generated-image.jpg'); // Replace with actual image path
  };

  const handleClearClick = () => {
    setPrompt('');
    setGeneratedImage(null);
  };

  return (
    <BackgroundBox>
      <ExpressNavbar />
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
          {generatedImage && <GeneratedImage src={generatedImage} alt="Generated Clothing" />}
        </Box>
        <Box sx={{ width: '50%', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ marginBottom: '20px' }}>
            ADORN THE UNEXPECTED
          </Typography>
          <ShirtImage src={defaultGif} alt="Shirt" />
          <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            A ONE OF A KIND T-SHIRT. DESIGNED JUST FOR YOU. NEVER TO BE REPRODUCED.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your shirt design..."
              sx={{
                input: { color: '#fff' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#fff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#fff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#fff',
                  },
                },
                mr: 1,
                color: '#fff',
                width: '1000px'
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleGenerateClick();
                }
              }}
            />
            <CustomButton onClick={handleGenerateClick}>
              Generate
            </CustomButton>
            <CustomButton onClick={handleClearClick} style={{ borderColor: '#FF4500', color: '#FF4500' }}>
              Clear Prompt
            </CustomButton>
          </Box>
        </Box>
      </Container>
    </BackgroundBox>
  );
}
