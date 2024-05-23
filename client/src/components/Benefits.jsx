
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Benefits() {
    return (
        <Box sx={{ 
            backgroundColor: '#f9f9f9', 
            padding: '80px 20px', // Increased padding for bigger size
            textAlign: 'center', 
            fontSize: '1.6rem' // Increased font size
        }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                How Our Solutions Benefit Our Customers
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <Box>
                    <Typography variant="h4" sx={{ color: '#FF033E', fontWeight: 'bold' }}>
                        FREEDOM
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px' }}>
                        To Generate Your Own Clothes
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h4" sx={{ color: '#FF033E', fontWeight: 'bold' }}>
                        MEASURE
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px' }}>
                        Yourself from the comfort of your home
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h4" sx={{ color: '#FF033E', fontWeight: 'bold' }}>
                        TRY ON
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: '10px' }}>
                        Your favorite clothes in an instant
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}