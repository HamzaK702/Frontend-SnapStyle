import React, { useState, useEffect  } from 'react';
import { Container, TextField,   MenuItem, Select, FormControl,  Box, Typography, InputAdornment, Switch } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import {  setHitDestinationApi, setDestinationAddress } from '../../state';
import { useNavigate } from "react-router-dom";

function DestinationAddressForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [receiveUpdates, setReceiveUpdates] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneISO, setPhoneISO] = useState('');
  const [postCode, setPostCode] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2 ] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [addressType, setAddressType] = useState('');
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);
  const [phoneISOs, setPhoneISOs] = useState([]);
  const country = useSelector((state) => state.auth.destination);
  const addDestinationAddress = useSelector((state) => state.auth.hitDestinationApi);
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    postCode: '',
    addressLine1: '',
    city: '',
    state: '',
    addressType: '',
    phoneISO: '',
     
  });

  const validateFullName = (name) => name.trim() !== '';
  const validatePhone = (phone) => /^[0-9]+$/.test(phone) && phone.trim() !== '';
  const validatePostCode = (postCode) => postCode.trim() !== '';
  const validateAddressLine1 = (address) => address.trim() !== '';
  const validateCity = (city) => city.trim() !== '';
  const validateEmail = (city) => city.trim() !== '';

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    tempErrors.email = validateEmail(email) ? '' : 'Email is required';
    tempErrors.fullName = validateFullName(fullName) ? '' : 'Full name is required';
    tempErrors.phone = validatePhone(phone) ? '' : 'Valid phone number is required';
    tempErrors.postCode = validatePostCode(postCode) ? '' : 'Post code is required';
    tempErrors.addressLine1 = validateAddressLine1(addressLine1) ? '' : 'Address line 1 is required';
    tempErrors.city = validateCity(city) ? '' : 'City is required';
    // Validate other fields as necessary

    setErrors({ ...tempErrors });

    // Check if any errors exist
    isValid = Object.keys(tempErrors).every((k) => !tempErrors[k]);

    return isValid;
  };

  useEffect(() => {
    const fetchPhoneISOs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/order/getPhoneISOs`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        console.log(data);
        setPhoneISOs(data); // Assuming the API returns an array of objects
      } catch (error) {
        console.error('Error fetching phone ISOs:', error);
      }
    };
  
    fetchPhoneISOs();
  }, []);
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleReceiveUpdatesChange = () => {
    setReceiveUpdates(!receiveUpdates);  
  };


  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleAddressTypeChange = (event) => {
    setAddressType(event.target.value);
  };

 
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  
  const handlePhoneISOChange = (event) => {
    setPhoneISO(event.target.value);
  };
  
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  
  const handlePostCodeChange = (event) => {
    setPostCode(event.target.value);
  };
  
  const handleAddressLine1Change = (event) => {
    setAddressLine1(event.target.value);
  };
  
  const handleAddressLine2Change = (event) => {
    setAddressLine2(event.target.value);
  };
  



  const handleAddAddress = async () => {
    if (!handleValidation()) {
      console.error('Validation failed');
      return;  
    }
     
    const AddressData = {
        type: addressType,  
        fullName: fullName,
        phoneISO: phoneISO,
        phoneNumber: phone,
        postCode: postCode,
        address1: addressLine1,
        address2: addressLine2,
        city: city,
        state: state,
        country: country,
        email: email,
        receiveUpdates: receiveUpdates
         
      };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/order/addDestinationAddress/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(AddressData),
      });
     
      const data = await response.json();
      
    

      if (response.ok) {
        
        dispatch(setDestinationAddress({destinationAddress: AddressData}));
        navigate("/order/reviewAddress"); 
        console.log('Address added successfully:', data);
        
      } else {
         
        console.error('Failed to add address:', data);
      }
    } catch (error) {
       
      console.error('Error adding address:', error);
    }
  };

  if(addDestinationAddress){
    handleAddAddress()
    dispatch(setHitDestinationApi({hitDestinationApi: false}));
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }} gutterBottom>
      Where will we deliver your items?
      </Typography>
      
      {/* Type of address */}
      <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1} marginRight={2}>
                <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                Type of Address
                </Typography>
                
            <FormControl 
            fullWidth
            sx={{
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0 0 5px #528aae',
                '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              },
            }}
            >
                <Select
                  id="type"
                  value={addressType}
                  error={!!errors.addressType}
                  helperText={errors.addressType}
                  displayEmpty
                  onChange={handleAddressTypeChange}
                  renderValue={
                    addressType !== '' ? undefined : () => <Typography color="textSecondary">Please Select</Typography>
                  }
                >
                  <MenuItem value="House">House</MenuItem>
                  <MenuItem value="Appartment">Appartment</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="University Accommodation">University Accommodation</MenuItem>
                  <MenuItem value="Hotel">Hotel</MenuItem>
                  <MenuItem value="Exhibition Centre">Exhibition Centre</MenuItem>

                </Select>
            </FormControl>
            

    
            {addressType && (
            <>
              <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1}>
                <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                Full Name
                </Typography>
                <FormControl 
                fullWidth
                sx={{
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 0 5px #528aae',
                    '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  },
                }}
                >
                  <TextField
                    id="fullName"
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                    value={fullName}
                    onChange={handleFullNameChange}
                    fullWidth
                    placeholder="Name"
                    variant="outlined"
                  />
                </FormControl>
              
      <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
        Email
      </Typography>
                <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
      
                <FormControl 
      sx={{
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 0 5px #528aae',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        },
        flex: 1, // Use flex 1 here to take the remaining space
      }}
    >
      <TextField
        id="email"
        error={!!errors.email}
        helperText={errors.email}
        value={email}
        onChange={handleEmailChange}
        fullWidth
        placeholder="Email"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              Receive Updates
              <Switch
                checked={receiveUpdates}
                onChange={handleReceiveUpdatesChange}
                name="receiveUpdates"
              />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
     
    </Box>

           
              
                </Box>
                 
              
              <Typography variant="h5" sx={{  fontWeight: '400' }}>
                    Phone Number
              </Typography>
              <Box display="flex" flexDirection="row" alignItems="center" gap={3.5} flex={1} marginRight={0}>
                
  
           <FormControl 
           variant="outlined"
           sx={{
            '&:hover': {   
              '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#528aae',
            },
            },
          }}>
            <Select
              id="phoneISO-select"
              value={phoneISO}
              error={!!errors.phoneISO}
              helperText={errors.phoneISO}
              onChange={handlePhoneISOChange}
              style={{ marginRight: '1px', minWidth: 120 }} // Adjust the width as necessary
              renderValue={(selected) => selected.split(' ')[0]}        
            >
              {phoneISOs.map((iso) => (
                <MenuItem key={iso.id} value={iso.text}>
                <Typography component="span" fontWeight="500">
                  {iso.country}
                </Typography>
                {iso.text} {/* You can include flag emojis here if you have them */}
              </MenuItem>
              ))}
            </Select>
            </FormControl>
            <FormControl 
                fullWidth
                sx={{
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 0 5px #528aae',
                    '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  },
                }}
                >
                  <TextField
                    id="phone"
                    value={phone}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    onChange={handlePhoneChange}
                    fullWidth
                    placeholder="Enter phone number"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  </FormControl>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1}>
                <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                    Post Code
                  </Typography>
                  <FormControl 
                  fullWidth
                  sx={{
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 5px #528aae',
                      '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    },
                  }}
                  >
                    <TextField
                      id="postCode"
                      error={!!errors.postCode}
                      helperText={errors.postCode}
                      value={postCode}
                      onChange={handlePostCodeChange}
                      fullWidth
                      placeholder="Post Code"
                      variant="outlined"
                    />
                  </FormControl>
                  <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                    Address Line 1
                  </Typography>
                  <FormControl 
                  fullWidth
                  sx={{
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 5px #528aae',
                      '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    },
                  }}
                  >
                    <TextField
                      id="addressLine1"
                      error={!!errors.addressLine1}
                      helperText={errors.addressLine1}
                      value={addressLine1}
                      onChange={handleAddressLine1Change}
                      fullWidth
                      placeholder="e.g, Street 1, House no. 123"
                      variant="outlined"
                    />
                  </FormControl>
                  <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                    Address Line 2{" "}
                    <Typography 
                      component="span" 
                      variant="h6" 
                      sx={{ 
                        fontWeight: '300', 
                        color: 'grey', 
                        fontSize: '0.8rem' // Adjust the size as needed
                      }}
                    >
                      (optional)
                    </Typography>
                  </Typography>

                  
                  <FormControl 
                  fullWidth
                  sx={{
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 5px #528aae',
                      '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    },
                  }}
                  >
                    <TextField
                      id="addressLine2"
                      value={addressLine2}
                      onChange={handleAddressLine2Change}
                      fullWidth
                      placeholder=""
                      variant="outlined"
                    />
                  </FormControl>

                  <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                    City
                  </Typography>
                  <FormControl 
                  fullWidth
                  sx={{
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 5px #528aae',
                      '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    },
                  }}
                  >
                    <TextField
                      id="city"
                      value={city}
                      error={!!errors.city}
                      helperText={errors.city}
                      onChange={handleCityChange}
                      fullWidth
                      placeholder="City"
                      variant="outlined"
                    />
                  </FormControl>


                   <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                    Country
                  </Typography>
                  <FormControl 
                  fullWidth
                  sx={{
                      '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#528aae',
                    },
                  }}
                  >
                    <TextField
                      id="country"
                      value={country}
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </FormControl>
 


                </Box>

               
              {/* Vertical Stacked Fields */}
              
            </>
          )}
      </Box>
    </Container>
  );
}

export default DestinationAddressForm;
