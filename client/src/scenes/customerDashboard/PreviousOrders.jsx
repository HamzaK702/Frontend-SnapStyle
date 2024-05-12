import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import {useSelector} from "react-redux";
import OrderDetailsCard from '../../components/OrderDetailCard';
import OrdersDisplay from './OrdersDisplay'

const PreviousOrders = () => {
  const orders = useSelector((state) => state.auth.orders);
  // If you have any state or effects, they would be defined here
 
  return (
    <Box sx={{ flexGrow: 1 }}>
       <Box sx={{ flexGrow: 1, textAlign: 'center', mb:5 }}>
      <Typography variant='h2' sx={{ fontWeight: 600, color: '#2f3135', textAlign:"center" }} gutterBottom>
         Previous Orders
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
       See all your previous orders here and download receipts. 
      </Typography>
    </Box>
    <OrdersDisplay orders={orders} />
      {/* Content for Current Orders */}
      {/* {user.orders.map((orderId, index) => (
        <OrderDetailsCard key={index} orderId={orderId} />
      ))} */}
      
      {/* If there are no previous orders, display a message */}
      {/* {user.orders.length === 0 && (
        <Typography variant="body1" gutterBottom>
          You have no previous orders.
        </Typography>
      )} */}
       
      
      {/* Placeholders for other components */}
      {/* {otherComponentsHere} */}
    </Box>
  );
};

export default PreviousOrders;
