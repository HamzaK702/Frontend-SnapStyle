import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ConfirmationBox from './confirmationBox'; 
import Payment from './Payment'
import {
  Box
} from '@mui/material';
 
import {useSelector} from "react-redux";
 
import {loadStripe} from '@stripe/stripe-js';

// Load your Stripe publishable key
// 
 
  
function ConfirmOrder() {
   const user = useSelector((state) => state.auth.user);
   
 

  const stripePromise = loadStripe('pk_test_51IItWzAxYef59NNffxAN6nBhFsRtalyz3Hm3jSKrYrJQp9rjuFBvMD2op3hTvZWKSaivpjxqcPPKqRRsfLE1kVsy00gvbrP7yu');
 

  return (
     
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h3" sx={{fontWeight:"600", color: '#2f3135'}} gutterBottom>
      Confirm your Order
      </Typography>
      <ConfirmationBox />
      {user && (<Payment stripePromise={stripePromise} />)}
      
    </Container>
    
  );
}

export default ConfirmOrder;