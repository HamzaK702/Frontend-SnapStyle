import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, IconButton, Modal, TextField, Button, MenuItem, Select, FormControl, InputAdornment } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateItem, removeItem, setTotalCost } from '../state';

const ItemsList = () => {
    const orderId = useSelector(state => state.auth.id);
    const items = useSelector(state => state.auth.items);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    
    console.log(items.length)
    // Handle the click on the edit button
    const handleEditClick = (item) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    const handleInputChange = (e, field) => {
        setEditingItem({ ...editingItem, [field]: e.target.value });
    };


    const handleSave = async () => {
        const updatedItems = items.map(item => item.id === editingItem.id ? editingItem : item);
        console.log(editingItem);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/order/editItem/${orderId}/${editingItem.id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(editingItem),
            });
            const data = await response.json();
            if (response.ok) {
              
              dispatch(updateItem({ id: editingItem.id, item: editingItem }));
              dispatch(setTotalCost({totalCost:data.order.totalCost}));
              console.log('Item EDITTED successfully:', data);
              
            } 
            else {
               
              console.error('Failed to add item:', data);
            }
          } catch (error) {
             
            console.error('Error adding item:', error);
          }
       
        
        setIsModalOpen(false);
    };


    const handleRemove = async (itemId) => {
        try {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/order/removeItem/${orderId}/${itemId}`, {
            method: 'DELETE',
          });
          const data = await response.json();
          if (response.ok) {
            // If the backend deletion is successful, remove the item from Redux store
            dispatch(setTotalCost({totalCost:data.order.totalCost}));
            dispatch(removeItem(itemId));
            console.log(`Item with id ${itemId} removed successfully.`);
          } else {
            console.error('Failed to remove item.');
          }
        } catch (error) {
          console.error('Error removing item:', error);
        }
      };


    return (
        <>
        <Box sx={{ width: "100%",  marginTop:"3vh" }}>
        <Typography variant="h4" marginTop="2rem" sx={{ fontWeight: "700", color: '#2f3135'  }} align="left">
        Your Items
        </Typography>
            <Box component="ul" sx={{ listStyle: 'none', padding: 0 }}>
                {items.map((item, index) => (
                    <Box
                        component="li"
                        key={item.id}
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center', 
                            mb: 2, 
                            p: 2, 
                            border: '1px solid #ddd',
                            borderRadius: '4px'
                        }}
                    >
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="subtitle1">{index + 1}. {item.type} - {item.weight}kg</Typography>
                            <Typography variant="body2">Description: {item.description}</Typography>
                        </Box>
                        <Box>
                            <IconButton aria-label="edit" color="disabled" onClick={() => handleEditClick(item)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton aria-label="delete" color="disabled" onClick={() => handleRemove(item.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>

        <Modal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ 
        width: '80%', // Sets the width to 80% of the viewport width
        maxWidth: '700px', 
        position: 'absolute', 
        top: '50%', left: '50%', 
        transform: 'translate(-50%, -50%)', 
        bgcolor: 'background.paper', 
        boxShadow: 24, 
        p: 4 
        }}>
                {editingItem && (
                    <>
                        <Typography variant="h4" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                        Edit Item
                        </Typography>
                        <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                        Type
                        </Typography>
                        <FormControl 
                            fullWidth
                            margin="normal"
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
                            value={editingItem.type}
                            onChange={(e) => handleInputChange(e, 'type')}
                            >
                                <MenuItem value="Bag">Bag</MenuItem>
                                <MenuItem value="Box">Box</MenuItem>
          
                             </Select>
                        </FormControl>

                                <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                                Width
                                </Typography>
                        
                                <TextField
                                type="number" // Makes the input accept only numbers
                                inputMode="numeric"
                                id="length"
                                value={editingItem.width}
                                onChange={(e) => handleInputChange(e, 'width')}
                                fullWidth
                                margin="normal"
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

                      

                        <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                        Height
                        </Typography>
                        
                                <TextField
                                type="number" // Makes the input accept only numbers
                                inputMode="numeric"
                                id="length"
                                value={editingItem.height}
                                onChange={(e) => handleInputChange(e, 'height')}
                                fullWidth
                                margin="normal"
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

                        <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                        Length
                        </Typography>
                        
                                <TextField
                                type="number" // Makes the input accept only numbers
                                inputMode="numeric"
                                id="length"
                                value={editingItem.length}
                                onChange={(e) => handleInputChange(e, 'length')}
                                fullWidth
                                margin="normal"
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


                         
                        <Typography variant="h5" sx={{ minWidth: '6rem', fontWeight: '400' }}>
                        Weight
                        </Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            value={editingItem.weight}
                            type="number"
                            onChange={(e) => handleInputChange(e, 'weight')}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" sx={{ backgroundColor: '#D3D3D3', borderRadius: '4px',  paddingY: "26px", paddingX:"12px",  marginRight: "-14px"}}>
                                    kg
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
                        <Typography variant="h5" sx={{ minWidth: "100%", fontWeight: '400' }}>
                        Description
                        </Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            value={editingItem.description}
                            onChange={(e) => handleInputChange(e, 'description')}
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
                        <Box sx={{ 
                            mt: 2, 
                            display: 'flex', 
                            justifyContent: 'flex-end'
                             }}>
                            <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={handleSave}
                            sx={{ width:"100%",
                            backgroundColor: "white",
                            border:"1px solid #ec1c24",
                            borderRadius: "10px",
                            color: '#2f3135',
                            textTransform: 'none',
                            fontSize: '1rem', 
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Drop shadow for the button
                            paddingX: '32px', // Horizontal padding
                            '&:hover': {
                              backgroundColor: "white", // Maintain the background color on hover
                              boxShadow: '0 0 5px #ec1c24', // Custom boxShadow on hover
                            },}}
                            >
                                Save Changes
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Modal>
    </>
    );
};

export default ItemsList;
