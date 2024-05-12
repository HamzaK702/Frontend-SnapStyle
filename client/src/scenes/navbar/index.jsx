import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Container, Drawer, List, ListItem, ListItemText, Button, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAdminLogin } from '../../state';
import LogoutIcon from '@mui/icons-material/Logout';
// Import react-scroll
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const isAdmin = useSelector((state) => state.auth.adminLogin);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { title: "Home", to: "/#homeSection", scrollId: "homeSection" },
    { title: "About Us", to: "/about", scrollId: "aboutSection" },
    { title: "Contact Us", to: "/#contactSection", scrollId: "contactSection" },
    { title: "My Dashboard", to: "/customer", scrollId: "contactSection" },
  ];

  // Function to handle navigation or scrolling
  const handleNavigationOrScroll = (e, link) => {
    e.preventDefault();
    if(location.pathname !== "/home") {
      navigate(link.to);
    } else {
      // Directly scroll to the section if already on the home page
      const element = document.getElementById(link.scrollId);
      if(element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogout = () => {
    dispatch(setAdminLogin({ adminLogin: false }));
  };

  return (
    <Container maxWidth="lg" disableGutters={true}>
      <AppBar sx={{ zIndex: theme.zIndex.drawer + 1 }} position="static" color="transparent" elevation={0}>
        <Toolbar>
          <img src="/assets/TCS-logo.png" alt="TCS" style={{ height: isMobileOrTablet ? 20 : '50px' }} />
          <div style={{ flexGrow: 1 }} />
          {isMobileOrTablet ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{ display: { md: 'none' } }}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileMenuOpen}
                onClose={handleDrawerToggle}
                sx={{ display: { md: 'none' } }}
              >
                <List>
                  {navLinks.map((link, index) => (
                    <a key={index} href={link.to} onClick={(e) => handleNavigationOrScroll(e, link)} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <ListItem button>
                        <ListItemText primary={link.title} />
                      </ListItem>
                    </a>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            
            navLinks.map((link, index) => (
              <a key={index} href={link.to} onClick={(e) => handleNavigationOrScroll(e, link)} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit" style={{ textTransform: 'none', fontSize: isMobileOrTablet ? "10px" : '16px', color: '#2f3135' }}>
                  {link.title}
                </Button>
              </a>
            ))
          )}
          {isAdmin && (
          <>
          <Button 
          color="inherit" 
          style={{ 
            textTransform: 'none', 
            fontSize: isMobileOrTablet ? "10px" : '16px', 
            color: '#2f3135' 
            }} 
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
            >
            Log Out
          </Button>
          </>
          )}
          
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
