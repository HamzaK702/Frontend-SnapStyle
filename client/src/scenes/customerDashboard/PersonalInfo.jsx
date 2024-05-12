import React, { useState, useEffect } from 'react';
import { 
        MenuItem, Select, 
        TextField, Button, 
        Box, Typography, 
        useMediaQuery, useTheme, 
        InputAdornment,
        InputLabel, FormControl,
    } from '@mui/material';
import { AccountCircle, Email, Phone } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const PersonalInfo = () => {
    const user = useSelector((state) => state.auth.user);
        const [fullName, setFullName] = useState(user.fullName || "");
        const [phone, setPhone] = useState(user.phone.slice(3) || "");
        const [phoneISO, setPhoneISO] = useState(user.phone.slice(0, 3) || "");
        const [email, setEmail] = useState(user.email || "");
        const [phoneISOs, setPhoneISOs] = useState([]);
        const theme = useTheme();
        const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  const fetchPhoneISOs = async () => {
    console.log(user._id);
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

  useEffect(() => {
    fetchPhoneISOs();
  }, []);

  // Handler to simulate save changes
  const handleSaveChanges = async () => { 
    const apiUrl = `${process.env.REACT_APP_API_URL}/customer/edit/${user._id}`; // Adjust the URL as per your environment
    
    const payload = {
        fullName,
        phone: `${phoneISO}${phone}`, // Combine the ISO code and phone number
        email,
    };
    
    try {
        const response = await fetch(apiUrl, {
            method: 'POST', // Assuming the request type is PUT for an update operation
            headers: {
                'Content-Type': 'application/json',
                // Include other headers like authorization if needed
            },
            body: JSON.stringify(payload),
        });
        
        const data = await response.json();
        
        if (response.ok) {
            console.log('User info updated:', data);
            alert('Changes saved successfully!');
        } else {
            console.error('Failed to save changes:', data);
            alert('Failed to save changes.');
        }
    } catch (err) {
        console.error('Error:', err);
        alert('An error occurred while saving changes.');
    }
};


  return (
    <Box width="100%"  sx={{  display: 'flex', flexDirection: 'column', gap: 2}}>
        <Typography variant='h2' sx={{ fontWeight: 600, color: '#2f3135', textAlign:"center" }} gutterBottom>
            Personal Info
        </Typography>
        <Typography variant="subtitle1" sx={{textAlign:"center"}} gutterBottom>
                Review and update your personal details here
        </Typography>
    

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: '400' }}>
        Your Full Name
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        sx={{
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            borderRadius: "5px",
            boxShadow: '0 0 5px #ec1c24',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />

      <Typography variant="h5" sx={{ fontWeight: '400'  }}>
        Your Phone number
      </Typography>

            <Box display="flex" flexDirection="row" alignItems="center" gap={2} flex={1} marginRight={0}>
                
  
                <FormControl variant="outlined" sx={{ mr: 0, minWidth: 80}}>
                <InputLabel id="phone-iso-label">Code</InputLabel>
                <Select
                  labelId="phone-iso-label"
                  id="phoneISO-select"
                  defaultValue= "+92"
                  value={phoneISO}
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


      <Typography variant="h5" sx={{ fontWeight: '400'   }}>
        Your E-mail Address
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            borderRadius: "5px",
            boxShadow: '0 0 5px #ec1c24',
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          ),
        }}
      />

      <Button
        variant="contained"
        onClick={handleSaveChanges}
        sx={{
            backgroundColor: "white",
            border: '1px solid',
            borderRadius: "10px",
            color: ' #ec1c24',
            textTransform: 'none',
            fontSize:     '1.25rem', // Bigger text size
            width:  isMobileOrTablet ? "100%" :  "330px",
            height: '56px', // Increase height
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
            paddingX: '32px', // Horizontal padding
            '&:hover': {
              backgroundColor: "white", // Maintain the background color on hover
              boxShadow: '0 0 5px #ec1c24', // Custom boxShadow on hover
            },
          }}
         
      >
        Save Changes
      </Button>
    </Box>
  </Box>
  );
};

export default PersonalInfo;
