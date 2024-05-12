import React, {useState} from 'react';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

// Define your options directly in your component
const options = [
  {
    value: 'personalEffectsOwn',
    label: 'My Own Extra Luggage',
    description: '(example: my own used personal effects such as clothing, books, and personal gadgets)',
  },
  {
    value: 'personalEffectsOthers',
    label: 'Luggage For Someone Else',
    description: '(example: goods and clothing that belong to a friend or family member)',
  },
  {
    value: 'gift',
    label: 'Gifts',
    description: '(example: birthday present for family member)',
  },
];

const CheckboxSelect = ({ onSelect }) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
      onSelect(event.target.value);
    };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <FormGroup>
      {options.map((option) => (
         <Box marginTop={"1vh"}>
        <FormControlLabel 
         
          key={option.value}
          control={
            <Checkbox
              checked={selectedValue === option.value}
              onChange={handleChange}
              value={option.value}
            />
          }
          label={
            <Box marginTop={"1.5vh"}>
            <Typography component="span" variant="subtitle1" sx={{ fontWeight: 'bold', color: '#696969' }}>
              {option.label}
            </Typography>
            <Typography component="span" variant="body2" sx={{ marginLeft: 1, color: '#696969' }}>
              {option.description}
            </Typography>
          </Box>
          
        }
        />
        </Box>
      ))}
    </FormGroup>
  </Box>
  );
};

export default CheckboxSelect;
