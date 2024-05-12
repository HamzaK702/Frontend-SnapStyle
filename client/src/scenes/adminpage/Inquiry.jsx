import React, { useState, useEffect } from 'react';
import {
  Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Card, Box, Modal, Button, TextField
} from '@mui/material';

const InquiryTable = () => {
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState('');

  useEffect(() => {
    // Fetching inquiry data
    const fetchInquiries = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/inquiry/getAll`);
        const data = await response.json();
        setInquiries(data);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    };

    fetchInquiries();
  }, []);

  const handleViewDetails = (inquiry) => {
    setSelectedInquiry(inquiry);
    setModalOpen(true);
  };

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  const handleRespondDetails = (inquiry) => {
    setSelectedInquiry(inquiry);
    setEmailModalOpen(true);
  };
  

  const sendResponseMail = async (inquiryId, responseMessage) => {
    console.log(inquiryId);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/inquiry/respond`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inquiryId: inquiryId, // Ensure this matches the expected field name in your API
          responseMessage: responseMessage, // Same here, match the field name expected by the API
        }),
      });
      const data = await response.json();
      setTextFieldValue("")
      // Close the modal or any UI element indicating the operation is being processed
      setEmailModalOpen(false);
    } catch (error) {
      console.error('Error sending response mail:', error);
    }
  };
  

  return (
    <>
      <TableContainer component={Card}>
        <Table aria-label="inquiry table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Tracking Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow key={inquiry._id}>
                <TableCell>{inquiry.name}</TableCell>
                <TableCell>{inquiry.tracking}</TableCell>
                <TableCell>{inquiry.email}</TableCell>
                <TableCell>{inquiry.phone}</TableCell>
                <TableCell>{inquiry.country}</TableCell>
                <TableCell>{inquiry.message}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    onClick={() => handleViewDetails(inquiry)}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        color: '#528aae',
                        textTransform: 'none',
                        my:1,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',   
                        '&:hover': {
                          backgroundColor: "white",  
                          boxShadow: '0 0 5px  #528aae',  
                        },
                      }}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="contained" 
                    onClick={() => handleRespondDetails(inquiry._id)}
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        color: '#528aae',
                        textTransform: 'none',
                        width:"100%", 
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',   
                        '&:hover': {
                          backgroundColor: "white",  
                          boxShadow: '0 0 5px  #528aae',  
                        },
                      }}
                  >
                    Respond
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="inquiry-details-modal-title"
        aria-describedby="inquiry-details-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          {selectedInquiry && (
            <Box>
              <Typography id="inquiry-details-modal-title" variant="h6" component="h2">
                Inquiry Details
              </Typography>
              <Typography variant="subtitle1"><b>Name:</b> {selectedInquiry.name}</Typography>
              <Typography variant="subtitle1"><b>Tracking Number:</b> {selectedInquiry.tracking}</Typography>
              <Typography variant="subtitle1"><b>Email:</b> {selectedInquiry.email}</Typography>
              <Typography variant="subtitle1"><b>Phone:</b> {selectedInquiry.phone}</Typography>
              <Typography variant="subtitle1"><b>Country:</b> {selectedInquiry.country}</Typography>
              <Typography variant="subtitle1"><b>Message:</b> {selectedInquiry.message}</Typography>
            </Box>
          )}
        </Box>
      </Modal>

      <Modal
        open={emailModalOpen}
        onClose={() => setEmailModalOpen(false)}
        aria-labelledby="inquiry-details-modal-title"
        aria-describedby="inquiry-details-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          {selectedInquiry && (
            <Box>
              <Typography id="inquiry-details-modal-title" variant="h6" component="h2">
                Respond to Inquiry
              </Typography>
              <TextField
                id="response"
                type="text"
                fullWidth
                variant="outlined"
                placeholder='Respond to inquiry'
                value={textFieldValue}
                onChange={handleTextFieldChange}
                multiline
                minRows={5}
                sx={{
                    my:1,
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 5px #528aae',
                      '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                    },
                    },
                  }}
              />
              <Button 
                    variant="contained" 
                    onClick={() => sendResponseMail(selectedInquiry, textFieldValue)}
                    sx={{
                        my:1,
                        backgroundColor: "white",
                        borderRadius: "10px",
                        color: '#528aae',
                        textTransform: 'none',
                        width:"100%", 
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',   
                        '&:hover': {
                          backgroundColor: "white",  
                          boxShadow: '0 0 5px  #528aae',  
                        },
                      }}
                  >
                    Respond
                  </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default InquiryTable;
