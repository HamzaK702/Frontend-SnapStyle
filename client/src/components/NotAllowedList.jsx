import React from 'react';
import { Typography } from '@mui/material';

const NotAllowedList = ({ title, children, isMobileOrTablet }) => (
    <>
     <Typography variant="h3" fontWeight={450} textAlign={'left'} gutterBottom sx={{ marginBottom: "3vh", color: '#2f3135' }}>
      {title}
    </Typography>
    {typeof children === 'string' ? (
      <Typography 
        variant="body1" 
        component="p" 
        sx={{
          fontSize: isMobileOrTablet ? "0.75rem" : "1.2rem", 
          color: '#696969',
          textAlign: 'left',
          mb: 3
        }}
      >
        {children}
      </Typography>
    ) : (
      <Typography 
        variant="body1" 
        component="div" // Use div to wrap the list correctly
        sx={{
          fontSize: isMobileOrTablet ? "0.75rem" : "1.2rem", 
          color: '#696969',
          textAlign: 'left',
          mb: 3
        }}
      >
        <ul style={{ paddingLeft: 20 }}> {/* Add padding to align with the rest of the text */}
          {children.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Typography>
    )}
  </>
   
  );

export default NotAllowedList;