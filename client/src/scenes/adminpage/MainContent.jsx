 
import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import OrderTable from './OrderTable';  

const MainContent = () => {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <OrderTable />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainContent;
