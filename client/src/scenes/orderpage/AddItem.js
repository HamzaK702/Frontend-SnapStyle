import React, { useState, useEffect, useRef } from 'react';
import { Container, TextField, Button, InputAdornment, MenuItem, Select, FormControl, FormHelperText , Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { addItem, setTotalCost, setAllItemsAdded, setAdditionalFreeWeight } from '../../state';
import AdditionalWeight from "./AdditionalWeightPopUp"
import ItemsList from '../../components/editItem';
// import ScrollToTop from '../../components/ScrollToTop';

function ItemForm() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [length, setLength] = useState('');
  const [weight, setWeight] = useState('');
  const [itemType, setItemType] = useState('');
  const [description, setDescription] = useState('');
  const [itemNumber, setItemNumber] = useState(0);
  const [count, setCount] = useState(0);
  const theme = useTheme();
  const headingRef = useRef(null);
  const items = useSelector(state => state.auth.items);
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const allItemsAdded = useSelector((state) => state.auth.allItemsAdded); 

  
  // Refs for input fields
  const widthRef = useRef(null);
  const heightRef = useRef(null);
  const lengthRef = useRef(null);
  const weightRef = useRef(null);
  const itemTypeRef = useRef(null);
  const descriptionRef = useRef(null);
     

  
  const [errors, setErrors] = useState({
    width: '',
    height: '',
    length: '',
    weight: '',
    itemType: '',
    description: '',
  });


  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);

  const validateWidth = (value) => !value || isNaN(value) || value <= 0;
  const validateHeight = (value) => !value || isNaN(value) || value <= 0;
  const validateLength = (value) => !value || isNaN(value) || value <= 0;
  const validateWeight = (value) => !value || isNaN(value) || value <= 0 || value > 70;
  const validateItemType = (value) => !value;
  const validateDescription = (value) => !value.trim();

  
  useEffect(() => {
    setCount(items.length);
    if(items.length != 0){
    if(items.length == itemNumber){
      dispatch(setAllItemsAdded({ allItemsAdded: true }));
    }
    else{
      dispatch(setAllItemsAdded({ allItemsAdded: false }));
    }
  }
  }, [items]);


  const handleItemNumberChange = (event) => {
    setItemNumber(event.target.value);
  };

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };
  
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  
  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };
  
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  
  const handleItemTypeChange = (event) => {
    setItemType(event.target.value);
  };
  
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  
  const handleAddItem = async () => {
    
    const newErrors = {
      width: validateWidth(width) ? 'Invalid width' : '',
      height: validateHeight(height) ? 'Invalid height' : '',
      length: validateLength(length) ? 'Invalid length' : '',
      weight: validateWeight(weight) ? 'Invalid weight or exceeds 70kg limit' : '',
      itemType: validateItemType(itemType) ? 'Select item type' : '',
      description: validateDescription(description) ? 'Enter description' : '',
    };

    setErrors(newErrors);

    const errorFields = { width: widthRef, height: heightRef, length: lengthRef, weight: weightRef, itemType: itemTypeRef, description: descriptionRef };
    const firstErrorFieldKey = Object.keys(newErrors).find(key => newErrors[key] !== '');
    if (firstErrorFieldKey) {
      errorFields[firstErrorFieldKey].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const itemData = {
      type: itemType,  
      weight: weight,
      height: height,
      length: length,
      width: width,
      description: description
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/order/addItem/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      });
     
      const data = await response.json();
      console.log(data.order.items[data.order.items.length-1].shipCost)
      console.log(data.order.items[data.order.items.length-1]._id)
      const itemDataWithShipCost = {
        id: data.order.items[data.order.items.length-1]._id,
        type: itemType,  
        weight: weight,
        height: height,
        length: length,
        width: width,
        description: description,
        shipCost: data.order.items[data.order.items.length-1].shipCost
      };
      
      if (response.ok) {
        
        dispatch(addItem({ items: [itemDataWithShipCost] }));
        dispatch(setTotalCost({ totalCost: data.order.totalCost }));
        dispatch(setAdditionalFreeWeight({ additionalFreeWeight: data.additionalFreeWeight }));
        console.log('Item added successfully:', data);
        setWidth('');
        setHeight('');
        setWeight('');
        setDescription('');
        setItemType('');
        setLength('');
        // const countPlus = items.length + 1;
        
        // setCount(countPlus);
        // console.log("item number so far is"+countPlus);
        
        
        
      } 
      else {
         
        console.error('Failed to add item:', data);
      }
    } catch (error) {
       
      console.error('Error adding item:', error);
    }
  };


  useEffect(() => {
    if (count < itemNumber && headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [count, itemNumber]);

  const getOrdinalNumber = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
         <Typography variant="h5" sx={{ fontWeight: '400' }}>
        Number of Items
      </Typography>
      <FormControl fullWidth>
        <Select
          id="itemNumber"
          error={!!errors.itemNumber}
          value={itemNumber}
          displayEmpty
          onChange={handleItemNumberChange}
          sx={{
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 0 5px #ec1c24',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            },
          }}
          renderValue={
            itemNumber !== '' ? undefined : () => <Typography color="textSecondary">Please Select</Typography>
          }
        >
          {[1, 2, 3, 4, 5].map((number) => (
            <MenuItem key={number} value={number}>{number}</MenuItem>
          ))}
          
        </Select>
        
          <FormHelperText>
            For more please contact us at +442088495600
          </FormHelperText>
      
      </FormControl>

      <Typography variant="h4" gutterBottom ref={headingRef}>
        Add Items
      </Typography>
      
     

      <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400', mt:1 }}>
        Item Type
      </Typography>
      <FormControl 
      fullWidth
      sx={{
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 0 5px #ec1c24',
          '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        },
      }}
      >
        <Select
          id="type"
          error={!!errors.type}
          helperText={errors.type}
          value={itemType}
          displayEmpty
          onChange={handleItemTypeChange}
          renderValue={
            itemType !== '' ? undefined : () => <Typography color="textSecondary">Please Select</Typography>
          }
        >
          <MenuItem value="Bag">Bag</MenuItem>
          <MenuItem value="Box">Box</MenuItem>
          
        </Select>
      </FormControl>

      <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={"1rem"}>
    
        <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1} marginRight={2}>
                   
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
            <Typography ref={widthRef} variant="h5" sx={{  fontWeight: '400' }}>
            Width
            </Typography>
            <img src={`/assets/width.svg`} alt="Icon" style={{ minHeight: '45px' , height: 'auto', width: isMobileOrTablet ? "30px": '50px' }} />
            </Box>
                <FormControl 
                fullWidth
              
                >
                <TextField
                type="number" // Makes the input accept only numbers
                inputMode="numeric"
                id="width"
                error={!!errors.width}
                helperText={errors.width}
                value={width}
                onChange={handleWidthChange}
                fullWidth
                placeholder="0"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ backgroundColor: '#D3D3D3', borderRadius: '4px',  paddingY: "26px", paddingX:"12px",  marginRight: "-14px"}}>
                      cm
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '.MuiOutlinedInput-root': { // Target the root of the input element for hover effect
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 5px #ec1c24',
                      '.MuiOutlinedInput-notchedOutline': {
                        border: 'none', // This affects the static state; ensure it aligns with your design requirements
                      },
                    },
                    '&.Mui-error:hover': {
                      boxShadow: '0 0 5px red', // Optional: Differentiate the hover effect for error state
                    }
                  },
                }}
                />
                </FormControl>
            </Box>

    
    <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1}>
              
           <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
            <Typography  ref={heightRef} variant="h5" sx={{   fontWeight: '400' }}>
            Height
            </Typography>
            <img src={`/assets/height.svg`} alt="Icon" style={{ minHeight: '45px' , height: 'auto', width: isMobileOrTablet ? "30px": '50px' }} />
            </Box>
            <FormControl 
            fullWidth
          
            >
            <TextField
            type="number" // Makes the input accept only numbers
            inputMode="numeric"
            id="height"
            error={!!errors.height}
            helperText={errors.height}
            value={height}
            onChange={handleHeightChange}
            fullWidth
            placeholder="0"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ backgroundColor: '#D3D3D3', borderRadius: '4px',  paddingY: "26px", paddingX:"12px",  marginRight: "-14px"}}>
                      cm
                    </InputAdornment>
              ),
            }}
            sx={{
              '.MuiOutlinedInput-root': { // Target the root of the input element for hover effect
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 0 5px #ec1c24',
                  '.MuiOutlinedInput-notchedOutline': {
                    border: 'none', // This affects the static state; ensure it aligns with your design requirements
                  },
                },
                '&.Mui-error:hover': {
                  boxShadow: '0 0 5px red', // Optional: Differentiate the hover effect for error state
                }
              },
            }}
            />
          </FormControl>
    </Box>
  </Box>
  <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={"1rem"} marginBottom={"2rem"}>
  <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1} marginRight={2}>
                 
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
            <Typography ref={lengthRef} variant="h5" sx={{   fontWeight: '400' }}>
            Length
            </Typography>
            <img src={`/assets/width.svg`} alt="Icon" style={{ minHeight: '45px' , height: 'auto', width: isMobileOrTablet ? "30px": '50px' }} />
            </Box>
                <FormControl 
                fullWidth
                
                >
                <TextField
                type="number" // Makes the input accept only numbers
                inputMode="numeric"
                id="length"
                error={!!errors.length}
                helperText={errors.length}
                value={length}
                onChange={handleLengthChange}
                fullWidth
                placeholder="0"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ backgroundColor: '#D3D3D3', borderRadius: '4px',  paddingY: "26px", paddingX:"12px",  marginRight: "-14px"}}>
                      cm
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '.MuiOutlinedInput-root': { // Target the root of the input element for hover effect
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 5px #ec1c24',
                      '.MuiOutlinedInput-notchedOutline': {
                        border: 'none', // This affects the static state; ensure it aligns with your design requirements
                      },
                    },
                    '&.Mui-error:hover': {
                      boxShadow: '0 0 5px red', // Optional: Differentiate the hover effect for error state
                    }
                  },
                }}
                />
                </FormControl>
            </Box>

    
    <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
            <Typography  ref={weightRef} variant="h5" sx={{   fontWeight: '400' }}>
            Weight
            </Typography>
            <img src={`/assets/weight.svg`} alt="Icon" style={{ height: '45px', width: isMobileOrTablet ? "30px": '50px' }} />
            </Box>
            <FormControl 
            fullWidth
             
            >
            <TextField
            type="number" // Makes the input accept only numbers
            inputMode="numeric"
            id="weight"
            error={!!errors.weight}
            helperText={errors.weight}
            value={weight}
            onChange={handleWeightChange}
            fullWidth
            placeholder="0"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ backgroundColor: '#D3D3D3', borderRadius: '4px',  paddingY: "26px", paddingX:"12px",  marginRight: "-14px"}}>
                  kg
                </InputAdornment>
              ),
            }}
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
    </Box>
  </Box>

  {/* Vertical Stacked Fields */}
  <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1} marginBottom={"1rem"}>
     
    </Box>
    <Box display="flex" flexDirection="column" alignItems="left" gap={1} flex={1}>
      <Typography ref={descriptionRef} variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
      Item Description
      </Typography>
      <FormControl 
      fullWidth
      
      >
          <TextField
          id="description"
          error={!!errors.description}
          helperText={errors.description}
          value={description}
          onChange={handleDescriptionChange}
          fullWidth
          placeholder="e.g. Color, Make"
          variant="outlined"
          sx={{
            '.MuiOutlinedInput-root': { // Target the root of the input element for hover effect
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0 0 5px #ec1c24',
                '.MuiOutlinedInput-notchedOutline': {
                  border: 'none', // This affects the static state; ensure it aligns with your design requirements
                },
              },
              '&.Mui-error:hover': {
                boxShadow: '0 0 5px red', // Optional: Differentiate the hover effect for error state
              }
            },
          }}
        />
        </FormControl>
    </Box>

     
    
    {/* <AdditionalWeight /> */}
    {(count) < itemNumber && (
      <>
       <Button
      variant="contained"
      onClick={handleAddItem}
      
      sx={{
        width:"100%",
        marginTop: '2vh',
        backgroundColor: "white",
        borderRadius: "10px",
        color: '#2f3135',
        textTransform: 'none',
        fontSize: '1.25rem', // Bigger text size
        height: '56px', // Increase height
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
        paddingX: '32px', // Horizontal padding
        '&:hover': {
          backgroundColor: "white", // Maintain the background color on hover
          boxShadow: '0 0 5px #ec1c24', // Custom boxShadow on hover
        },
      }} 
      >
        {(count + 1) === itemNumber && itemNumber !== 1 ? "Add Last Item" : count < 1 ? "Add Item" : `Add ${getOrdinalNumber(count + 1)} Item`}
     {/* {count < 1  ? "Add Item" : `Add ${getOrdinalNumber(count + 1)} Item`} */}
      </Button>
      </>
    )}
     {count === itemNumber && (
      
      <Typography variant="h6" sx={{ minWidth: '6rem', fontWeight: '400', textAlign:"center", mt:"2vh", color:"grey" }}>
      Select Number of Items to add more or contact us at +442088495600
      </Typography>
     )
     }

      <ItemsList/>
    </Container>
  );
}

export default ItemForm;
