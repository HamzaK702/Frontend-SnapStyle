import React, { useState, useEffect } from 'react';
import ScrollToTop from "../../components/ScrollToTop"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, FormControl, Select, TextField, MenuItem, Typography, Container, Button, useTheme, useMediaQuery} from '@mui/material';
import { setOrigin, setDestination, setId, setRoundTrip} from "../../state/index";
import { resetState } from '../../state';

// THIS COMPONENT MAKES THE DUPLICATE REQUESTS 
 

function RouteForm() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const origin = useSelector((state) => state.auth.origin);
  const destination = useSelector((state) => state.auth.destination);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fromCountry, setFromCountry] = useState(origin);
  const [toCountry, setToCountry] = useState(destination);
  const [collectionCity, setCollectionCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [priceData, setPriceData] = useState(null); 
  const [ukCities, setUkCities] = useState([]);
  const [pakistanCities, setPakistanCities] = useState([]);
   const [collectionCities, setCollectionCities] = useState([]);
  const [destinationCities, setDestinationCities] = useState([]);
    
const fetchData = async (origin, destination) => {
  console.log(process.env.REACT_APP_API_URL);
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/order/quote?origin=${origin}&destination=${destination}`);
    const data = await response.json();
    console.log(data);
    setPriceData(data); // Assuming setPriceData is a state setter function from useState
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};



  

  const handleFromCountryChange = (event) => {
    setFromCountry(event.target.value);
  };

  const handleToCountryChange = (event) => {
    setToCountry(event.target.value);
  };

  const handleFromCity = (event) => {
    setCollectionCity(event.target.value);
  };

  const handleToCity = (event) => {
    setDestinationCity(event.target.value);
  };

  // Initial fetch when the component mounts or origin and destination change
useEffect(() => {
  // Check if collectionCity or destinationCity are empty, if so, fetch data
  if (origin && destination && !collectionCity && !destinationCity) {
    fetchData(origin, destination, '', '');
  }
  // This effect runs only once on mount, and anytime origin or destination change
}, [origin, destination]);


useEffect(() => {
    fetchCities();
  
   
}, []);
const fetchCities = async () => {
 try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/order/cities`);
    const cityData = await response.json();
    console.log(cityData);
    console.log("Cities of UK gets fetched" + cityData.ukCities);
    setUkCities(cityData.ukCities);
    setPakistanCities(cityData.pakistanCities);   
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

useEffect(() => {
  console.log("collectionCities changing"+ collectionCities)
  // Update collectionCities based on selectedOrigin
  if (fromCountry === 'United Kingdom') {
    setCollectionCities(ukCities);
  } else if (fromCountry === 'Pakistan') {
    setCollectionCities(pakistanCities);
  }
}, [fromCountry, ukCities, pakistanCities]);

useEffect(() => {
  console.log("setDestinationCities changing")
  // Update destinationCities based on selectedDestination
  if (toCountry === 'United Kingdom') {
    setDestinationCities(ukCities);
  } else if (toCountry === 'Pakistan') {
    setDestinationCities(pakistanCities);
  }
}, [toCountry, ukCities, pakistanCities]);

const handlefetchData = (event) => {
    
  event.preventDefault();
  fetchData()
  
   
};


  const handleBookExpress = (event) => {
    
    event.preventDefault();
  
    // Ensure both origin and destination are defined and not part of an event object
    if (origin && destination) {
      createOrder(origin, destination);
    } else {
      console.error("Origin or destination data is missing");
    }
  };
  
  // Adjusted createOrder function to use correctly passed origin and destination
  const createOrder = async (origin, destination) => {
    dispatch(resetState());
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/order/createOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ origin, destination }),
      });
      const data = await response.json();
      console.log(data);
      //console.log(data.savedOrder.origin);
      dispatch(setOrigin({origin: data.savedOrder.origin}));
      dispatch(setDestination({destination: data.savedOrder.destination}));
      dispatch(setId({id: data.savedOrder._id}));
      dispatch(setRoundTrip({isRoundTrip: data.savedOrder.isRoundTrip}));
      navigate("/order");
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };


  


  return (
    
    <Container maxWidth="md">
      <ScrollToTop />
      <Container maxWidth="xs">
  <Typography variant="h1" style={{ margin: '2rem 0', textAlign: 'center', fontWeight: 'bold', color: '#2f3135'}}>
    Your Route
  </Typography>
  <Typography variant="body1" style={{color: 'grey', textAlign: 'center', marginBottom: '2rem'}}>
    includes 24-hour support, free cover and the confidence of over 100,000 reviews with a 4.8/5 star average
  </Typography>
  </Container>
  {/* Parent Box for side-by-side layout */}
  <Box display="flex" justifyContent="space-between" alignItems="center">
    {/* From Field */}
  
    <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1} marginRight={2}>
      <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
        From:
      </Typography>
    <FormControl
        fullWidth
        sx={{
          minWidth:"125px",
          borderRadius: "10px",
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 5px #ec1c24',
            '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          },
        }}
      >
  <Select
    id="from"
    value={fromCountry}
    displayEmpty
    onChange={handleFromCountryChange}
    renderValue={
      fromCountry !== '' ? undefined : () => <Typography color="textSecondary">Select country</Typography>
    }
  >
    <MenuItem value="Pakistan">Pakistan</MenuItem>
    <MenuItem value="United Kingdom">United Kingdom</MenuItem>
  </Select>
