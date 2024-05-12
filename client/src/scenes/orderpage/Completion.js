import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from "react-redux";
import { resetState } from '../../state';
import { Box, Typography, Container,  useTheme, useMediaQuery } from '@mui/material';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'; 

dayjs.extend(advancedFormat);

function Completion(props) {
  const [messageBody, setMessageBody] = useState('');
 
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { stripePromise } = props;
  const date = useSelector((state) => state.auth.collectionDate);


 
  
  const formattedDate = formatDate(date); 

  function formatDate(date) {
    return dayjs(date).format('Do MMMM YYYY'); // Using dayjs to format the date
  }

  const dispatch = useDispatch();

 


  // Function to call an external API when payment succeeds
  const notifyPaymentSuccess = async (paymentIntent) => {
    
    const apiURL = `${process.env.REACT_APP_API_URL}/paymentSuccess/${paymentIntent.id}`; // Adjusted to use paymentIntent.id
    try {
      const response = await fetch(apiURL, {
        method: 'GET', // Confirming use of GET request
        headers: {
          // 'Content-Type': 'application/json', // Typically not needed for GET, but keeping it does not harm
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log('Success:', result);
      
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  useEffect(() => {
    if (!stripePromise) return;

    stripePromise.then(async (stripe) => {
      const url = new URL(window.location);
      const clientSecret = url.searchParams.get('payment_intent_client_secret');
      const { error, paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

      if (paymentIntent.status === 'succeeded') {
        notifyPaymentSuccess(paymentIntent); // Call the API when payment succeeds
      }

      setMessageBody(error ? `> ${error.message}` : (
        <>&gt; Payment {paymentIntent.status}: <a href={`https://dashboard.stripe.com/test/payments/${paymentIntent.id}`} target="_blank" rel="noreferrer">{paymentIntent.id}</a></>
      ));

    });
  }, [stripePromise]);

 

  return (
    <>
      <Container maxWidth="lg" disableGutters={true} minHeight= '100vh' alignContent={'center'}>  
      <Typography variant={isMobileOrTablet ? "h3" : "h1"} sx={{ fontWeight: '500', textAlign:'center', marginTop:'10vh', color: '#528aae'}}>
       Thank you for booking TCS Luggage Plus!
      </Typography>
      <Box sx={{display:'flex', justifyContent:"center"}}  >
      <img src="/assets/speedy.png" alt="speedy" style={{ height:   "100%" }} />
      </Box>
      {{formattedDate} &&(
        <Typography variant={isMobileOrTablet ? "h3" : "h1"} sx={{ fontWeight: '500', textAlign:'center', color: '#528aae'}}>
        Please be ready. We'll collect your luggage on  {formattedDate}. 
        </Typography>

      )} 
      
      
      </Container>
    </>
  );
}

export default Completion;
