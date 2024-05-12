import React, { useState } from 'react';
import {  Box, Typography, } from '@mui/material';
import AddressCard from '../../components/AddressBookCard';
import {useSelector} from "react-redux";

const AddressBook = () => {
    const user = useSelector((state) => state.auth.user);
    console.log("User id from the use state"+user._id);
    return (
         

        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ flexGrow: 1, textAlign: 'center', mb:5 }}>
                <Typography variant='h2' sx={{ fontWeight: 600, color: '#2f3135', textAlign:"center" }} gutterBottom>
                    Address Book
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    A list of your previously used addresses. You can delete any that you do not think you will use again.
                </Typography>
            </Box>

            {user.addressBook.map((address, index) => (
                    <AddressCard key={index} address={address}  id={user._id}/>
                ))}

            {user.addressBook.length === 0 && (
                <Typography variant="body1" gutterBottom>
                You have no previous addresses.
                </Typography>
            )}

            {/* <AddressCard/> */}
        </Box>
      
      );
}

export default AddressBook;