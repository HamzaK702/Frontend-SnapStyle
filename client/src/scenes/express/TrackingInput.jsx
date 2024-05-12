import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, FormControl, TextField, InputAdornment, Button, Typography } from '@mui/material';
import TrackingTable from '../trackingpage/TrackingTable'; // Adjust the import path as needed
import ShipmentDetails from '../../components/ShipmentDetails';
const TrackingInput = () => {
  const { consignmentNo: consignmentNoParam } = useParams();
  const [consignmentNo, setConsignmentNo] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState('');
  const [shipment, setShipment] = useState(null);

  useEffect(() => {
    // Initialize consignmentNo state with URL parameter if available
    if (consignmentNoParam) {
      setConsignmentNo(consignmentNoParam);
      fetchTrackingInfo(consignmentNoParam); // Automatically fetch tracking info if consignmentNo is from URL
    }
  }, [consignmentNoParam]);

  const fetchTrackingInfo = async (consignmentNo) => {
    try {
      const response = await fetch(`https://connect.tcscourier.com/tracking/api/Tracking/GetDynamicTrackDetail?consignee=${consignmentNo}`, {
        method: 'GET',
        headers: {
          'Accept': '*/*',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRpZCI6IjIxNTYwOTQxMyIsInNlcnZpY2VzIjoiMTAzIiwiaXNzIjoiY29ubmVjdC50Y3Njb3VyaWVyLmNvbSIsImp0aSI6IjM3Njk1NDU2LTdhZjYtNDBkOC1iMzM5LTYxNjQ4N2ZlNmUxYiIsIm5iZiI6MTY4NTA5NTY5OCwiZXhwIjoxNzcxNDk5Mjk4LCJpYXQiOjE2ODUwOTU2OTh9.RBlI_RrNx6vdXjk_sLAMVlo2uuT8E5IXLt26RW5t1P0' // Replace with your actual token
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setShipment(data.shipmentinfo[0]);
      setTrackingInfo(data.checkpoints); // Store checkpoints in state
      setError('');
    } catch (err) {
      console.error('Error fetching tracking data:', err);
      setTrackingInfo(null);
      setError('Failed to fetch tracking data. Please try again later.');
    }
  };

  const handleTrack = () => {
    fetchTrackingInfo(consignmentNo);
  };

  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '5vh' }}>
        <FormControl
          sx={{
            maxWidth: '50%',
            borderRadius: "10px",
            width: '100%',
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 0 5px #ec1c24',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            },
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter Consignment Number"
            value={consignmentNo}
            onChange={(e) => setConsignmentNo(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      textTransform: 'none',
                      fontSize: '1rem',
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        color:"white",
                        backgroundColor: "#ec1c24",
                        boxShadow: '0 0 5px #ec1c24',
                      
                    }}
                    onClick={handleTrack}
                  >
                    Track
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Box>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {trackingInfo && (
        <>
         <Typography variant='h1' sx={{marginY:"5vh", textAlign:"center"}}> Tracking Information </Typography>
         {shipment ? (
        <ShipmentDetails shipment={shipment} />
      ) : (
        <p>Loading shipment details...</p>
      )}
         <Typography variant='h1' sx={{mb: "2vh", textAlign:"center"}}> Track History </Typography>
        <TrackingTable checkpoints={trackingInfo} />
      </>
      )}
    </>
  );
};

export default TrackingInput;
