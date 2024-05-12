import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, TextField, Button, Alert, Typography } from '@mui/material';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  
  let params = new URLSearchParams(window.location.search);
  let token = params.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      setShowAlert(true);
      return;
    }
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/customer/resetPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, newPassword: newPassword }),
        });
        const data = await response.json();
        if (response.ok) {
            console.log("Password reset successfully."); // Placeholder for success
            setMessage(data.message || 'Password has been reset successfully.');
            navigate('/customer'); // Adjust the navigate path as needed
        } else {
            
            setMessage(data.message || 'Failed to reset password.');
        }
    } catch (error) {
        
        setMessage('An error occurred. Please try again.');
    }
    // Here, add your API call logic to handle password reset
    

    // Reset fields after submission
    setNewPassword('');
    setConfirmPassword('');
    setMessage("Your password has been reset successfully.");
    setShowAlert(true);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
      <Card variant="outlined" sx={{ borderColor: '#ec1c24', borderWidth: 2 }}>
        <CardContent>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', p: 3, '& .MuiTextField-root': { m: 1, width: '35ch' } }} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Typography variant='h3' sx={{ textAlign: 'center', mb: 2 }}>
              Reset Password
            </Typography>

            <TextField id="newPassword" label="New Password" type="password" variant="outlined" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} fullWidth />
            <TextField id="confirmPassword" label="Confirm New Password" type="password" variant="outlined" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} fullWidth />

            <Button variant="contained" type='submit' sx={{ backgroundColor: "#ec1c24", color: 'white', '&:hover': { backgroundColor: "#b7181f" }, mt: 2, mb: 1 }} fullWidth>
              Reset Password
            </Button>

          </Box>
        </CardContent>
      </Card>
      {showAlert && (
        <Alert severity={message === "Passwords do not match." ? "error" : "success"} sx={{ mb: 2 }}>
          {message}
        </Alert>
      )}
    </Box>
  );
}

export default ResetPassword;
