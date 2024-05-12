import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { themeSettings } from './theme'; // import themeSettings and colorTokens
import Homepage from './scenes/homepage';
import Navbar from './scenes/navbar/index';
import RouteForm from './scenes/quotepage/index';
import Order from './scenes/orderpage/index';
import Completion from './scenes/orderpage/Completion';
import AdminDashboard from './scenes/adminpage/index';
import Express from './scenes/express';
import { loadStripe } from '@stripe/stripe-js';
import Footer from './scenes/footer';
import TermsConditon from './scenes/termspage'
import Tracking from './scenes/trackingpage'
import About from './scenes/aboutpage';
import Prohibited from './scenes/prohibitedItemspage';
import ResetPasswordPage from "./scenes/resetpasswordpage"
import ResetPassword from "./scenes/resetPageCustomer"
import Dashboard from "./scenes/customerDashboard"
import Privacy from './scenes/privacyPolicyPage';

const stripePromise = loadStripe('pk_test_51IItWzAxYef59NNffxAN6nBhFsRtalyz3Hm3jSKrYrJQp9rjuFBvMD2op3hTvZWKSaivpjxqcPPKqRRsfLE1kVsy00gvbrP7yu');

const theme = createTheme(themeSettings('light'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Express />} />
          <Route path="/home" element={<Express />} />
          <Route path="*" element={<NavbarWrapper />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

function NavbarWrapper() {
  const location = useLocation();

  // Check if the current route is not Express page
  if (location.pathname !== '/') {
    return (
      <React.Fragment>
        <Navbar />
        <MainContent />
      </React.Fragment>
    );
  }

  return <MainContent />;
}

function MainContent() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '90vh' }}>
      <Routes>
      
        <Route path="/customer/*" element={< Dashboard/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/prohibited-items" element={< Prohibited/>} />
        <Route path="/privacy-policy" element={< Privacy/>} />
        <Route path="/luggage-plus/*" element={<Homepage />} />
        <Route path="/quote" element={<RouteForm />} />
        <Route path="/order/*" element={<Order />} />
        <Route path="/orderSuccess" element={<Completion stripePromise={stripePromise} />} />
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/terms-condition" element={<TermsConditon />} />
        <Route path="/tracking/:consignmentNo" element={<Tracking />} />
        <Route path="/resetCustomer" element={<ResetPassword />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Box>
  );
}

export default App;

