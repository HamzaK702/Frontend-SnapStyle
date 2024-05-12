import React from 'react';
import { Typography, Box, Card, CardContent } from '@mui/material';

const ShipmentDetails = ({ shipment }) => {
  if (!shipment) {
    return <Typography variant="body1">No shipment data available.</Typography>;
  }

  const { bookingdate, consignee, consignmentno, destination, origin } = shipment;

  return (
    <Card variant="outlined" sx={{ maxWidth: 520, margin: 'auto', my: 4, backgroundColor:"#fafafa" }}>
      <CardContent>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          Shipment Booking Details
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="body2">
            <strong>Tracking Number:</strong> {consignmentno || 'N/A'}
          </Typography>
          <Typography variant="body2">
            <strong>Consignee:</strong> {consignee || 'N/A'}
          </Typography>
          <Typography variant="body2">
            <strong>Origin:</strong> {origin || 'N/A'}
          </Typography>
          <Typography variant="body2">
            <strong>Destination:</strong> {destination || 'N/A'}
          </Typography>
          <Typography variant="body2">
            <strong>Booking Date:</strong> {bookingdate || 'N/A'}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ShipmentDetails;
