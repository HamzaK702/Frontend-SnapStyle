import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, 
         TableContainer, TableHead, TableRow, Card, Box } from '@mui/material';

const ConsentTable = () => {
  const [consents, setConsents] = useState([]);

  useEffect(() => {
    // Fetch consents from the API
    const fetchConsents = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/show-consent`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setConsents(data);
      } catch (error) {
        console.error("Error fetching consents:", error);
      }
    };

    fetchConsents();
  }, []);

  return (
    <>
    <Box sx={{display:"flex", flexDirection:"column"}}>
    <Typography variant='h3' sx={{ fontWeight:500, position:"sticky", mt:2, display:"flex",  color:"#528aae"}}>GDPR Consent Log</Typography>
    
    <TableContainer component={Card} sx={{mt:"6vh", minWidth:"70vw"}}>
      <Table aria-label="consent table">
        <TableHead>
          <TableRow>
            {/* <TableCell>User ID</TableCell> */}
            <TableCell>Consent</TableCell>
            <TableCell>Timestamp</TableCell>
            {/* <TableCell>Consent Type</TableCell>
            <TableCell>Consent Version</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {consents.map((consent) => (
            <TableRow key={consent._id}>
              {/* <TableCell>{consent.userId}</TableCell> */}
              <TableCell>{consent.consentGiven ? 'Yes' : 'No'}</TableCell>
              <TableCell>{consent.timestamp}</TableCell>
              {/* <TableCell>{consent.consentType}</TableCell>
              <TableCell>{consent.consentVersion}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </>
  );
};

export default ConsentTable;
