import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Alert, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setUser, setToken, setOrders } from '../../state';

function LoginCustomer() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState(''); // Added for registration
  const [phone, setPhone] = useState(''); // Added for registration
  const [message, setMessage] = useState('');
  const [mode, setMode] = useState('login'); // 'login', 'register', or 'reset'
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `${process.env.REACT_APP_API_URL}/customer/${mode}`;
    let payload = {};

    switch (mode) {
      case 'login':
        payload = { email, password };
        break;
      case 'register':
        payload = { fullName, email, phone, password };
        break;
      case 'reset':
        payload = { email };
        break;
      default:
        return;
    }

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
        setMessage("Success");
        dispatch(setUser({ user: data.user }));
        dispatch(setToken({ token: data.token }));
        dispatch(setOrders({ orders: data.user.orders }));
      } else if (mode === 'reset' && response.ok) {
        setShowAlert(true);
      }  
    } 
    catch (error) {
      console.error(`${mode} error:`, error);
    }
  };

  const toggleMode = () => {
    setMode(prevMode => {
      if (prevMode === 'login') return 'register';
      return 'login';
    });
    setMessage('');
  };

  const toggleResetMode = () => {
    setMode(prevMode => (prevMode === 'reset' ? 'login' : 'reset'));
    setMessage('');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
      <Card variant="outlined" sx={{ borderColor: '#ec1c24', borderWidth: 2 }}>
        <CardContent>
          <Box component="form" sx={{display: 'flex',  flexDirection: 'column', p: 3, '& .MuiTextField-root': { m: 1, width: '35ch' } }} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Typography variant='h3' sx={{ textAlign: 'center', mb: 2 }}>
              {mode.charAt(0).toUpperCase() + mode.slice(1)} {/* Capitalize the first letter */}
            </Typography>

            {mode === 'register' && (
              <>
                <TextField id="fullName" label="Full Name" variant="outlined" value={fullName} onChange={(e) => setFullName(e.target.value)} fullWidth />
                <TextField id="phone" label="Phone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
              </>
            )}
            <TextField id="email" label="Email" type="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
            {mode !== 'reset' && (
              <TextField id="password" label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
            )}
            <Button variant="contained" type='submit' sx={{ backgroundColor: "#ec1c24", color: 'white', '&:hover': { backgroundColor: "#b7181f" }, mt: 2, mb: 1 }} fullWidth>
              {mode === 'reset' ? 'Send Reset Link' : mode === 'login' ? 'Login' : 'Register'}
            </Button>
            {mode !== 'reset' && (
              <Button onClick={toggleMode} sx={{ textTransform: 'none', justifyContent: 'center' }}>
                {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
              </Button>
            )}
            {mode !== 'register' && (
              <Button onClick={toggleResetMode} sx={{ textTransform: 'none', justifyContent: 'center' }}>
                {mode === 'reset' ? 'Back to login' : 'Forgot password?'}
              </Button>
            )}
            {/* {message && <Typography color="primary">{message}</Typography>} */}

          </Box>
        </CardContent>
      </Card>
      {showAlert && (
            <Alert  severity="success" sx={{ mb: 2}}>
                A link to reset your password has been sent to your email.
            </Alert>
        )}
    </Box>
  );
}

export default LoginCustomer;
