import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Box, Typography, Button, useMediaQuery, useTheme, Alert} from '@mui/material';
import { setHitCustomApi, setHitOriginAddressApi, setHitDestinationApi, setCount } from '../../state';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Lottie from 'react-lottie';
import suitcaseAnimation from './suitcaseAnimation.json';


function Cart() {
  const [isCartExpanded, setCartExpanded] = useState(true);
   

  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Automatically collapse the cart on mobile screens
    if (isMobileOrTablet) {
      setCartExpanded(false);
    }
  }, [isMobileOrTablet]);

  const toggleCartDetails = () => {
    setCartExpanded(!isCartExpanded);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: suitcaseAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  function addOrdinalSuffix(date) {
    if (date > 3 && date < 21) return date + 'th';
    switch (date % 10) {
      case 1:  return date + "st";
      case 2:  return date + "nd";
      case 3:  return date + "rd";
      default: return date + "th";
    }
  }
  
  // Function to format date
  function formatDate(dateString) {
    const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateString);
    const day = addOrdinalSuffix(date.getDate());
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  }

  const origin = useSelector((state) => state.auth.origin);
  const destination = useSelector((state) => state.auth.destination);
  const collectionDate = useSelector((state) => state.auth.collectionDate);
  const formattedDate = formatDate(collectionDate);
  const id = useSelector((state) => state.auth.id);
  const items = useSelector((state) => state.auth.items);
  const totalCost = useSelector((state) => state.auth.totalCost);
  const additionalFreeWeight = useSelector((state) => state.auth.additionalFreeWeight);
  const additionalInfo = useSelector((state) => state.auth.additionalInfo);
  const allItemsAdded = useSelector((state) => state.auth.allItemsAdded); 
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const cartShouldStick = windowHeight * 0.55; // Example: 55% of the viewport height

    if (window.scrollY > cartShouldStick) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    if (isMobileOrTablet && isCartExpanded) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileOrTablet, isCartExpanded]);
  
 
const handleContinue = (event) => {
  
  
  const currentPath = location.pathname;  
  console.log(currentPath)
  if (currentPath === "/order/address") {
    console.log("gonna hit the originAddress");
    dispatch(setHitOriginAddressApi({hitOriginApi: true}));
    
  } 
  else if (currentPath === "/order/address/destinationAddress") {
    console.log("gonna hit the destinationAddress");
    dispatch(setHitDestinationApi({hitDestinationApi: true}));
  }
  else if (currentPath === "/order/reviewAddress") {
    console.log("gonna navigate to the collectionDate page");
    navigate("/order/collectionDate");
    dispatch(setCount({ count: 2 }));
  }
  else if (currentPath === "/order/collectionDate") {
  addAdditionalInfo(additionalInfo)
  console.log("gonna head to payment section now");
  navigate("/order/payment")
  dispatch(setCount({ count: 3 }));
  
  }
  
  else if (currentPath === "/order") {
    if (!allItemsAdded) {
        console.log("Please add all your items before continuing.");
        setShowAlert(true);
        // Optionally set a state here to show an error or disable the continue button
        return; // Prevent navigation
    }
    setShowAlert(false);
    console.log("gonna hit the hitCustomApi");
    dispatch(setHitCustomApi({ hitCustomApi: true }));
}
  // Add more conditions as needed
};



useEffect(() => {
  if (allItemsAdded) {
    setShowAlert(false);
  }
}, [allItemsAdded]);

