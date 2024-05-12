

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail'; // Example icon
import OrderTable from './OrderTable'; // Make sure the path is correct for your project structure
import Sidebar from './SideBar'; // Assuming Sidebar is a component you want to render inside the Drawer
import MainContent from './MainContent';
import EmailNotification from './EmailNotification';
import Inquiry from './Inquiry';
import LoginComponent from '../loginpageAdmin';
import {useSelector} from "react-redux";
import ConsentTable from "./ConsentTable";
import ApiDocumentation from "./Api";
import PriceTierForm from "./PriceTier"
import Stats from './Stats';
import CustomerTable from "./CustomerTable";
import AddCollab from './AddCollaborators';


const drawerWidth = 240; // Adjust as necessary

const AdminDashboard = () => {
   const isAdmin = useSelector((state) => state.auth.adminLogin);
   if (!isAdmin) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Centers horizontally
          alignItems: 'center', // Centers vertically
          height: '100vh', // Takes the full height of the viewport
          marginBottom: "10vh",
        }}
      >
        <LoginComponent />
      </Box>
    );
  }

  return (
      <>
      <Box sx={{ display: 'flex', marginBottom: "10vh" }}>
      {isAdmin && (
        <>
        {/* Permanent Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              mt: '15vh', // Offset from the top by 15vh
            },
          }}
          anchor="left"
        >
          <Divider />
          <Sidebar />
        </Drawer>
        
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={(
          <>
          <Box sx={{ display: 'flex', flexDirection:"column", marginBottom: "10vh" }}>
          <Stats/>
          <OrderTable />
          </Box>
          </>
          )} />
          <Route path="/email-notifications" element={
          <>          
            <Box fullWidth sx={{display:"flex", flexDirection:"column"}}>
            <EmailNotification />
            <ApiDocumentation/>
            </Box>
          </>
        } />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/consents" element={<ConsentTable />} />
          <Route path="/shipping-rate" element={<PriceTierForm />} />
          <Route path="/customers" element={<CustomerTable />} />
          <Route path="/collaborators" element={<AddCollab />} />
          
        </Routes>
        </>
        )}
      </Box>
      </>
  );
};

export default AdminDashboard;
