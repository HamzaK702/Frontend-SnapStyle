import React, { useState } from 'react';
import { Typography, Button, FormControl, TextField, Box, Container, useTheme, useMediaQuery } from '@mui/material';

function GetInTouch() {
  const [name, setName] = useState('');
  const [tracking, setTracking] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const greyBackgroundStyle = {
     
    width: '100%',
    paddingTop: '20px',
    paddingBottom: '20px',
  };

 

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTrackingChange = (event) => {
    setTracking(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };


  const handleInquiryForm = async () => {
    const queryData = {
        name: name,  
        tracking: tracking,
        email: email,
        phone: phone,
        country: country,
        message: message
      };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/inquiry/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryData),
      });
     
      const data = await response.json();
      if (response.ok) { 
        console.log('Inquiry sent', data);
        setName('');
        setTracking('');
        setEmail('');
        setPhone('');
        setCountry('');
        setMessage('');
      } 
      else {
         
        console.error('Failed to send inquiry:', data);
      }
    } catch (error) {
       
      console.error('Error sending inquiry:', error);
    }
}

  return (
    <Box style={{ ...greyBackgroundStyle, display: 'flex', justifyContent: 'center', alignItems: 'start', minHeight: '50vh' }}>
    <Container maxWidth="lg" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Box style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            {/* Query and Get in Touch Box */}
            {/* <Box style={halfWidthStyle}> */}
                 
            
                <Typography variant="h6" style={{ fontWeight: 300, color: '#2f3135' , textAlign: 'center'   }}>  {/* Adjust marginBottom as needed */}
                Our team is happy to answer all your queries.  
                </Typography>
                <Typography variant="h6" style={{ fontWeight: 300,   marginBottom:"0vh", color: '#2f3135', textAlign: 'center'   }}>  {/* Adjust marginBottom as needed */}
                Fill out the form and we'll be in touch as soon as possible.
                </Typography>
            {/* </Box>
  */}

          {/* Form Fields Box */}
          <Box display="flex" minWidth="60%" flexDirection="column" alignItems="left" gap={1} flex={1}>
          {/* Name */}
          <Typography variant="h6" fontWeight='400' textAlign={'left'} >
            Name
            </Typography>
            <FormControl 
                fullWidth
                
                sx={{
                  minWidth: isMobileOrTablet ? '80vw' : 0,
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 0 5px #ec1c24',
                    '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  },
                }}
                >
                <TextField
                    
                    id="Name"
                    value={name}
                    onChange={handleNameChange}
                    fullWidth
                    placeholder="Name"
                    variant="outlined"
                    sx={{
                      transition: 'box-shadow 0.3s ease-in-out',
                      width: '100%', // Adjust width to be smaller
                      '& .MuiOutlinedInput-input': {
                        padding: '10px 14px', // Adjust padding to reduce height
                      },
                       
                    }}
                  />
                </FormControl>
                {/* Tracking */}
            <Typography variant="h6" fontWeight='400' textAlign={'left'} >
            Tracking Number
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
                
                  <TextField
                    id="tracking"
                    value={tracking}
                    onChange={handleTrackingChange}
                    fullWidth
                    placeholder="Tracking Number"
                    variant="outlined"
                    sx={{
                      transition: 'box-shadow 0.3s ease-in-out',
                      width: '100%', // Adjust width to be smaller
                      '& .MuiOutlinedInput-input': {
                        padding: '10px 14px', // Adjust padding to reduce height
                      },
                       
                    }}
                  />
                </FormControl>
            {/* Email */}
            <Typography variant="h6" fontWeight='400' textAlign={'left'}  >
                Email
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
                
                  <TextField
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    fullWidth
                    placeholder="Email"
                    variant="outlined"
                    sx={{
                      transition: 'box-shadow 0.3s ease-in-out',
                      width: '100%', // Adjust width to be smaller
                      '& .MuiOutlinedInput-input': {
                        padding: '10px 14px', // Adjust padding to reduce height
                      },
                       
                    }}
                  />
                </FormControl>
            {/* Phone */}
            <Typography variant="h6" fontWeight='400' textAlign={'left'}  >
                Phone Number
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
                
                  <TextField
                    id="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    fullWidth
                    placeholder="Phone Number"
                    variant="outlined"
                    sx={{
                      transition: 'box-shadow 0.3s ease-in-out',
                      width: '100%', // Adjust width to be smaller
                      '& .MuiOutlinedInput-input': {
                        padding: '10px 14px', // Adjust padding to reduce height
                      },
                       
                    }}
                  />
                </FormControl>
             
              
              {/* Country  */}
              <Typography variant="h6" fontWeight='400' textAlign={'left'}  >
                Country
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
                
                  <TextField
                    id="Country"
                    value={country}
                    onChange={handleCountryChange}
                    fullWidth
                    placeholder="Country"
                    variant="outlined"
                    sx={{
                      transition: 'box-shadow 0.3s ease-in-out',
                      width: '100%', // Adjust width to be smaller
                      '& .MuiOutlinedInput-input': {
                        padding: '10px 14px', // Adjust padding to reduce height
                      },
                       
                    }}
                  />
                </FormControl>
            {/* Add more form controls here as needed */}
            <Typography variant="h6" fontWeight='400' textAlign={'left'} >
            Message
            </Typography>
            <FormControl 
              fullWidth
            >
            <TextField
              fullWidth
              multiline
              value={message}
              onChange={handleMessageChange}
              variant="outlined"
              placeholder="Enter any additional information here"
              minRows={5} // This ensures the TextField has a minimum height to fit 5 rows.
              sx={{
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 0 5px #ec1c24',
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                },
              }}
            />
          </FormControl>
          <Button
          variant="contained"
          onClick={handleInquiryForm}
          sx={{
            width:"100%",
            backgroundColor:"#2DBE60",
            color: 'white',
            textTransform: 'none',
            fontSize: '1.25rem', // Bigger text size
            height: '56px', // Increase height
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
            paddingX: '32px', // Horizontal padding
          }}
        >
          Submit
        </Button>
  
          {/* <Button
        variant="contained"
        onClick={handleInquiryForm}                  
        sx={{
        width:"100%",
        backgroundColor: "white",
        borderRadius: "10px",
        color: '#2f3135',
        textTransform: 'none',
        fontSize: '1.25rem', // Bigger text size
        height: '56px', // Increase height
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
        paddingX: '32px', // Horizontal padding
        '&:hover': {
          backgroundColor: "white", // Maintain the background color on hover
          boxShadow: '0 0 5px #ec1c24', // Custom boxShadow on hover
        },
      }}
       
      >
      Submit
      </Button> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default GetInTouch;
