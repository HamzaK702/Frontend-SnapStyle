import React from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';

const TermsConditon = () => {
  return (
    <Container maxWidth="lg">
    <Paper elevation={3} sx={{ padding: '1rem', marginTop: '1rem', marginBottom: '1rem' }}>
      <Box>
        <Typography variant="h6" fontWeight="bold">
          Customs Duties and Import Taxes
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          Please be advised that all international shipments may be subject to customs duties, import taxes, and other related charges upon arrival in the destination country. These charges are determined by the customs authority of the destination country and are beyond our control.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          <strong>Customer Responsibility:</strong> As the recipient, you are responsible for all customs duties, import taxes, brokerage fees, and any other charges imposed by your country's customs department. These charges must be paid by you directly to the customs authority or its designated agent in order to clear your shipment and complete delivery.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          We recommend that you contact your local customs office for more information on the customs policies and import taxes applicable to your shipment, as well as to get an estimate of potential charges prior to placing your order. This will help you avoid unexpected fees.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem' }}>
          <strong>Failure to Pay Customs Fees:</strong> Please note that if you refuse to pay the customs duties and taxes, or if the shipment cannot be delivered due to issues related to customs clearance, the shipment may be returned to us or abandoned. If the shipment is returned, we may refund the cost of the merchandise minus shipping charges and any additional fees incurred due to the refusal or inability to pay customs fees. If the shipment is abandoned, you may not be eligible for a refund.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '1rem', fontWeight: 'bold' }}>
          By accepting these terms, you agree to be fully responsible for any customs duties, import taxes, and any other charges imposed by the customs authority of the destination country.
        </Typography>
      </Box>
    </Paper>
    </Container>
  );
};

export default TermsConditon;
