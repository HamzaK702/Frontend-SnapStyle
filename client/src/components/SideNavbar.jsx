import React from 'react';
import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function SideNavbar({ scrollToFirstBanner, scrollToSecondBanner, scrollToThirdBanner }) {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                width: 80,
                backgroundColor: 'rgba(255, 255, 255, 0.5)', // transparent background
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                zIndex: 1000,
                borderRadius: '0 10px 10px 0', // rounded right corners
                boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
            }}
        >
            <IconButton onClick={scrollToFirstBanner}>
                <HomeIcon />
            </IconButton>
            <IconButton onClick={scrollToSecondBanner}>
                <PersonIcon />
            </IconButton>
            <IconButton onClick={scrollToThirdBanner}>
                <ShoppingCartIcon />
            </IconButton>
        </Box>
    );
}
