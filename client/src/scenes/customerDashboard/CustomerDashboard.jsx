import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import {useSelector} from "react-redux";
import OrderDetailsCard from '../../components/OrderDetailCard';
import OrdersDisplay from './OrdersDisplay';


const CustomerDashboard = () => {
  const orders = useSelector((state) => state.auth.orders);
  // If you have any state or effects, they would be defined here
  console.log("orders from the statemanagement are as follows:" + orders)
  return (
    <Box sx={{ flexGrow: 1 }}>
       <Box sx={{ flexGrow: 1, textAlign: 'center', mb:5 }}>
      <Typography variant='h2' sx={{ fontWeight: 600, color: '#2f3135', textAlign:"center" }} gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Welcome back to your account, here you can find all your current and previous orders,
        view tracking information and print the important documents to go with your orders.
      </Typography>
    </Box>
      
      {/* Content for Current Orders */}
      <OrdersDisplay orders={orders} />
        
        {/* Content for Current Orders */}
      {/* {orders.map((orderId, index) => (
        <OrderDetailsCard key={index} orderId={orderId} />
      ))} */}
      
      {/* If there are no previous orders, display a message */}
      {/* {orders.length === 0 && (
        <>
        <Typography variant="h6" gutterBottom>
         Current Orders
          </Typography>
          <Typography variant="body1">
            You have no active orders
          </Typography>
      </>
      )} */}
      
      {/* Placeholders for other components */}
      {/* {otherComponentsHere} */}
    </Box>
  );
};

export default CustomerDashboard;
