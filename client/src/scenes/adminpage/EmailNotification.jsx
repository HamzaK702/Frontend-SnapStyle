import React, { useState } from 'react';
import { IconButton, TextField,  Box, Typography, Grid, FormControlLabel, Switch } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ApiDocumentation from "./Api"
 
const drawerWidth = 240; // Adjust as necessary

 

// http://18.222.238.170:3001/admin/cron




const EmailNotification = () => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [expandedCourier, setExpanded] = useState(false);


    const handleToggleExpand = () => {
      setExpanded(!expandedCourier);
    };

    // Handle change for hours field
    const handleHoursChange = (event) => {
      setHours(event.target.value);
    };
  
    // Handle change for minutes field
    const handleMinutesChange = (event) => {
      setMinutes(event.target.value);
    };

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
        if (event.target.checked) {
          // Call the startCron function or any other action when the switch is turned on
          startCron();
        } else {
            stopCron();
            setMessage("E-Notifications deactived.") 
        }
      }

    const startCron = async () => {
        const apiURL = `${process.env.REACT_APP_API_URL}/admin/cron`;
    
        // Convert hours and minutes to integers
        const payload = {
          hours: parseInt(hours, 10),
          minutes: parseInt(minutes, 10),
        };
    
        try {
          const response = await fetch(apiURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          //const result = await response.json();
          console.log('Success:', response);
          if(response.ok){
            setMessage("E-Notifications activated.")
          }
          
          // Handle success response
        } catch (error) {
          console.error('Error:', error);
          // Handle error response
        }
      };

      const stopCron = async () => {
        const apiURL = `${process.env.REACT_APP_API_URL}/admin/Stopcron`;  
        try {
          const response = await fetch(apiURL, {
            method: 'GET',
             
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          //const result = await response.json();
          console.log('Success:', response);
          if(response.ok){
            setMessage("E-Notifications deactivated.")
          }
          
          // Handle success response
        } catch (error) {
          console.error('Error:', error);
          // Handle error response
        }
      };



  return (
    <>
    <Grid container direction="column" spacing={2} >
      {/* Typography in its own row */}
      <Grid item>
        <Typography variant='h5' sx={{ marginY: "2vh" }}>
          Email Notification Center
        </Typography>
      </Grid>

      {/* TextFields and Button in another row */}
      <Grid item>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: "10vh" }}>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="hours"
                type="text"
                fullWidth
                variant="outlined"
                placeholder='Hours'
                value={hours}
                onChange={handleHoursChange}
                sx={{
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 0 5px #528aae',
                    '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="minutes"
                type="text"
                fullWidth
                variant="outlined"
                placeholder='Minutes'
                value={minutes}
                onChange={handleMinutesChange}
                sx={{
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 0 5px #528aae',
                    '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                    },
                  },
                }}
              />
            </Grid>
          </Grid>

         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

         <FormControlLabel
      control={
        <Switch
          checked={isChecked}
          onChange={handleChange}
          name="startCronSwitch"
          color="primary" // You can customize the color
        />
      }
      label="Start Cron"
      sx={{
        // Apply styling here if needed
        '.MuiFormControlLabel-label': {
          color: '#528aae', // Customize label color
          fontSize: '1rem', // Customize label font size
        }
      }}
    />
        {/* <Button
          onClick={startCron}
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            color: '#528aae',
            width: "49.5%",
            textTransform: 'none',
            height:"3.55rem",
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: "white",
              boxShadow: '0 0 5px  #528aae',
            },
            fontSize: '1rem',
          }}
        >
          Start Cron
        </Button> */}
        {message && (
          <Typography variant="h5" sx={{ color: '#528aae' }}>
            {message}
          </Typography>
        )}
      </Box>
        </Box>
        <Typography variant='h5' sx={{ marginY: "2vh" }}>
            Api
        </Typography>
        <TextField
                id="api"
                type="text"
                fullWidth
                variant="outlined"
                placeholder='api'
                 value={"https://tcsexpress.co.uk/api/admin/update/:consignmentno/:email"}
                sx={{
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 0 5px #528aae',
                    '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                    },
                  },
                }}
              />
      </Grid>
    </Grid>
     
    
  </>
  );
};

export default EmailNotification;
