import React from 'react';
import { List, ListItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate(); // Hook from react-router-dom to navigate

  // Function to navigate based on the button's text
  const handleNavigation = (text) => {
    const navigationPaths = {
      'Luggage Plus': '/admin',
      'E-Notification Center': '/admin/email-notifications',
      'Inquiry': '/admin/inquiry',
      'GDPR' : '/admin/consents',
      'Tariff' : '/admin/shipping-rate',
      'Customers' : '/admin/customers',
      'Collaborators' : '/admin/collaborators',

      
      // Add more navigation paths as needed
    };
    const path = navigationPaths[text];
    navigate(path);
  };

  return (
    <List>
      {['Luggage Plus', 'E-Notification Center', 'Inquiry', 'GDPR', 'Tariff', 'Customers', 'Collaborators'].map((text) => (
        <ListItem key={text}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleNavigation(text)} // Call handleNavigation with the text of the button
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              color: '#528aae',
              textTransform: 'none',
              height:"3.55rem",
              width:"100%",
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: "white",
                boxShadow: '0 0 5px  #528aae',
              },
              fontSize: '1rem',
            }}
          >
            {text}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
