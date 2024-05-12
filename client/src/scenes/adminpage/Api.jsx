import React, { useState, useEffect } from 'react';
import { Typography, Box, Paper, Divider } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const ApiDocumentation = () => {
    const [expandedCourier, setExpanded] = useState(false);
    const handleToggleExpand = () => {
        setExpanded(!expandedCourier);
      };

      return (
        <Box sx={{ maxWidth: 800, mx: 'auto', p: 2 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>API Documentation: Update Admin Information</Typography>
            <Typography variant="subtitle1" gutterBottom>Overview</Typography>
            <Typography>This API endpoint is designed for updating admin information in the system. It allows for updating specific details associated with an admin account, identified by a unique consignment number and email address.</Typography>
            
            <Typography variant="subtitle1" gutterBottom>Endpoint</Typography>
            <Typography><strong>HTTP Method:</strong> GET</Typography>
            <Typography><strong>URL:</strong> `/admin/update/:consignmentno/:email`</Typography>
            <Typography><strong>Full URL:</strong> `https://tcsexpress.co.uk/api/admin/update/:consignmentno/:email`</Typography>
            
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="subtitle1" gutterBottom>URL Parameters</Typography>
            <Typography>- <strong>consignmentno</strong> (required): The unique consignment number associated with the admin's account.</Typography>
            <Typography>- <strong>email</strong> (required): The email address of the admin.</Typography>
            
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="subtitle1" gutterBottom>Usage</Typography>
            <Typography>To use this endpoint, a client makes a GET request to the full URL, replacing `:consignmentno` and `:email` with the actual values.</Typography>
            
            <Typography variant="subtitle1" gutterBottom>Example Request</Typography>
            <Typography>GET https://tcsexpress.co.uk/api/admin/update/90981283128/hamzakhan@gmail.com</Typography>
            
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="subtitle1" gutterBottom>Responses</Typography>
            <Typography><strong>Success Response</strong></Typography>
            <Typography>Status Code: <strong>200 OK</strong></Typography>
            <Box component="pre" sx={{ my: 1, bgcolor: '#f0f0f0', p: 1 }}>
              {`{
      "message": "Admin information updated successfully.",
      "data": {
        // Details of the updated admin information
      }
    }`}
            </Box>
            
            <Typography><strong>Error Responses</strong></Typography>
            <Typography>Status Code: <strong>400 Bad Request</strong></Typography>
            <Box component="pre" sx={{ my: 1, bgcolor: '#f0f0f0', p: 1 }}>
              {`{
      "error": "Invalid input data. Please verify the consignment number and email address."
    }`}
            </Box>
            <Typography>Status Code: <strong>404 Not Found</strong></Typography>
            <Box component="pre" sx={{ my: 1, bgcolor: '#f0f0f0', p: 1 }}>
              {`{
      "error": "Admin account not found with the provided consignment number and email."
    }`}
            </Box>
            <Typography>Status Code: <strong>500 Internal Server Error</strong></Typography>
            <Box component="pre" sx={{ my: 1, bgcolor: '#f0f0f0', p: 1 }}>
              {`{
      "error": "An error occurred while updating the admin information. Please try again later."
    }`}
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="subtitle1" gutterBottom>Notes</Typography>
            <Typography>- Ensure that both the consignment number and email address are correct and correspond to an existing admin account in the system.</Typography>
            <Typography>- This API currently uses the GET method for simplicity in demonstration; however, using POST or PUT methods is recommended for actual update operations in a production environment.</Typography>
          </Paper>
        </Box>
      );
    };
export default ApiDocumentation;

    