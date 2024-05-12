import React, { useState, useEffect  } from 'react';
import { Container, TextField, InputAdornment, InputLabel, MenuItem, Select, FormControl, Switch, Box, Typography, Autocomplete, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { setOriginAddress, setHitOriginAddressApi } from '../state';
import { setDestinationAddress, setHitDestinationApi } from '../state';
function AddressForm({ formTitle, apiUrl, onSuccessNavigateTo, country, dispatchAction, heading }) {
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
    const [cities, setCities] = useState([]);
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const id = useSelector((state) => state.auth.id);
    const [phoneISOs, setPhoneISOs] = useState([]);
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const [entries, setEntries] = useState([]);  // Holds the entries from the API
    const [selectedEntry, setSelectedEntry] = useState('');  // Holds the selected entry from the dropdown
    const addAddress = useSelector((state) => state.auth.hitOriginApi);
    const addDestinationAddress = useSelector((state) => state.auth.hitDestinationApi);
    const [errors, setErrors] = useState({
      fullName: '',
      email:'',
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
    const validatePostCode = (postCode, country) => {
      // If country is Pakistan, post code is not required
      if (country === "Pakistan") return true;
      // Otherwise, validate normally
      return postCode.trim() !== '';
    };
    const validatePhoneISO = (phoneISO) => phoneISO.trim() !== '';
    const validateAddressLine1 = (address) => address.trim() !== '';
    const validateCity = (city) => city.trim() !== '';
    const validateEmail = (city) => city.trim() !== '';
  
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;
        tempErrors.email = validateEmail(email) ? '' : 'Email is required';
        tempErrors.fullName = validateFullName(fullName) ? '' : 'Full name is required';
        tempErrors.phoneISO = validatePhoneISO(phoneISO) ? '' : 'Valid country code is required';
        tempErrors.phone = validatePhone(phone) ? '' : 'Valid phone number is required';
        tempErrors.postCode = validatePostCode(postCode, country) ? '' : 'Post code is required';
        tempErrors.addressLine1 = validateAddressLine1(addressLine1) ? '' : 'Address line 1 is required';
        tempErrors.city = validateCity(city) ? '' : 'City is required';
        
    
        setErrors({ ...tempErrors });
        isValid = Object.keys(tempErrors).every((k) => !tempErrors[k]);
    
        return isValid;
      };
     
      useEffect(() => {
        fetchPhoneISOs();
        fetchCities();
      }, []);

    useEffect(() => {
      if (country === "United Kingdom" && postCode) {
          const fetchAddress = async () => {
              try {
                  const apiURL = `https://ws1.postcodesoftware.co.uk/lookup.asmx/getAddress?account=2875&password=ctl74pai&postcode=${encodeURIComponent(postCode)}&api_key=WsFh-kMOz-aNLu-biyD`;
                  const response = await fetch(apiURL);
                  if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`);
                  }
                  const xmlData = await response.text();  // Get the response as text
                  const parser = new DOMParser();
                  const xmlDoc = parser.parseFromString(xmlData, "application/xml");
  
                  // Extract data using DOM methods
                  const address1 = xmlDoc.getElementsByTagName('Address1')[0].textContent;
                  const town = xmlDoc.getElementsByTagName('Town')[0].textContent;
                  const county = xmlDoc.getElementsByTagName('County')[0].textContent;
                  const postcode = xmlDoc.getElementsByTagName('Postcode')[0].textContent;
                  const premiseData = xmlDoc.getElementsByTagName('PremiseData')[0].textContent;
                  let selectedCity = county; // Default to county

                  if (!cities.includes(county)) {
                      selectedCity = town; // If county is not in the cities array, fall back to town
                  }
          
                  setCity(selectedCity);
                  const entriesArray = convertStringToArray(premiseData, address1);
                  setEntries(entriesArray);
                  console.log("Formatted Entries:", entriesArray);

                  console.log('Fetched address data:', { address1, town, county, postcode, premiseData });
                  // Here you could dispatch Redux actions to update the app state or handle the data directly
              } catch (error) {
                  console.error('Failed to fetch address:', error);
              }
          };
  
          fetchAddress();
      }
  }, [postCode, country]);
   
  function formatEntries(entries, street) {
    return entries.map(entry => {
        // Use a regex to split by '||' or '|' (escaping | because it's special in regex)
        const parts = entry.split(/(?:\|\||\|)/); // Use non-capturing group to avoid capturing delimiters in the results
        const name = parts[0].trim(); // Name part, trimmed to remove any extra whitespace
        const number = parts[1] ? parts[1].trim() : ''; // Number part, check if exists

        // Return the formatted string conditionally including the name only if it exists
        if (name) {
            return `${name}, ${number} ${street}`; // Name, number, and street
        } else {
            return `${number} ${street}`; // Only number and street if name is empty
        }
    });
}
  
  // Using the convertStringToArray to first split and clean the raw premise data
  function convertStringToArray(data, street) {
    let entries = data.split(';');
    entries = entries.filter(entry => entry.trim() !== '').map(entry => entry.trim());
    return formatEntries(entries, street);  // Call formatEntries to further process each entry
  }

    
  // function processPremiseData(premiseData) {
  //   // Remove anything after the semicolon including the semicolon itself
  //   let modifiedData = premiseData.split(';')[0];

  //   // Replace all '|' with ',' to unify as a single delimiter
  //   modifiedData = modifiedData.replace(/\|/g, ', ');

  //   // Now, split the data into parts based on the last comma to separate line1 and line2
  //   let lastIndex = modifiedData.lastIndexOf(',');
  //   let line1 = modifiedData.substring(0, lastIndex);
  //   let line2 = modifiedData.substring(lastIndex + 1);

  //   return { line1, line2 };
  //   }

      const fetchPhoneISOs = async () => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/order/getPhoneISOs`);
          if (!response.ok) throw new Error('Failed to fetch');
          const data = await response.json();
          const matchingISO = data.find(iso => iso.country === country);
          if (matchingISO) {
            setPhoneISO(matchingISO.text); // Assuming 'text' contains the ISO code like '+92' or '+44'
          }
          else {
            setPhoneISO("+44");
          }
          console.log(data);
          setPhoneISOs(data); // Assuming the API returns an array of objects
        } catch (error) {
          console.error('Error fetching phone ISOs:', error);
        }
      };

      const fetchCities = async () => {
        try {
           const response = await fetch(`${process.env.REACT_APP_API_URL}/order/cities`);
           const cityData = await response.json();
           console.log(cityData);
           console.log("Cities of UK gets fetched" + cityData.ukCities);
           if(country==="Pakistan"){
            setCities(cityData.pakistanCities);
           }
           else{
            setCities(cityData.ukCities);
           }
 
         } catch (error) {
           console.error('Failed to fetch data:', error);
         }
       }


      const resetFormData = () => {
        setFullName('');
        setEmail('');
        setReceiveUpdates(false);
        setPhone('');
        setPhoneISO('');
        setPostCode('');
        setAddressLine1('');
        setAddressLine2('');
        setCity('');
        setState('');
        setAddressType('');
      };
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
      
      
  
  
  // handleAddAddress will now use the passed apiUrl prop
  const handleAddAddress = async () => {
    console.log("calling the address api");
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
             
        const response = await fetch(`${process.env.REACT_APP_API_URL}${apiUrl}/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(AddressData),
        });
       
        const data = await response.json();
        
        if (response.ok) {
          dispatchAction(AddressData);
          navigate(onSuccessNavigateTo); 
          console.log('Address added successfully:', data);
          resetFormData()
        } else {
           
          console.error('Failed to add address:', data);
        }
      } catch (error) {
         
        console.error('Error adding address:', error);
      }
  
  
    };
  
    if(addAddress){
        handleAddAddress()
        dispatch(setHitOriginAddressApi({hitOriginApi: false}))
      }

    if(addDestinationAddress){
        handleAddAddress()
        dispatch(setHitDestinationApi({hitDestinationApi: false}));
      }

  // useEffect to check if address should be added would remain the same

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 600, color: '#2f3135'}} gutterBottom>
        {formTitle}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 400, color: '#2f3135'}} gutterBottom>
        {heading}
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1} marginRight={2}>
                {/* <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                Type of Address
                </Typography> */}
                
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
                    sx={{
                      '.MuiOutlinedInput-root': { // Target the root of the input element for hover effect
                        transition: 'box-shadow 0.3s ease-in-out',
                        '&:hover': {
                          boxShadow: '0 0 5px #ec1c24',
                          '.MuiOutlinedInput-notchedOutline': {
                            border: 'none', // This affects the static state; ensure it aligns with your design requirements
                          },
                        },
                        '&.Mui-error:hover': {
                          boxShadow: '0 0 5px red', // Optional: Differentiate the hover effect for error state
                        }
                      },
                    }}
                  />
                </FormControl>
              
      <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
        Email
      </Typography>
      <Box sx={{display:"flex", flexDirection: isMobileOrTablet ? "column" : "row", alignItems:"left", gap:3}}  >
      
        <FormControl fullWidth>
      <TextField
        id="email"
        error={!!errors.email}
        helperText={errors.email}
        value={email}
        onChange={handleEmailChange}
        fullWidth
        placeholder="Email"
        variant="outlined"
        sx={{
          '.MuiOutlinedInput-root': { // Target the root of the input element for hover effect
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 0 5px #ec1c24',
              '.MuiOutlinedInput-notchedOutline': {
                border: 'none', // This affects the static state; ensure it aligns with your design requirements
              },
            },
            '&.Mui-error:hover': {
              boxShadow: '0 0 5px red', // Optional: Differentiate the hover effect for error state
            }
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {!isMobileOrTablet && (
              <>
              Receive Updates
              <Switch
                checked={receiveUpdates}
                onChange={handleReceiveUpdatesChange}
                name="receiveUpdates"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: "#ec1c24",
                     
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: "#ec1c24",
                  },
                }}
              />
              </>
              )} 
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
    {isMobileOrTablet && (
      
              <>
              <Box sx={{mb: 2}}>
               <InputAdornment position="start">
              <Typography>Receive Updates</Typography>
              <Switch
                checked={receiveUpdates}
                onChange={handleReceiveUpdatesChange}
                name="receiveUpdates"
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: "#ec1c24",
                     
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: "#ec1c24",
                  },
                }}
              />
              </InputAdornment>
              </Box>
              </>
               )} 
               
    </Box>

           
              
                </Box>
                 
              
              <Typography variant="h5" sx={{  fontWeight: '400' }}>
                    Phone Number
              </Typography>
              <Box display="flex" flexDirection="row" alignItems="center" gap={2} flex={1} marginRight={0}>
                
  
        <FormControl variant="outlined" sx={{ mr: 0, minWidth: 80}}>
        <InputLabel id="phone-iso-label">Code</InputLabel>
        <Select
          labelId="phone-iso-label"
          id="phoneISO-select"
          defaultValue= "+92"
          value={phoneISO}
          error={!!errors.phone}
          helperText={errors.phone}
          onChange={(e) => setPhoneISO(e.target.value)}
          label="Code"
          sx={{
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 0 5px #ec1c24',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove border on hover
              },
            },
            height: '56px', // Match the TextField height, adjust based on your theme
            marginRight: '-14px', // Adjust based on your needs to make Select flush with TextField
            '& .MuiSelect-select': {
              paddingRight: '30px', // Adjust this value based on the actual width of the dropdown arrow to center the text
            },
            '& fieldset': {
              borderRight: 0, // Remove the right border to merge visually with TextField
            },
            
          }}
          
        >
          {phoneISOs.map((iso) => (
            <MenuItem key={iso.id} value={iso.text}>
             {iso.country} {iso.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
         
            <TextField
              type="number" // Makes the input accept only numbers
              inputMode="numeric"
               placeholder='Phone Number'
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              error={!!errors.phone}
              // helperText={errors.phone}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '0 4px 4px 0', // Adjust to match your theme, makes the left side straight
                  transition: 'box-shadow 0.3s ease-in-out',
                  // Apply normal grey border here
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)', // Default border color
                  },
                  '&:hover': {
                    boxShadow: '0 0 5px #ec1c24',
                    // Override border on hover
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none', // Remove border on hover
                    },
                  },
                  '&.Mui-error': {
                    '&:hover': {
                      boxShadow: '0 0 5px red', // Shadow for error state on hover
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'red', // Keep border color on error state
                    },
                  },
                },
              }}
            />
            
                </Box>

                <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1}>
                <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                    Post Code
                  </Typography>
                  <FormControl 
                  fullWidth
                   
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
                      sx={{
                        '.MuiOutlinedInput-root': { // Target the root of the input element for hover effect
                          transition: 'box-shadow 0.3s ease-in-out',
                          '&:hover': {
                            boxShadow: '0 0 5px #ec1c24',
                            '.MuiOutlinedInput-notchedOutline': {
                              border: 'none', // This affects the static state; ensure it aligns with your design requirements
                            },
                          },
                          '&.Mui-error:hover': {
                            boxShadow: '0 0 5px red', // Optional: Differentiate the hover effect for error state
                          }
                        },
                      }}
                    />
                  </FormControl>
                  <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                    Address Line 1
                  </Typography>
                  <Autocomplete
                      freeSolo  // Allows typing freely in the input, not just selecting from the dropdown
                      id="postCode-autocomplete"
                      disableClearable
                      options={entries}  // The entries array from the API
                      value={addressLine1}  // The current value of the postcode
                      onChange={(event, newValue, reason) => {
                        console.log(event);
                              setAddressLine1(newValue);  // Update Address Line 1 when an item is selected
                      }}
                      onInputChange={(event, newInputValue, reason) => {
                            setAddressLine1(newInputValue);  // Update postCode state as the input changes
                      }}
                      sx={{
                          '.MuiOutlinedInput-root': { // Target the root of the input element for hover effect
                              transition: 'box-shadow 0.3s ease-in-out',
                              '&:hover': {
                                  boxShadow: '0 0 5px #ec1c24',
                                  '.MuiOutlinedInput-notchedOutline': {
                                      border: 'none', // This affects the static state; ensure it aligns with your design requirements
                                  },
                              },
                              '&.Mui-error:hover': {
                                  boxShadow: '0 0 5px red', // Optional: Differentiate the hover effect for error state
                              }
                          },
                      }}
                      renderInput={(params) => (
                          <TextField
                              {...params}
                              margin="normal"
                              variant="outlined"
                              fullWidth
                              placeholder="e.g, Street 1, House no. 123"
                              error={!!errors.addressLine1}
                              helperText={errors.addressLine1}
                              InputProps={{
                                  ...params.InputProps,
                                  type: 'text',
                                  endAdornment: (
                                    <InputAdornment position="end">
                                    <IconButton>
                                        <ArrowDropDownIcon />
                                    </IconButton>
                                </InputAdornment>
                                  ),
                              }}
                          />
                      )}
                  />


                 
                  {/* <FormControl 
                  fullWidth
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
                      sx={{
                        '.MuiOutlinedInput-root': { // Target the root of the input element for hover effect
                          transition: 'box-shadow 0.3s ease-in-out',
                          '&:hover': {
                            boxShadow: '0 0 5px #ec1c24',
                            '.MuiOutlinedInput-notchedOutline': {
                              border: 'none', // This affects the static state; ensure it aligns with your design requirements
                            },
                          },
                          '&.Mui-error:hover': {
                            boxShadow: '0 0 5px red', // Optional: Differentiate the hover effect for error state
                          }
                        },
                      }}
                    />
                  </FormControl> */}
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
                   
                  >
                    <TextField
                      id="addressLine2"
                      value={addressLine2}
                      onChange={handleAddressLine2Change}
                      fullWidth
                      placeholder=""
                      variant="outlined"
                      sx={{
                        '.MuiOutlinedInput-root': { // Target the root of the input element for hover effect
                          transition: 'box-shadow 0.3s ease-in-out',
                          '&:hover': {
                            boxShadow: '0 0 5px #ec1c24',
                            '.MuiOutlinedInput-notchedOutline': {
                              border: 'none', // This affects the static state; ensure it aligns with your design requirements
                            },
                          },
                          '&.Mui-error:hover': {
                            boxShadow: '0 0 5px red', // Optional: Differentiate the hover effect for error state
                          }
                        },
                      }}
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
          boxShadow: '0 0 5px #ec1c24',
          '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        },
      }}
    >
     <Select
      error={!!errors.city}
      helperText={errors.city}
      id="fromCity"
      value={city}
      displayEmpty
      onChange={handleCityChange}
      renderValue={
        city !== '' ? undefined : () => <Typography color="textSecondary">Select city</Typography>
      }
    >
      {cities.map((city) => (
        <MenuItem key={city} value={city}>{city}</MenuItem>
      ))}
    </Select>
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
              
            </>
          )}
      </Box>


    </Container>
  );
}

export default AddressForm;
