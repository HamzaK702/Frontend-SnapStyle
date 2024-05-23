import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Container, Drawer, List, ListItem, ListItemText, Button, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// Import react-scroll
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const ExpressNavbar = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook to get the current location
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { title: "Try Now", to: "/try" },
  ];

  // Function to handle navigation or scrolling
  const handleNavigationOrScroll = (e, link) => {
    e.preventDefault();
   
      navigate(link.to);
    
      // Directly scroll to the section if already on the home page
      const element = document.getElementById(link.scrollId);
      if(element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    
  };

  return (
    <Container maxWidth="lg" disableGutters={true}>
      <AppBar sx={{ 
              zIndex: theme.zIndex.drawer + 1,
              position: "fixed",  // Changed from "static" to "fixed"
              top: 0,  // Ensures it sticks to the top
              width: '100%',  // Ensures it spans the full width
              backgroundColor: "#000",  // Transparency
              backdropFilter: "blur(10px)",  // Blur effect
              elevation: 0,
              
          }}>
        <Toolbar>
          <img src="/assets/logo.png" alt="TCS" style={{ height: isMobileOrTablet ? 20 : '80px' }} />
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
                <Button color="inherit" 
                sx={{
                  backgroundColor: 'transparent', // White background
                  color: 'white', // Bright pink text
                  padding: '6px 16px',
                  fontSize: '0.975rem',
                  border: '1px solid white',
                  borderRadius: '10px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: "white",
                    color:"black"
                  },
                }}>
                  {link.title}
                </Button>
              </a>
            ))
          )}
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default ExpressNavbar;
