// import React, { useState } from 'react';
// import { Box, Card, CardContent, TextField, Button, FormControl, Typography } from '@mui/material';
// import { useDispatch } from "react-redux";
// import { setAdminLogin } from "../../state/index";

// function LoginComponent() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch(); 

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const loginData = { email, password };

//     try {
//       const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });
//       const data = await response.json();
//       console.log(data);
//       if(data.token){
//       dispatch(setAdminLogin({adminLogin: true}));
//         }
//       // Handle response here (e.g., store the token, redirect user, etc.)
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         '& > :not(style)': { m: 1 },
//       }}
//     >
//       <Card variant="outlined" sx={{ borderColor: '#b3e5fc', borderWidth: 2 }}>
//         <CardContent>
//           <Box
//             component="form"
//             sx={{
//                 p:3,
//               '& .MuiTextField-root': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//             onSubmit={handleLogin}
//           >
//             <Typography variant='h3' sx={{textAlign:'center', mb: 2}}>Admin Login</Typography>
//             <FormControl 
//             fullWidth 
//             sx={{minWidth: "400px"}} >
//               <TextField
                 
//                 required
//                 id="email"
//                 label="Email"
//                 type="email"
//                 autoComplete="current-email"
//                 variant="outlined"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 sx={{
//                     minWidth: "400px",
//                     transition: 'box-shadow 0.3s ease-in-out',
//                     '&:hover': {
//                       boxShadow: '0 0 5px  #ec1c24',
//                       '& .MuiOutlinedInput-notchedOutline': {
//                       border: 'none',
//                     },
//                     },
//                   }}
//               />
//               <TextField
//                 required
//                 id="password"
//                 label="Password"
//                 type="password"
//                 autoComplete="current-password"
//                 variant="outlined"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 sx={{
//                     minWidth: "400px",
//                     transition: 'box-shadow 0.3s ease-in-out',
//                     '&:hover': {
//                       boxShadow: '0 0 5px  #ec1c24',
//                       '& .MuiOutlinedInput-notchedOutline': {
//                       border: 'none',
//                     },
//                     },
//                   }}
//               />
//                <Button
//                         variant="contained"
//                         type='submit'
//                         sx={{
//                             backgroundColor: "white",
//                             border: '1px solid',
//                             borderRadius: "10px",
//                             color: ' #ec1c24',
//                             textTransform: 'none',
//                             fontSize: '1.25rem', // Bigger text size
//                             mt: 3,
//                             height: '56px', // Increase height
//                             boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
//                             paddingX: '32px', // Horizontal padding
//                             '&:hover': {
//                             backgroundColor: "white", // Maintain the background color on hover
//                             boxShadow: '0 0 5px   #ec1c24', // Custom boxShadow on hover
//                             },
//                         }}
//                         >
//                         Login
//                         </Button>
//             </FormControl>
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

// export default LoginComponent;


import React, { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, FormControl, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { setAdminLogin } from "../../state/index";

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isResetMode, setIsResetMode] = useState(false); // New state for toggle
  const dispatch = useDispatch(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    if(isResetMode){
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/forgetPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if(response.ok){
        setMessage("Reset Password Mail sent")
      }
     
      console.log('Reset password for:', email);
      return;
    }

    const loginData = { email, password };
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      console.log(data);
      if(data.token){
      dispatch(setAdminLogin({adminLogin: true}));
        }
      // Handle response here (e.g., store the token, redirect user, etc.)
    } catch (error) {
      console.error('Login error:', error);
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
                p:3,
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleLogin}
          >
            <Typography variant='h3' sx={{textAlign:'center', mb: 2}}>
              {isResetMode ? 'Reset Password' : 'Admin Login'}
            </Typography>
            <FormControl fullWidth sx={{ minWidth: "400px" }}>
              <TextField
                required
                id="email"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              {!isResetMode && (
                <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              )}
              <Button
                variant="contained"
                type='submit'
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
                }}
              >
                {isResetMode ? 'Reset' : 'Login'}
              </Button>
              <Button
                onClick={() => setIsResetMode(!isResetMode)}
                sx={{
                  mt: 2,
                  textDecoration: 'underline'
                }}
              >
                {isResetMode ? 'Back to login' : 'Forgot password?'}
              </Button>
              
                  {isResetMode && message && (
                    <Typography>
                      {message}
                    </Typography> 
                  )}

               
               
            </FormControl>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
              }

export default LoginComponent;

