import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function ImageUpload({ label, onChange, image, icon }) {
  return (
    <Box sx={{ textAlign: 'center', margin: '20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        {icon && <img src={process.env.PUBLIC_URL + icon} alt={`${label} icon`} style={{ height: '30px' }} />}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {label}
        </Typography>
      </Box>
      <Button
        variant="contained"
        component="label"
        color="primary"
      >
        Upload File
        <input
          type="file"
          hidden
          onChange={onChange}
        />
      </Button>
      {image && (
        <Box sx={{ marginTop: '20px' }}>
          <img src={image} alt={label} style={{ maxWidth: '100%', maxHeight: '200px', borderRadius: '8px' }} />
        </Box>
      )}
    </Box>
  );
}
