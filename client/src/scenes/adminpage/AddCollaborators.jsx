import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, TextField, Button, FormControl, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../../state';
import Collaborators from '../../components/Collabs';

function AddCollab() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [collabs, setCollabs] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `${process.env.REACT_APP_API_URL}/auth/register`;
    const payload = { firstName, lastName, email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(data);
      if (data.token) {
        setMessage("Registration Successful");
        // dispatch(setUser({ user: data.user }));
        // dispatch(setToken({ token: data.token }));
      } else {
        setMessage("Registration Failed");
      }
    } catch (error) {
      console.error(`Register error:`, error);
      setMessage("An error occurred during registration.");
    }
  };

  useEffect(() => {
    // Fetching inquiry data
    const fetchCollabs = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/getAll`);
        const data = await response.json();
        setCollabs(data);
      } catch (error) {
        console.error('Error fetching inquiries:', error);
      }
    };

    fetchCollabs();
  }, []);

  return (
    <>
    <Box sx={{ mt: "5vh", display: 'flex', flexDirection: 'column', justifyContent:"center", alignItems: 'center', '& > :not(style)': { m: 1 } }}>
      <Card variant="outlined" sx={{ borderColor: '#ec1c24', borderWidth: 2 }}>
      <Collaborators collabs={collabs} />
        {/* <Box sx={{display: 'flex', flexDirection: 'column', p: 3, '& .MuiTextField-root': { m: 1, width: '35ch' } }}>
           <Typography variant='h3' sx={{ textAlign: 'center', mb: 2 }}>
              Collaborators
            </Typography>
            {collabs.map((collab) => (
              <Box key={collab._id}>
              <Typography variant='h6' sx={{ textAlign: 'left', mb: 0 }}>
                  <strong>First Name: </strong>{collab.firstName}  <strong>Last Name: </strong> {collab.lastName} 
              </Typography>
              <Typography variant='h6' sx={{ textAlign: 'left', mb: 2 }}>
                  <strong>Email: </strong>{collab.email} 
              </Typography>
              </Box>
            ))}
          </Box> */}
      </Card>
      </Box>
    <Box sx={{mt: "5vh", display: 'flex', flexDirection: 'column', justifyContent:"center", alignItems: 'center', '& > :not(style)': { m: 1 } }}>
      <Card variant="outlined" sx={{ borderColor: '#ec1c24', borderWidth: 2 }}>
        <CardContent>
          <Box component="form" sx={{display: 'flex', flexDirection: 'column', p: 3, '& .MuiTextField-root': { m: 1, width: '35ch' } }} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Typography variant='h3' sx={{ textAlign: 'center', mb: 2 }}>
              Add Collaborator
            </Typography>
            <TextField id="firstName" label="First Name" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth />
            <TextField id="lastName" label="Last Name" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth />
          
            <TextField id="email" label="Email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
            <TextField id="password" label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
            <Button variant="contained" type='submit' sx={{ backgroundColor: "#ec1c24", color: 'white', '&:hover': { backgroundColor: "#b7181f" }, mt: 2, mb: 1 }} fullWidth>
            Add Collaborator
            </Button>
            {message && <Typography color="primary">{message}</Typography>}
          </Box>
        </CardContent>
      </Card>
    </Box>
    </>
  );
}

export default AddCollab;
