import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Card, CardContent, Alert } from '@mui/material';

function ResetPasswordPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    let params = new URLSearchParams(window.location.search);
    let token = params.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        setMessage('');
        if (password !== confirmPassword) {
            setError(true);
            setMessage('Passwords do not match.');
            return;
        }

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/resetPassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, newPassword: password }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage(data.message || 'Password has been reset successfully.');
                navigate('/admin'); // Adjust the navigate path as needed
            } else {
                setError(true);
                setMessage(data.message || 'Failed to reset password.');
            }
        } catch (error) {
            setError(true);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > :not(style)': { m: 1 },
  }}
>
  <Card variant="outlined" sx={{ borderColor: '#ec1c24', borderWidth: 2 }}>
    <CardContent>
      <Box
        component="form"
        sx={{
          display: 'flex', // Ensure the form itself is also flex
          flexDirection: 'column', // Explicitly set the direction to column for the form
          alignItems: 'center', // Align items to center for the form
          p: 3,
          '& .MuiTextField-root': { 
            m: 1, 
            width: '400px', // Set a fixed width for the text fields
          },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h3" sx={{ textAlign: 'center', mb: 2 }}>
          Reset Your Password
        </Typography>
        <TextField
          required
          label="New Password"
          type="password"
          autoComplete="new-password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{
            minWidth: "400px",
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 0 5px  #ec1c24',
              '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            },
          }}
        />
        <TextField
          required
          label="Confirm New Password"
          type="password"
          autoComplete="new-password"
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          sx={{
            minWidth: "400px",
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 0 5px  #ec1c24',
              '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            },
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "white",
            border: '1px solid',
            borderRadius: "10px",
            color: ' #ec1c24',
            textTransform: 'none',
            fontSize: '1.25rem',
            mt: 3,
            height: '56px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            paddingX: '32px',
            '&:hover': {
              backgroundColor: "white",
              boxShadow: '0 0 5px   #ec1c24',
            },
            width: '400px', // Match the width of the text fields
          }}
        >
          Reset Password
        </Button>
        {message && (
          <Alert severity={error ? "error" : "success"} sx={{ mt: 2, width: '400px' }}>
            {message}
          </Alert>
        )}
      </Box>
    </CardContent>
  </Card>
</Box>

    );
}

export default ResetPasswordPage;
