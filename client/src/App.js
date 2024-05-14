import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { themeSettings } from './theme'; // import themeSettings and colorTokens
import Footer from './scenes/footer';
import AppRoutes from './AppRoutes'; // Adjust the import path to your AppRoutes component
import ExpressNavbar from './scenes/expressNavbar';
const theme = createTheme(themeSettings('light'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ExpressNavbar/>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '90vh' }}>
          <AppRoutes />
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
