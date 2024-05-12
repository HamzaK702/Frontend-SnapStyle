import {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'
import { Typography, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addOrders } from '../../state';

function Payment(props) {
  const { stripePromise } = props;
  const [ clientSecret, setClientSecret ] = useState('');
  const id = useSelector((state) => state.auth.id);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${process.env.REACT_APP_API_URL}/create-payment-intent/${id}/${user._id}`)
      .then((res) => res.json())
      .then(({clientSecret}) => setClientSecret(clientSecret));
      console.log("Adding orders...")
      dispatch(addOrders({ orders: [{ id: id }] }));
      console.log(clientSecret, stripePromise)
  }, []);


  return (
    <>
    <Box sx={{ marginY: 2, p:"2rem", border: '1px solid #ccc', borderRadius: 4 }}>
      <Typography variant="h3" sx={{ marginY: 2, textAlign:"center", fontWeight:"650",  color: '#2f3135'}}>Payment</Typography>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret, }}>
          <CheckoutForm />
        </Elements>
      )}
      </Box>
    </>
  );
}

export default Payment;