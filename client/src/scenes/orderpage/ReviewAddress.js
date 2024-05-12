import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddressCards from './AddressCard.js';

function AddressReviewPage() {
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h3" sx={{fontWeight:"600", textAlign: "center", color: '#2f3135'}} gutterBottom>
        Review your pick-up and delivery addresses
      </Typography>
    <AddressCards/>

    </Container>
  );
}

export default AddressReviewPage;
