
import React, { useState } from 'react';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function VideoPlayer() {
  const [play, setPlay] = useState(false);
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md')); 

  const handlePlay = () => {
    setPlay(true);
    const videoElement = document.getElementById('video');
    if (videoElement) {
      videoElement.style.display = 'block'; // Show the video
      videoElement.play(); // Play the video
    }
  };

  return (
    <Box sx={{ position: 'relative', width: isMobileOrTablet ? "100%" : '50%' }}>
      <video
      id="video"
      src="assets/fyp.mp4"
      controls
      width="100%"
      style={{ display:  'block'   }}
      poster='assets/poster.png'
    >
      Your browser does not support the video tag.
    </video>
    </Box>
  );
}



