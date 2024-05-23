import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Box } from '@mui/material';

function ChooseClothes() {
    const animationContainer = useRef(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: animationContainer.current, // reference to the container
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: process.env.PUBLIC_URL + '/assets/ChooseClothes.json' // animation file path
        });

        return () => animation.destroy(); // cleanup for unmounting
    }, []);

    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
            <div ref={animationContainer} style={{ width: 300, height: 300 }}></div>
        </Box>
    );
}

export default ChooseClothes;
