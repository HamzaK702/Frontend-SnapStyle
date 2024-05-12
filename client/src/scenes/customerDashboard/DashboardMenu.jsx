import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../../state/index';


const DashboardMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const handleNavigation = (path) => {
    navigate(path);
  };


  const handleLogout = () => {
    dispatch(logout());
    navigate("/customer");
    // Additional logout logic if necessary, like redirecting
  };


  return (
    <Paper
      elevation={3}
      sx={{
        minWidth: 240,
        width: 240,
        marginRight: '32px',
        borderRadius: '4px',
        maxHeight:350, //remove later !!!!!IMP!!!!!!!
      }}
    >
      <Typography variant="h6" noWrap component="div" sx={{ p: 2 }}>
        Your Account
      </Typography>
      <List>
        {[
          { name: 'Dashboard', path: '/customer' },
          { name: 'Personal Info', path: '/customer/personal-info' },
          { name: 'Address Book', path: '/customer/address-book' },
          { name: 'Previous Orders', path: '/customer/previous-orders' },
          { name: 'Delete Account', path: '/customer/delete-account' },
          // Assuming you have a logout functionality
        ].map((item, index) => (
          <ListItem 
            button 
            key={item.name} 
            onClick={() => handleNavigation(item.path)}
            selected={location.pathname === item.path} // Highlights the item if it's the current path
            sx={{
              borderLeft: location.pathname === item.path ? "5px solid #ec1c24" : "0px",
              backgroundColor: location.pathname === item.path ? 'rgba(0, 0, 0, 0.04)' : 'transparent', // Change as per your color theme
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)', // Darker on hover
              }
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        {/* Logout should be handled differently, not by navigation */}
        <ListItem button key="Logout" >
          <ListItemText primary="Log Out"  onClick={() => handleLogout()}/>
        </ListItem>
      </List>
    </Paper>
  );
};

export default DashboardMenu;