</FormControl>

    </Box>

    {/* To Field */}
    <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1}>
      <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
        To:
      </Typography>
      <FormControl 
      fullWidth
      
      sx={{
        minWidth:"80px",
        borderRadius: "10px",
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 0 5px #ec1c24',
          '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        },
      }}
    >
        <Select
          id="to"
          value={toCountry}
          displayEmpty
          onChange={handleToCountryChange}
          renderValue={
            toCountry !== '' ? undefined : () => <Typography color="textSecondary">Select country</Typography>
          }
        >
            {fromCountry !== "United Kingdom" && <MenuItem value="United Kingdom">United Kingdom</MenuItem>}
            {fromCountry !== "Pakistan" && <MenuItem value="Pakistan">Pakistan</MenuItem>}
        </Select>
      </FormControl>
    </Box>
  </Box>
  {/* Collection Fields */}
  <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={"1rem"}>
    {/* From Field */}
    <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1} marginRight={2}>
      <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
      Collection City 
      </Typography>
      <FormControl 
      fullWidth
      sx={{
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 0 5px #ec1c24',
          '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        },
      }}
    >
     <Select
      id="fromCity"
      value={collectionCity}
      displayEmpty
      onChange={handleFromCity}
      renderValue={
        collectionCity !== '' ? undefined : () => <Typography color="textSecondary">Select city</Typography>
      }
    >
      {collectionCities.map((city) => (
        <MenuItem key={city} value={city}>{city}</MenuItem>
      ))}
    </Select>
    </FormControl>
    </Box>

    {/* To Field */}
    <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1}>
      <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
      Destination City 
      </Typography>
      <FormControl 
      fullWidth
      sx={{
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 0 5px #ec1c24',
          '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        },
      }}
    >
     <Select
      id="toCity"
      value={destinationCity}
      displayEmpty
      onChange={handleToCity}
      renderValue={
        destinationCity !== '' ? undefined : () => <Typography color="textSecondary">Select city</Typography>
      }
    >
      {destinationCities.map((city) => (
        <MenuItem key={city} value={city}>{city}</MenuItem>
      ))}
    </Select>
    </FormControl>
    </Box>
  </Box>
  {!priceData && (
    
  <Box
    marginY="3rem"
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: "10px"
    }}
  >
     <Button
          variant="contained"
          onClick={handlefetchData}
          sx={{
            backgroundColor:"#2DBE60",
            color: 'white',
            textTransform: 'none',
            fontSize: '1.25rem', // Bigger text size
            width: "330px",
            height: '56px', // Increase height
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
            paddingX: '32px', // Horizontal padding
          }}
        >
          Get a quote
        </Button>
          </Box>
  )
  }
  {priceData && (
    <Container maxWidth="xs">
  <Box
     
    marginY="3rem"
   
    sx={{
      backgroundColor: "white",
      border: '2px solid #ec1c24',
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: "10px",
      '&:hover': {
        backgroundColor: "white", // Maintain the background color on hover
        boxShadow: '0 0 5px  #ec1c24', // Custom boxShadow on hover
      },
    }}
  >
    {priceData && (
      <>
        <Typography variant={ isMobile ? "h5" : "h2"} marginBottom="1rem" sx={{fontWeight:"400", color: '#2f3135'}}>Luggage Plus</Typography>
        <Typography variant="h6" marginBottom="3rem" style={{ color: 'grey' }}>
          {priceData.minDelivery}-{priceData.maxDelivery} Working Days
        </Typography>

        {/* This Box will ensure the "Price per item" text is aligned to the right */}
        <Box width="100%" display="flex" justifyContent="flex-end">
          <Typography variant="h6" marginRight={"1rem"} style={{ fontWeight: '300' }}>
            Price per item
          </Typography>
        </Box>
        
        {Array.isArray(priceData.packages) && priceData.packages.map((pkg, index) => (
          pkg && (
            <Box key={index} display="flex" justifyContent="space-between" width="100%" marginBottom="1rem">
              <Typography variant={ isMobile ? "h6" : "h4"} textAlign="left" marginLeft={"1rem"} marginBottom={"1rem"} sx={{fontWeight: '600', color: '#2f3135'}}>
               Upto {pkg.maxWeight} Kg
              
              </Typography>
              {/* <Typography variant="h6" textAlign="left" marginLeft={"1rem"} marginBottom={"1rem"} sx={{color: 'grey'}}>
                 ~{pkg.maxWeight} Kgs
              </Typography> */}
              <Typography variant={ isMobile ? "h6" : "h3"} textAlign="right" marginRight={"1rem"} style={{ fontWeight: '600', color: '#2f3135' }}>
                {pkg.price}
              </Typography>
            </Box>
          )
        ))}
        <Button
          variant="contained"
          onClick={handleBookExpress}
          sx={{
            backgroundColor: "white",
            border: '1px solid',
            borderRadius: "10px",
            color: ' #ec1c24',
            textTransform: 'none',
            fontSize: isMobile ? '1rem' : '1.25rem', // Bigger text size
            width: isMobile ? "70vw" : "330px",
            height: '56px', // Increase height
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
            paddingX: '32px', // Horizontal padding
            '&:hover': {
              backgroundColor: "white", // Maintain the background color on hover
              boxShadow: '0 0 5px #ec1c24', // Custom boxShadow on hover
            },
          }}
        >
          Book Luggage Plus
        </Button>
      </>
    )}
  </Box>
</Container>

      )}
</Container>


  
  );
}

export default RouteForm;
