import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const AddressCard = ({ title, address, type  }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));


  const handleButtonClick = () => {
    if (type === "origin") {
      navigate('../address');
    } else if (type === "destination") {
      navigate('../address/destinationAddress');
    }
  };

  return (
    <Card variant="outlined" style={{ margin: '10px', width: isMobileOrTablet ? '70vw' : '300px', textAlign: 'center', color: '#2f3135' }}>
    <CardContent>
      <Typography variant="h4" sx={{fontWeight:"700", marginBottom:"1rem"}}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{fontWeight:"700"}}>
        {address.fullName}
        </Typography>
        <Typography variant="h5">
        {address.address1}
        </Typography>
        <Typography variant="h5">
        {address.city}
        </Typography>
        <Typography variant="h5">
        {address.postCode}
      </Typography>
      <Button
      variant="text"
      onClick={handleButtonClick}  
      style={{
        marginTop: '10px',
        color: 'black', 
        fontWeight: 'bold', 
        fontSize:"18px" 
      }}
      >
     <span style={{ borderBottom: '2px solid green', color: '#2f3135' }}>Change</span>
    </Button>
    </CardContent>
  </Card>
  
  );
};

const AddressCards = () => {
  const originAddress = useSelector(state => state.auth.originAddress);
  const destinationAddress = useSelector(state => state.auth.destinationAddress);
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: isMobileOrTablet ? 'column' : 'row', // Corrected property to control layout direction
        justifyContent: 'space-between', // This can be adjusted or removed based on your design needs
        gap: isMobileOrTablet ? '1rem' : '0' // Optional: Adds space between items for mobile layout
    }}>
      <AddressCard title="Pick-Up" address={originAddress} type="origin"/>
      <AddressCard title="Delivery" address={destinationAddress} type="destination"/>
    </div>
  );
};

export default AddressCards;
