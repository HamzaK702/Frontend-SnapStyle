import React from 'react';
import { Typography } from '@mui/material';
const Section = ({ title, children, isMobileOrTablet }) => (
    <>
      <Typography variant="h1" fontWeight={450} textAlign={'center'} gutterBottom sx={{ marginBottom: "3vh", color: '#2f3135' }}>
        {title}
      </Typography>
      <Typography 
        variant="body1" 
        component="p" 
        sx={{
          fontSize: isMobileOrTablet ? "0.75rem" : "1.4rem", 
          color: '#696969',
          textAlign: 'center',
          mb: 3
        }}
      >
        {children}
      </Typography>
    </>
  );

export default Section;