 
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomizedSteppers from './Stepper.js'; // Adjust the import path as necessary
import ItemForm from './AddItem.js';
import { Container, Box, useTheme, useMediaQuery } from '@mui/material';
import Cart from './Cart.js';
import Custom from './Custom.js';
import AddressForm from './AddAddress.js';
import { useDispatch, useSelector } from "react-redux";
import { setCount } from '../../state';
import DestinationAddressForm from './DestinationAddress.js';
import AddressReviewPage from './ReviewAddress.js'
import CollectionDate from './CollectionDate.js'
import ConfirmOrder from './ConfirmOrder.js'
import Lottie from 'react-lottie';
import OriginAddressPage from '../../components/OriginAddress.jsx';
import DestinationAddressPage from '../../components/DestinationAddress.jsx';
import Footer from '../footer/index.jsx';
import AdditionalWeight from './AdditionalWeightPopUp.jsx'
import LoginCustomer from '../loginpageCustomer/LoginCustomer';
 

function Order() {
  const [isPaused, setIsPaused] = useState(true);
  const count = useSelector((state) => state.auth.count);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const defaultOptions = {
    loop: false,
    autoplay: false, // Set to false to manually control playback via isPaused
    // animationData: require('./Speedy 8.json'),
    animationData: require('./data.json'),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    console.log("from the useEffect: "+count);
    setIsPaused(false); // Resume the animation
    if(count===0){
      setTimeout(() => {
       setIsPaused(true); // Pause the animation after 300ms
     }, 50);
   }
    if(count===1){
     setTimeout(() => {
      setIsPaused(true); // Pause the animation after 300ms
    }, 480);
  }
  else if(count===2){
      setTimeout(() => {
      setIsPaused(true); // Pause the animation after 300ms
    }, 460);
  }
  else if(count===3){
    setTimeout(() => {
      setIsPaused(true); // Pause the animation after 300ms
    }, 450);
  }
  else dispatch(setCount({count: 0}));
  }, [count]); 


  const user = useSelector((state) => state.auth.user);
  

  
  return (
    <>
      <Container sx={{ px: "0.5rem", marginTop:  "5vh" }}>
        <Lottie options={defaultOptions} width="100%" isPaused={isPaused} />
        <CustomizedSteppers count={count} />
      </Container>

      <Container>
        <Box display="flex" flexDirection={isMobileOrTablet ? 'column-reverse' : 'row'} justifyContent="space-between"   my={ isMobileOrTablet? "5vh": "10vh"}>
          {/* Dynamic Section */}
          <Box flex={1} mb={isMobileOrTablet ? '300px' : '0'}>
            <Routes>
              <Route path="/" element={<>
              <ItemForm />
              {/* <AdditionalWeight/> */}
              <Custom />
              </>} />
              <Route path="/address" element={<OriginAddressPage />} />
              <Route path="/address/destinationAddress" element={<DestinationAddressPage />} />
              <Route path="/reviewAddress" element={<AddressReviewPage />} />
              <Route path="/collectionDate" element={<CollectionDate />} />
              <Route path="/payment" element={
                <>
                {!user ? (
                  <>
                  <Box
                  sx={{
                    position: 'fixed', // or 'absolute' if you don't need the component to stay in view while scrolling
                    top: 0,
                    left: 0,
                    zIndex: 10,
                    display: 'flex',
                    justifyContent: 'center', // Centers horizontally in the container
                    alignItems: 'center', // Centers vertically in the container
                    height: '100vh', // Takes the full height of the viewport
                    width: '100vw',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Takes the full width of the viewport
                  }}
                >
                  <LoginCustomer />
                  </Box>
                  <ConfirmOrder />
                  </>
                ) : (<ConfirmOrder />) }
               
              
              </>
              }
              />
              {/* Add more routes as needed */}
            </Routes>
             
          </Box>
        
          {/* Persistent Cart Component */}
          <Cart />
           
        </Box>
      </Container>
    </>
  );
}

export default Order;