const addAdditionalInfo = async (additionalInfo) => {     
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/order/addInfo/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({additionalInfo: additionalInfo}),
    });
   
    const data = await response.json();
    
    if (response.ok) {
     
      console.log('additionalInfo added successfully:', data);
      
    } else {
       
      console.error('additionalInfo to order:', data);
    }
  } catch (error) {
     
    console.error('Error adding additionalInfo:', error);
  }
};

  
    return (
      <>
      <Container maxWidth="xs" sx={{ flex: 1, position: 'relative' }}>
        <Box
          marginY="3rem"
          sx={{
            position: isMobileOrTablet ? 'fixed' : 'sticky', // Fixed position on mobile
            bottom: isMobileOrTablet ? -50 : 'auto', // Stick to bottom for mobile devices
            top: isMobileOrTablet ? 'auto' : '20px', // Use top for non-mobile devices
            width: '95%', // Ensure it spans the width of the screen on mobile
            maxWidth: '95vw', // Adjust this to fit your design
            left: isMobileOrTablet ? 0 : 'auto', // Center on mobile screens
            right: isMobileOrTablet ? 0 : 'auto', // Center on mobile screens
            marginLeft: isMobileOrTablet ? '-1px' : 'auto',
            marginRight: isMobileOrTablet ? '1px' : 'auto',
            backgroundColor: "#f8fcfe",
            border: '2px solid #ec1c24 ', //'2px solid #EC1C24 ',
            pt: isMobileOrTablet ? 0 : 2,
            pb: 2,
            px: 2,
            paddingBottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Align items to the start (left) for the entire Box
            justifyContent: 'center',
            borderRadius: "10px",
            zIndex: 4,
      
          }}
        >
          {isMobileOrTablet && (
            <>
            
            <Box display="flex" justifyContent="space" alignItems="center" width="100%" sx={{ backgroundColor: isMobileOrTablet ? 'white' : "white", }}>
            <Button
            startIcon={isCartExpanded ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
            onClick={toggleCartDetails}
            sx={{
              width: '100%', // Full width of the parent
              zIndex: 3,
              color: isMobileOrTablet ? "#EC1C24"  : 'white',
              justifyContent: 'center', // Center alignment
              display: 'flex', // Ensures flexbox layout
              textTransform: 'none', // Keeps the text's original case
              fontSize: "1rem"
            }}
          >
             
              {isCartExpanded ? 'Tap to Hide Cart' : 'Tap to Show Cart'}
            
          </Button>
          </Box>
           
          </>
          ) }
           
       
{isCartExpanded &&(
      <>
        {isMobileOrTablet && (
          <Box
            sx={{
              width: 'calc(100% + 32px)', // Compensates for the padding
              height: '1px',
              backgroundColor: '#EC1C24 ',
              marginBottom: '2rem',
              marginLeft: '-16px', // Offset the padding on the left
              marginRight: '-16px', // Offset the padding on the right
            }}
          />
        )}
          
      <Typography variant="h4" marginBottom="1rem" sx={{ fontWeight: "700" }} align="left">
      Your Order
    </Typography>
    <Box
      sx={{
        width: 'calc(100% + 32px)', // Compensates for the padding
        height: '1px',
        backgroundColor: '#EC1C24 ',
        marginBottom: '2rem',
        marginLeft: '-16px', // Offset the padding on the left
        marginRight: '-16px', // Offset the padding on the right
      }}
    />
    <Typography variant="h6"  sx={{ fontWeight: "700" }} align="left">
      Route
    </Typography>
    {origin && destination && (
      <Typography variant="h6"  sx={{ fontWeight: "400" }} align="left">
        {origin} - {destination}
      </Typography>
    )}
    {collectionDate && (
      <>
     <Typography variant="h6"  sx={{ fontWeight: "700" }} align="left">
      Collection Date
        </Typography>
        <Typography variant="h6" marginBottom="1rem" sx={{ fontWeight: "400" }} align="left">
        {formattedDate}
      </Typography>
      </>
    )
    }
    {items.length!==0 && (
      <>
       <Box
       sx={{
         width: 'calc(100% + 32px)', // Compensates for the padding
         height: '1px',
         backgroundColor: '#EC1C24 ',
         marginBottom: '1rem',
         marginLeft: '-16px', // Offset the padding on the left
         marginRight: '-16px', // Offset the padding on the right
       }}
     />
      <Typography variant="h6"  sx={{ fontWeight: "700" }} align="left">
        Items 
      </Typography>
      {items.map((item, index) => (
        <Box key={index} display="flex" justifyContent="space-between" alignItems="center" width="100%" marginBottom="1rem">
          <Typography variant="h6" sx={{ fontWeight: "400" }} align="left">
            {item.type} - {item.description}
          </Typography>
          {/* <Typography variant="h6" sx={{ fontWeight: "400" }} align="left">
            £{item.shipCost}
          </Typography> */}
          
          
        </Box>
        
      ))}

         <Box
      sx={{
        width: 'calc(100% + 32px)', // Compensates for the padding
        height: '1px',
        backgroundColor: '#EC1C24 ',
        marginBottom: '2rem',
        marginLeft: '-16px', // Offset the padding on the left
        marginRight: '-16px', // Offset the padding on the right
      }}
    />
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" marginBottom="1rem">
              <Typography variant="h6"  sx={{ fontWeight: "700" }} align="left">
              Total 
            </Typography>
      
              <Typography variant="h6" sx={{ fontWeight: "400" }} align="left">
                £{totalCost}
                </Typography>
        </Box>

      </>
    )}   

      </>
  )}
   
      <Button
        variant="contained"
        onClick={handleContinue}
        sx={{
         
          height: isMobileOrTablet ? "20px" : "auto",
          width: 'calc(50% + 28px)',
          marginLeft: 'auto', // Offset the padding on the left
          marginRight: 'auto',
          marginBottom: "2px",
          backgroundColor: "white",
          borderRadius: "10px",
          color: isMobileOrTablet ? "white" : '#ec1c24',
          backgroundColor: isMobileOrTablet ? '#EC1C24' : "white",
          textTransform: 'none',
          border: '1px solid',
          borderRadius: "10px",
          py: isMobileOrTablet ? 2 : 0,
          fontSize: isMobileOrTablet ? "1rem" : '1.25rem', // Bigger text size
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
          paddingX: '32px', // Horizontal padding
          '&:hover': {
            backgroundColor: "white", // Maintain the background color on hover
            boxShadow: '0 0 5px  #ec1c24 ', // Custom boxShadow on hover
          },
        }}
        
        >
        Continue
        </Button>
       
   </Box>
   {showAlert && (
            <Alert  severity="error" sx={{ mb: 2, width:'95%' }}>
                Please add all your items before proceeding.
            </Alert>
        )}
</Container>
 
</>
    
    );


  }


  


  
  

  export default Cart;

