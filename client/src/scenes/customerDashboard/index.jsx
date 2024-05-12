import React from 'react';
import {
  Container,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import LoginCustomer from '../loginpageCustomer/LoginCustomer';
import {useSelector} from "react-redux";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerDashboard from './CustomerDashboard';
import DashboardMenu from './DashboardMenu';
import PersonalInfo from './PersonalInfo';
import AddressBook from './AddressBook';
import PreviousOrders from './PreviousOrders';
import DashboardMenuMobile from './DashboardMenuMobile';
import DeleteAccount from "./DeleteAccount";

function Dashboard() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const user = useSelector((state) => state.auth.user);
 
        if (!user) {
        return (
            <Box
            sx={{
                display: 'flex',
                justifyContent: 'center', // Centers horizontally
                //alignItems: 'center', // Centers vertically
                height: '100vh', // Takes the full height of the viewport
                marginY: "10vh",
            }}
            >
            <LoginCustomer />
            </Box>
        );
        }
  
  return (
    <Container maxWidth="lg" sx={{ mt: 4, display: 'flex' }}>
    {user && (
        <>
      {isMobileOrTablet ? <DashboardMenuMobile/> : <DashboardMenu/> }
      
        
      <Routes>
          <Route path="/" element={<CustomerDashboard/>} />
          <Route path="/personal-info" element={ <PersonalInfo/>} />
          <Route path="/address-book" element={<AddressBook/>} />
          <Route path="/previous-orders" element={<PreviousOrders/>} />
          <Route path="/delete-account" element={<DeleteAccount/>} />
          
        </Routes>
      {/* Main content area */}
        
      </>
       )}
    </Container>
  );
}

export default Dashboard;
