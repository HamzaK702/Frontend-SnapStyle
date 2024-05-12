// import React, { useState } from 'react';
// import { Box, FormControl,  Select, MenuItem, Button, Typography, useTheme, useMediaQuery} from '@mui/material';
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setOrigin, setDestination } from "../../state/index";


// const ShippingForm = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [fromCountry, setFromCountry] = useState('');
//   const [toCountry, setToCountry] = useState('');
 
 
//   const handleFromCountryChange = (event) => {
//     setFromCountry(event.target.value);
//   };

//   const handleToCountryChange = (event) => {
//     setToCountry(event.target.value);
//   };

//   const handleFormSubmit = (event) => {
//     dispatch(
//     setOrigin({origin: fromCountry})
//     )
//     dispatch(
//     setDestination({destination: toCountry})
//     )
//     navigate("/quote");
//   };


//   return (
// <Box
// sx={{
//   width: isMobile ? 300 : 400,
//   paddingTop: '26px',
//   '& .MuiFormControl-root': {
//     marginBottom: '1rem',
//   },
//   '& .MuiOutlinedInput-root': {
//     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//     borderRadius: '12px', // Increased border radius
//   },
//   '& .MuiOutlinedInput-notchedOutline': {
//     border: 'none', // No border for the outlined input
//   },
//   '& .MuiSelect-select': {
//     borderRadius: '12px', // Increased border radius for the select dropdown
//   },
//   '& .MuiButton-root': {
//     marginTop: '1rem', // Additional margin-top for the button
//   },
// }}
// >
// {/* From field */}
// <Box display="flex" alignItems="center" gap={1}>
// <Typography variant="body1" sx={{ minWidth: '2rem', marginRight: '1rem'}}>
//     From:
//   </Typography>
//   <FormControl
//       fullWidth
//       sx={{
//         borderRadius:"10px",
//         transition: 'box-shadow 0.3s ease-in-out',
//         '&:hover': {
//           boxShadow: '0 0 5px #ec1c24',
//         },
//       }}
//     >
//       <Select
//         id="from"
//         value={fromCountry}
//         displayEmpty
//         onChange={handleFromCountryChange}
//         renderValue={
//           fromCountry !== '' ? undefined : () => <Typography color="textSecondary">Select country</Typography>
//         }
//       >
//         <MenuItem value="Pakistan">Pakistan</MenuItem>
//         <MenuItem value="United Kingdom">United Kingdom</MenuItem>
//       </Select>
//     </FormControl>
// </Box>

// {/* To field */}
// <Box display="flex" alignItems="center" gap={1}>
//   <Typography variant="body1" sx={{ minWidth: '2rem', marginRight: '1rem'}}>
//     To:
//   </Typography>
//   <FormControl  
//    fullWidth
//    sx={{
//     borderRadius:"10px",
//      transition: 'box-shadow 0.3s ease-in-out',
//      '&:hover': {
//       boxShadow: '0 0 5px #ec1c24',
//      },
//    }}
//  >
//     <Select
//       id="to"
//       value={toCountry}
//       displayEmpty
//       onChange={handleToCountryChange}
//       renderValue={
//         toCountry !== '' ? undefined : () => <Typography color="textSecondary">Select country</Typography>
//       }
//     >
//       <MenuItem value="United Kingdom">United Kingdom</MenuItem>
//       <MenuItem value="Pakistan">Pakistan</MenuItem>
//     </Select>
//   </FormControl>
// </Box>

// {/* Show Prices button */}
// <Button
//   variant="contained"
//   onClick={handleFormSubmit}
   
//   sx={{
//     marginBottom: isMobile ? '5vh' : 0,
//     backgroundColor: "white",
//     borderRadius: "10px",
//     color: '#2f3135',
//     marginLeft: '3.5rem',
//     textTransform: 'none',
//     fontSize: '1.25rem', // Bigger text size
    
//     width: isMobile ? 250 : 350,
//     height: '56px', // Increase height
//     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
//     paddingX: '32px', // Horizontal padding
//     '&:hover': {
//       backgroundColor: "white", // Maintain the background color on hover
//       boxShadow: '0 0 5px #ec1c24', // Custom boxShadow on hover
//     },
//   }}
// >
//   Get a quote
// </Button>
// </Box>
//   );
// };

// export default ShippingForm;


import React, { useState } from 'react';
import { Box, FormControl, Select, MenuItem, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../../state/index";

const ShippingForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fromCountry, setFromCountry] = useState('United Kingdom');
  const [toCountry, setToCountry] = useState('Pakistan');

  const handleFromCountryChange = (event) => {
    setFromCountry(event.target.value);
  };

  const handleToCountryChange = (event) => {
    setToCountry(event.target.value);
  };

  const handleFormSubmit = (event) => {
    dispatch(setOrigin({ origin: fromCountry }));
    dispatch(setDestination({ destination: toCountry }));
    navigate("/quote");
  };

  return (
    <Box
      sx={{
        width: isMobile ? 300 : 400,
        paddingTop: '26px',
        '& .MuiFormControl-root': {
          marginBottom: '1rem',
        },
        '& .MuiOutlinedInput-root': {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '& .MuiSelect-select': {
          borderRadius: '12px',
        },
        '& .MuiButton-root': {
          marginTop: '1rem',
        },
      }}
    >
      {/* From field */}
      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="body1" sx={{ minWidth: '2rem', marginRight: '1rem'}}>
          From:
        </Typography>
        <FormControl
            fullWidth
            sx={{
              borderRadius: "10px",
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0 0 5px #ec1c24',
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

      {/* To field */}
      <Box display="flex" alignItems="center" gap={1}>
        <Typography variant="body1" sx={{ minWidth: '2rem', marginRight: '1rem'}}>
          To:
        </Typography>
        <FormControl
            fullWidth
            sx={{
              borderRadius: "10px",
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0 0 5px #ec1c24',
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

      {/* Show Prices button */}
      <Button
        variant="contained"
        onClick={handleFormSubmit}
        sx={{
          marginBottom: isMobile ? '5vh' : 0,
          backgroundColor: "white",
          borderRadius: "10px",
          color: '#2f3135',
          marginLeft: '3.5rem',
          textTransform: 'none',
          fontSize: '1.25rem',
          width: isMobile ? 250 : 350,
          height: '56px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          paddingX: '32px',
          '&:hover': {
            backgroundColor: "white",
            boxShadow: '0 0 5px #ec1c24', // Custom boxShadow on hover
          },
          }}
          >
          Get a quote
          </Button>
          </Box>
          );
          };
          
          export default ShippingForm;
