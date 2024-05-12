import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import {useSelector} from "react-redux";
import DeleteAccountCard from '../../components/DeleteAccount';
 

const DeleteAccount = () => {
  const user = useSelector((state) => state.auth.user);
  // If you have any state or effects, they would be defined here
  
  return (
    <Box sx={{ flexGrow: 1, }}>
       <Box sx={{ flexGrow: 1, textAlign: 'center', mb:5 ,
                display: 'flex',
                justifyContent: 'center', // Centers horizontally
                alignItems: 'center', // Centers vertically
                 
                marginTop: "10vh",}}>
      <Typography variant='h2' sx={{ fontWeight: 600, color: '#2f3135', textAlign:"center" }} gutterBottom>
         Deactivate or Delete Your Account
      </Typography>
      
    </Box>
    <Box sx={{ display: 'flex'}}>
     
    <DeleteAccountCard 
        title={"Deactivate Account While Retaining Personal Information"} 
        btnText={"Deactivate"} 
        url={`deactivate/${user._id}`}
    />
     
     
    <DeleteAccountCard 
        title={"Permanently Delete Account and Remove All Personal Information"} 
        btnText={"Delete"}
        url={`delete/${user._id}`}
        />
     
    </Box>
    </Box>
  );
};

export default DeleteAccount;
