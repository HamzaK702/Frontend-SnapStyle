import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, Box, Modal, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';
import Lottie from 'react-lottie';
import locationAnimation from './location.json'; // Adjust this path to where your Lottie file is stored

const TrackingTable = ({ checkpoints }) => {
  const [selectedCheckpoint, setSelectedCheckpoint] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
    
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: locationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleViewDetails = (checkpoint) => {
    setSelectedCheckpoint(checkpoint);
    setModalOpen(true);
  };

  return (
    <>
    <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
      
      <TableContainer component={Card}>
        <Table aria-label="tracking table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Received By</TableCell>
              <TableCell>Status</TableCell>
               
            </TableRow>
          </TableHead>
          <TableBody>
            {checkpoints.map((checkpoint, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box width={50} height={50}>
                  <Lottie 
                        options={{
                            loop: index === 0, // Loop only for the first row
                            autoplay: true,
                            animationData: locationAnimation,
                            rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice'
                            }
                        }} 
                        height={50} 
                        width={50} 
                        />
                  </Box>
                </TableCell>
                <TableCell>{checkpoint.datetime}</TableCell>
                <TableCell>{checkpoint.recievedby || 'N/A'}</TableCell>
                <TableCell>
                  {checkpoint.status}
                  {checkpoint.status === 'Shipment Delivered' && (
                    <CheckCircleIcon style={{ color: green[500], verticalAlign: 'middle', marginLeft: '5px' }} />
                  )}
                </TableCell>
                 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
      {/* Modal content unchanged */}
    </>
  );
};

export default TrackingTable;
