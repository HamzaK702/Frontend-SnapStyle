import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Icon from '@mui/material/Icon';

function ComplexStatisticsCard({ color, title, count, percentage, icon }) {
  return (
    <Card>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
               pt: 3,
          px: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '4rem',
            height: '4rem',
            mt: -3,
            borderRadius: 'xl',
            bgcolor: color, // Assuming direct color values can be applied here
            color: color === 'light' ? 'dark' : 'white', // Adjust the text color based on background
            boxShadow: `0px 0px 2px black`, // This assumes `color` can directly be used for shadows
          }}
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </Box>
        <Box
          sx={{
            textAlign: 'right',
            lineHeight: '1.25',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: '400', color: 'text.primary' }}>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ color: 'text.primary' }}>
            {count}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          pb: 2,
          px: 2,
        }}
      >
        <Typography component="p" variant="button" sx={{ color: 'text.primary', display: 'flex'   }}>
          <Typography
            component="span"
            variant="button"
            sx={{ fontWeight: 'bold', color: percentage.color, mx:1 }}
          >
            {percentage.amount} 
          </Typography>
        {percentage.label}
        </Typography>
      </Box>
    </Card>
  );
}

export default ComplexStatisticsCard;
