import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const FiftyFiftyComponent = () => {
  return (
    <Box sx={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="div" gutterBottom textAlign={"center"} sx={{ 
                fontWeight: 700,
                color: 'rgb(219, 244, 255)', // Setting text color to white
                fontWeight: 300,
                fontSize:"46px",
                fontFamily:  "Patua One, serif",
                mb:"5vh"
                }}> 
              How It Works
            </Typography>
            <Typography variant="h6" component="div" gutterBottom sx={{ my:"2vh", fontWeight:700 }}>
              Step 1: Give a Prompt
            </Typography>
            <Typography variant="body1" component="div" gutterBottom sx={{ my:"2vh" }}>
              Enter a description or idea for the design you want. This could be anything from a modern T-shirt with a geometric pattern to a nature-inspired theme.
            </Typography>
            <Typography variant="h6" component="div" gutterBottom sx={{ my:"2vh", fontWeight:700 }}>
              Step 2: Click Generate
            </Typography>
            <Typography variant="body1" component="div" gutterBottom sx={{ my:"2vh" }}>
              Once you have entered your prompt, click the generate button to create your design. Our AI will process your prompt and generate a unique design based on your input.
            </Typography>
            <Typography variant="h6" component="div" gutterBottom sx={{ my:"2vh", fontWeight:700 }}>
              Step 3: Voila, Your Design is Ready
            </Typography>
            <Typography variant="body1" component="div" gutterBottom sx={{ my:"2vh" }}>
              In a few moments, your design will be ready. You can review it, make adjustments if necessary, and use it as you see fit.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}  >
            <img src="assets/image01.gif" alt="Example GIF" style={{ maxWidth: '70%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FiftyFiftyComponent;
