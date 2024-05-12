import React from 'react';
import { Paper, Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, logout } from '../state';
 

const DeleteAccountButton = ({ title, btnText, url }) => {
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const handleDelete = async () => {
        console.log(url);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/customer/${url}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Include any other headers your API requires, such as authorization tokens
          },
        });
  
        const data = await response.json();
        if (response.ok) {
          // dispatch(setUser({ user: data.user }));
          // Handle successful address deletion
          
          console.log('Account deleted/deactivated successfully:', data);
          alert('Account deleted/deactivated successfully'); // Or update the UI in a more user-friendly way
         
        } else {
          // Handle errors or unsuccessful deletion
          console.error('Failed to delete Account:', data);
          alert(`Failed to delete Account: ${data.message}`); // Or display the error message in the UI
        }
      } catch (error) {
        console.error('Error deleting Account:', error);
        alert('Error deleting Account'); // Or handle the error in a more user-friendly way
      }
    };

  

  return (
     
        <Button
          onClick={handleDelete}
          variant="contained"
          
          sx={{
            my:1,
            backgroundColor: "#ec1c24",
            border: '1px solid',
            borderRadius: "10px",
            color: 'white',
            textTransform: 'none',
            fontSize: "1rem",   // Bigger text size
            width:   isMobileOrTablet ? "20%" : "35%",
            height: '5vh', // Increase height
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
            paddingX: '32px', // Horizontal padding
            '&:hover': {
              backgroundColor: "#ec1c24", // Maintain the background color on hover
              boxShadow: '0 0 5px #ec1c24', // Custom boxShadow on hover
            },
          }}
        >
          {btnText}
        </Button>
   
  );
};

export default DeleteAccountButton;
