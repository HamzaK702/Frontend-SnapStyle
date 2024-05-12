import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import HistoryIcon from '@mui/icons-material/History';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from 'react-redux';
import { logout } from '../../state/index';

const DashboardMenuMobile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/customer");
    // Additional logout logic if necessary, like redirecting
  };

  return (
    // <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex:5, maxWidth:"90vw", mx:"auto" }} elevation={10}>
    //   <BottomNavigation value={value} onChange={handleChange} showLabels>
    //     <BottomNavigationAction 
    //       // label="Dashboard" 
    //       value="/customer" 
    //       icon={<DashboardIcon />} 
    //     />
    //     <BottomNavigationAction 
    //       // label="Personal Info" 
    //       value="/customer/personal-info" 
    //       icon={<InfoIcon />} 
    //     />
    //     <BottomNavigationAction 
    //       // label="Address Book" 
    //       value="/customer/address-book" 
    //       icon={<BookIcon />} 
    //     />
    //     <BottomNavigationAction 
    //       // label="Previous Orders" 
    //       value="/customer/previous-orders" 
    //       icon={<HistoryIcon />} 
    //     />
    //     {/* For Logout, you should handle the click differently */}
    //     <BottomNavigationAction 
    //       // label="Log Out" 
    //     //   value="logout" 
    //       icon={<LogoutIcon />}
    //       onClick={() => {
    //         // Perform logout logic here
    //         handleLogout()
    //       }}
    //     />
    //   </BottomNavigation>
    // </Paper>

    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 5, maxWidth: '100vw', mx: 'auto' }} elevation={10}>
    <BottomNavigation value={value} onChange={handleChange} showLabels sx={{ '& .MuiBottomNavigationAction-root': { minWidth: 0, padding: '6px' } }}>
      <BottomNavigationAction 
        value="/customer" 
        icon={<DashboardIcon />}
      />
      <BottomNavigationAction 
        value="/customer/personal-info" 
        icon={<InfoIcon />}
      />
      <BottomNavigationAction 
        value="/customer/address-book" 
        icon={<BookIcon />}
      />
      <BottomNavigationAction 
        value="/customer/previous-orders" 
        icon={<HistoryIcon />}
      />
      <BottomNavigationAction 
        icon={<LogoutIcon />}
        onClick={() => {
          // Perform logout logic here
          handleLogout();
        }}
      />
    </BottomNavigation>
  </Paper>
  );
};

export default DashboardMenuMobile;
