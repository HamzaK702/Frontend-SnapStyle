import React from 'react';
import { Paper, Typography, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser } from '../state';

const AddressCard = ({ address, id }) => {
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
    const dispatch = useDispatch();

    const handleDelete = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/customer/removeAddress/${id}/${address._id}`, {
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
          console.log('Address deleted successfully:', data);
          alert('Address deleted successfully'); // Or update the UI in a more user-friendly way
        } else {
          // Handle errors or unsuccessful deletion
          console.error('Failed to delete address:', data);
          alert(`Failed to delete address: ${data.message}`); // Or display the error message in the UI
        }
      } catch (error) {
        console.error('Error deleting address:', error);
        alert('Error deleting address'); // Or handle the error in a more user-friendly way
      }
    };

  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        border: '1px solid #ccc',
        borderRadius: '4px',
        minWidth:"200px",
        width: isMobileOrTablet ? '90%' : 'fit-content', // Adjust width as needed
        // margin: 'auto',
        mb:2
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography variant="body1"><strong>{address.fullName}</strong></Typography>
        <Typography variant="body2">{address.address1}</Typography>
        <Typography variant="body2">{address.city}</Typography>
        <Typography variant="body2">{address.postCode}</Typography>
        <Typography variant="body2">{address.country}</Typography>
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
            width:   isMobileOrTablet ? "100%" : "13vw",
            height: '56px', // Increase height
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
            paddingX: '32px', // Horizontal padding
            '&:hover': {
              backgroundColor: "#ec1c24", // Maintain the background color on hover
              boxShadow: '0 0 5px #ec1c24', // Custom boxShadow on hover
            },
          }}
        >
          Delete
        </Button>
      </Box>
    </Paper>
  );
};

export default AddressCard;
