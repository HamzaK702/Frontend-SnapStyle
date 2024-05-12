import React, { useState } from 'react';
import { Container, TextField, FormControl, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useDispatch, useSelector} from "react-redux";
import { setCollectionDate, setAddInfo } from '../../state';
 

export default function MaterialUIPicker() {
    const [date, setDate] = useState(null);
    const [additionalInfo, setAdditionalInfo] = useState('');
    const id = useSelector((state) => state.auth.id);
    const dispatch= useDispatch();
    const handleDateChange = (newValue) => {
        const formattedDate = newValue.format('MM-DD-YYYY');
        setDate(formattedDate);
        const databaseFormated = newValue.format('YYYY-MM-DD');
        console.log(formattedDate + "formattted date bein gsent to api");
        dispatch(setCollectionDate({collectionDate: formattedDate}));
        addCollectionDate(databaseFormated);
    };

    const handleInfoChange = (event) => {
      dispatch(setAddInfo({additionalInfo: event.target.value}));
      setAdditionalInfo(event.target.value);
      
    };

    const addCollectionDate = async (date) => {
          
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/order/addCollectionDate/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({collectionDate:date}),
          });
         
          const data = await response.json();
          
          if (response.ok) {
           
            console.log('Date added successfully:', data);
            
          } else {
             
            console.error('Failed to add address:', data);
          }
        } catch (error) {
           
          console.error('Error adding address:', error);
        }
    
    
      };

      




    const disableDates = (date) => {
       
        const today = dayjs();
        const twoDaysAfter = dayjs().add(2, 'day');
        return date.isSame(today, 'day') || date.isBetween(today, twoDaysAfter, 'day', '[]');
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: '5vh' }}>
            <Typography variant="h3" sx={{ fontWeight: 600 }} gutterBottom>
                When should we pick-up your items?
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500 }} gutterBottom>
                Select your collection date
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        id="date-picker"
                        value={date}
                        onChange={handleDateChange}
                        shouldDisableDate={disableDates}
                        renderInput={(params) => <TextField {...params} fullWidth />}
                        disablePast
                    />
                </LocalizationProvider>
            </FormControl>
            <Typography variant="h6" sx={{ fontWeight: 500, marginTop: "5vh" }} gutterBottom>
                Additional Information
            </Typography>
            <FormControl 
              fullWidth
            >
            <TextField
              fullWidth
              multiline
              value={additionalInfo}
              onChange={handleInfoChange}
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
        </Container>
    );
}
