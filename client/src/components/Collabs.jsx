import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

function Collaborators({ collabs }) {
  return (
    <Box minHeight={"44vh"} sx={{ p: 3 }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 2 }}>
        Collaborators
      </Typography>
      {collabs.map((collab) => (
        <Grid container key={collab._id} spacing={2} sx={{ mb: 1, alignItems: 'center' }}>
          <Grid item xs={12} sm={3}>
            <Typography variant="body1">
              <strong>First Name:</strong> {collab.firstName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="body1">
              <strong>Last Name:</strong>
            </Typography>
            <Typography variant="body1">
              {collab.lastName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Typography variant="body1">
          <strong>Email:</strong>
            </Typography>
            <Typography variant="body1" noWrap>
               {collab.email}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default Collaborators;
