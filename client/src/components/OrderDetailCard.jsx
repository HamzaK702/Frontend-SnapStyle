import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';

const OrderDetailsCard = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const getOrderDetails = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/order/get/${orderId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setOrderDetails(data);
      } catch (error) {
        console.error("Failed to fetch order details:", error);
      }
    };

    getOrderDetails();
  }, [orderId]);

  // Handler functions for button clicks
  const handleDownloadReceipt = () => {
    window.open(`${process.env.REACT_APP_API_URL}/services/getInvoice/Payment_Invoice_${orderId}`);
    console.log('Download receipt clicked11');
    
  };
  

  const handleViewOrder = () => {
    window.open(`${process.env.REACT_APP_API_URL}/services/getInvoice/Invoice_${orderId}`);
    console.log('View order clicked');
    // Implementation for viewing the order
  };

  // Check if order details are available
  if (!orderDetails) {
    return <Typography>No orders found...</Typography>;
  }

  return (



    <Paper sx={{ p: 2, width: isMobileOrTablet ? "90%" : '100%', mb: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Box sx={{ display: 'flex', justifyContent:"space-between", flexDirection:isMobileOrTablet ? "column" : ""}}>

              <Box fullWidth sx={{ display: 'flex', flexDirection: 'column' , gap: 2 }}>
                <Box display="flex" justifyContent="space-between" minWidth="20vw">
                  <Typography variant="subtitle1"><strong>Route</strong></Typography>
                  <Typography variant="body1">{orderDetails.origin} to {orderDetails.destination}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1"><strong>Order Status</strong></Typography>
                  <Typography variant="body1">{orderDetails.orderStatus}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1"><strong>Date Booked</strong></Typography>
                  <Typography variant="body1">{new Date(orderDetails.createdAt).toLocaleDateString()}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1"><strong>Collection</strong></Typography>
                  <Typography variant="body1">{new Date(orderDetails.collectDateFrom).toLocaleDateString()}</Typography>
                </Box>
              </Box>


              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mt: 2 }}>
                <Button 
                onClick={handleDownloadReceipt} 
                variant="contained" 
                sx={{
                  mb:1,
                  backgroundColor: "#ec1c24",
                  border: '1px solid',
                  borderRadius: "10px",
                  color: 'white',
                  textTransform: 'none',
                  fontSize:   isMobileOrTablet ? "1rem" : '1vw', // Bigger text size
                  width:   isMobileOrTablet ? "100%" : "13vw",
                  height: '56px', // Increase height
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
                  paddingX: '32px', // Horizontal padding
                  '&:hover': {
                    backgroundColor: "#ec1c24", // Maintain the background color on hover
                    boxShadow: '0 0 5px #ec1c24', // Custom boxShadow on hover
                  },
                }}
                >
                  Download Receipt
                </Button>
                <Button 
                onClick={handleViewOrder} 
                variant="contained" 
                sx={{
                  backgroundColor: "white",
                  border: '1px solid',
                  borderRadius: "10px",
                  color: ' #ec1c24',
                  textTransform: 'none',
                  fontSize:   isMobileOrTablet ? "1rem" : '1vw', // Bigger text size
                  width:   isMobileOrTablet ? "100%" : "13vw",
                  height: '56px', // Increase height
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
                  paddingX: '32px', // Horizontal padding
                  '&:hover': {
                    backgroundColor: "white", // Maintain the background color on hover
                    boxShadow: '0 0 5px #ec1c24', // Custom boxShadow on hover
                  },
                }}
                >
                  View Order
                </Button>
                </Box>
    </Box>
  </Paper>
  );
};

export default OrderDetailsCard;
