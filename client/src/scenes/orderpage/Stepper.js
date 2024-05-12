import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Items',
  'Addresses',
  'Dates',
  'Payment',
];

export default function CustomizedSteppers(props) {
  const { count } = props;

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={count} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel 
                // Apply custom color styles to StepLabel
                sx={{
                  '& .MuiStepIcon-root': { color: '#f7a4a7' }, // Changes the icon color
                  '& .MuiStepIcon-root.Mui-active': { color: '#f7a4a7' }, // Keeps the icon color when active
                  '& .MuiStepIcon-root.Mui-completed': { color: '#f7a4a7' }, // Keeps the icon color when completed
                  '& .MuiTypography-root': { // Changes the label text color
                    color: 'grey',
                    '&.Mui-active': { color: '#f7a4a7' },
                    '&.Mui-completed': { color: '#f7a4a7' },
                  }
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
}
