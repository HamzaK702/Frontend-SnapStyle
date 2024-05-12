import React from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
 

function ConfirmationBox() {


  return (
     
    <Box sx={{ p:"2rem", border: '1px solid #ccc', borderRadius: 4,  color: '#2f3135'}}>
      <Typography variant="h3" sx={{ marginBottom: 2, textAlign:"center", fontWeight:"650",}}>Confirm</Typography>
      <FormGroup >
        <FormControlLabel
          control={<Checkbox sx={{   }} />}
          label={
            <Typography sx={{ marginTop:"0.55rem"  }}>I am sending used personal effects and request TCS to classify my shipment as such. I have read and understood the customs information displayed on the UK page.</Typography>
          }
          sx={{ alignItems: 'start', marginLeft: -2 }}
        />
        <FormControlLabel
          control={<Checkbox sx={{   }} />}
          label={
            <Typography sx={{ marginTop:"0.55rem" }}>I agree to not send aerosols or liquids. I understand if a security x-ray reveals aerosols or liquids my bag will be reported to the FAA and held indefinitely. I will comply with TCS's battery policy. I will secure my bags with a cable tie rather than a lock.</Typography>
          }
          sx={{ alignItems: 'start', marginLeft: -2 }}
        />
        <FormControlLabel
          control={<Checkbox sx={{     }} />}
          label={
            <Typography sx={{  marginTop:"0.55rem" }}>I have read and agree to the TCS terms and conditions.</Typography>
          }
          sx={{ alignItems: 'start' }}
        />
      </FormGroup>
    </Box>
     
  );
}

export default ConfirmationBox;
