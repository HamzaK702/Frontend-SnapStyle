import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import CheckboxSelect from './CustomCheckbox';
import CardSelect from './CardSelect';
import { Container, Box, TextField, Typography, FormControl, InputAdornment, Alert } from '@mui/material';
import { setHitCustomApi, setCount } from '../../state';

function Custom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [customValue, setCustomValue] = useState('');
  const [customDeclaration, setCustomDeclaration] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({
    customValue: '',
    customDeclaration: '',
    description: '',
  });

  // Refs for input fields
  const descriptionRef = useRef(null);
  const customDeclarationRef = useRef(null);
  const customValueRef = useRef(null);

  const addCustoms = useSelector((state) => state.auth.hitCustomApi);
  const id = useSelector((state) => state.auth.id);

  // Validation functions
  const validateFields = () => {
    let tempErrors = {};
    tempErrors.customValue = !customValue || isNaN(customValue) || parseFloat(customValue) <= 0 ? 'Invalid value' : '';
    tempErrors.customDeclaration = !customDeclaration ? 'Custom declaration is required' : '';
    tempErrors.description = !description.trim() ? 'Description is required' : '';
    setErrors(tempErrors);

    // Scroll to first error
    if (tempErrors.description) {
      descriptionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (tempErrors.customDeclaration) {
      customDeclarationRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (tempErrors.customValue) {
      customValueRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return !tempErrors.customValue && !tempErrors.customDeclaration && !tempErrors.description;
  };

  async function addCustomDetails() {
    if (!validateFields()) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/order/addCustomDetails/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customDeclaration,
          description,
          customValue,
        }),  
      });

      if (!response.ok) {
        throw new Error('Failed to add custom details: ' + response.statusText);
      }

      console.log("Custom details added");
      navigate("/order/address");
      dispatch(setCount({ count: 1 }));
    } catch (error) {
      console.error(error);
    }
  }

  if(addCustoms) { 
    addCustomDetails();
    dispatch(setHitCustomApi({hitCustomApi: false}));
  }

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1} maxWidth="100%" sx={{}}>
        <Typography variant="h4" marginTop="2rem" sx={{ fontWeight: "700", color: '#2f3135' }} align="left">
          Description of Contents
        </Typography>
        
        <Typography variant="h6" sx={{ minWidth: '6rem', fontWeight: '400', color: '#2f3135' }}>
            Enter a description of what you are sending (e.g. 'Remote control car, children's books & baby clothes'). Do not overgeneralize e.g. entering only 'Gifts' or 'Toys' would not be accepted.
        </Typography> 
        <FormControl fullWidth>
          <TextField
            id="description"
            ref={descriptionRef}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            placeholder="Books, baby clothes & kitchen utensils"
            variant="outlined"
            error={!!errors.description}
            helperText={errors.description}
            sx={{
              '.MuiOutlinedInput-root': {
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 0 5px #ec1c24',
                  '.MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                },
                '&.Mui-error:hover': {
                  boxShadow: '0 0 5px red',
                }
              },
            }}
          />
        </FormControl>

        <Typography  ref={customDeclarationRef} variant="h4" marginY="2rem" sx={{ fontWeight: "700", color: '#2f3135' }} align="left">
          Custom Declaration
        </Typography>
        <CardSelect onSelect={(title) => {
          setCustomDeclaration(title);
          setErrors({ ...errors, customDeclaration: '' });
        }}
        />
        {errors.customDeclaration && (
          <>
          <Alert  severity="error" sx={{ mb: 2, width:'95%' }}>
                Please add Custom Declaration before proceeding.
            </Alert>
          </>
        )
        }

        <Typography variant="h6" sx={{ minWidth: '6rem', fontWeight: '400', color: '#2f3135' }}>
          Declared Value For Customs
        </Typography>
        <FormControl fullWidth>
          <TextField
            type="number"
            inputMode="numeric"
            id="customs"
            ref={customValueRef}
            value={customValue}
            onChange={(e) => setCustomValue(e.target.value)}
            fullWidth
            placeholder="value in GBP"
            variant="outlined"
            error={!!errors.customValue}
            helperText={errors.customValue}
            sx={{
              '.MuiOutlinedInput-root': {
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 0 5px #ec1c24',
                  '.MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                },
                '&.Mui-error:hover': {
                  boxShadow: '0 0 5px red',
                }
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ backgroundColor: '#D3D3D3', borderRadius: '4px',  paddingY: "26px", paddingX:"12px",  marginLeft: "-14px"}}>
                  £
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Box>
    </Container>
  );
}

export default Custom;




