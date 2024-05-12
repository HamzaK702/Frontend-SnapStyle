import {
  PaymentElement,
  LinkAuthenticationElement
} from '@stripe/react-stripe-js'
import {useState} from 'react'
import {useStripe, useElements} from '@stripe/react-stripe-js';
import { Button, Box } from '@mui/material';
export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `https://tcsexpress.co.uk/orderSuccess`,
        //https://tcsexpress.co.uk/
        //return_url: `http://localhost:3000/orderSuccess`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }
    console.log(error);
    setIsLoading(false);
    
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement id="link-authentication-element"
        // Access the email value like so:
        // onChange={(event) => {
        //  setEmail(event.value.email);
        // }}
        //
        // Prefill the email field like so:
        // options={{defaultValues: {email: 'foo@bar.com'}}}
        />
      <PaymentElement id="payment-element" />
      <Box sx={{
        marginY: 2,
        display: 'flex', // Make the box a flex container
        justifyContent: 'center', // Center the button horizontally
        alignItems: 'center', // Center the button vertically
        height: '100%', // You might want to adjust this depending on your layout needs
      }}>
        <Button
            id="submit"
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              color: '#2f3135',
              textTransform: 'none',
              fontSize: '1.25rem', // Bigger text size
              width: "230px",
              height: '56px', // Increase height
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
              paddingX: '32px',
              '&:hover': {
                backgroundColor: "white", // Maintain the background color on hover
                boxShadow: '0 0 5px #ec1c24',// Custom boxShadow on hover
              }, // Horizontal padding
            }}
          >
            Pay Now
          </Button>
        </Box>
       
        
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  )
}