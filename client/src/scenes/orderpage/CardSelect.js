import React, { useState } from 'react';
import { Card, Box, Icon, Checkbox, CardActionArea, CardContent, Typography } from '@mui/material';

// Define your options directly in your component
const options = [
  {
    icon: 'work',
    title: 'My Own Extra Luggage',
    description: 'My own used personal effects such as clothing, books, and personal gadgets.',
  },
  {
    icon: 'people',
    title: 'Luggage For Someone Else',
    description: 'Goods and clothing that belong to a friend or family member.',
  },
  {
    icon: 'card_giftcard',
    title: 'Gift',
    description: 'Present for a friend or family member.',
  },
];

const CardSelect = ({ onSelect }) => {
  const [selected, setSelected] = useState('');

  const handleSelect = (option) => {
    setSelected(option.title); // Set the selected state
    onSelect(option.title); // Perform the onSelect action passed from parent
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1}>
      {options.map((option) => (
        <Card 
          key={option.title}
          sx={{
            display: 'flex',
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 0 5px #ec1c24',
            },
          }}
        >
          <CardActionArea onClick={() => handleSelect(option)}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              <Icon sx={{ fontSize: 50, color: '#696969', marginLeft: '1rem' }}>{option.icon}</Icon>
              <Checkbox
                checked={selected === option.title}
                onChange={() => handleSelect(option)}
                inputProps={{ 'aria-label': option.title }}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 24 }, color: '#696969', marginLeft: '1rem' }}
              />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    {option.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {option.description}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default CardSelect;
