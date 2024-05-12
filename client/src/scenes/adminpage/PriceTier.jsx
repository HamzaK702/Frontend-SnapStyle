import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
 

export default function PriceTierForm() {
    const [priceTiers, setPriceTiers] = useState([{ maxWeight: '', price: '' }]);

    const handlePriceTierChange = (index, event) => {
        const newPriceTiers = [...priceTiers];
        newPriceTiers[index][event.target.name] = event.target.value;
        setPriceTiers(newPriceTiers);
    };

    const addPriceTier = () => {
        setPriceTiers([...priceTiers, { maxWeight: '', price: '' }]);
    };

    const removePriceTier = (index) => {
        const newPriceTiers = [...priceTiers];
        newPriceTiers.splice(index, 1);
        setPriceTiers(newPriceTiers);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/price`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    newPriceTiers: priceTiers.map(tier => ({
                        maxWeight: parseFloat(tier.maxWeight),
                        price: parseFloat(tier.price)
                    }))
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
            alert('Price tiers updated successfully');
        } catch (error) {
            console.error('Failed to update price tiers', error);
            alert('Failed to update price tiers');
        }
    };

    return (
        <Container>
            <Typography variant='h2' sx={{mt:"10vh"}}>Add/Update Tariff Rates</Typography>
            <Box sx={{ '& > :not(style)': { my: 3 } }}>
                {priceTiers.map((tier, index) => (
                    <div key={index}>
                        <TextField
                            label="Max Weight"
                            variant="outlined"
                            name="maxWeight"
                            type="number"
                            value={tier.maxWeight}
                            onChange={(e) => handlePriceTierChange(index, e)}
                        />
                        <TextField
                            label="Price"
                            variant="outlined"
                            name="price"
                            type="number"
                            value={tier.price}
                            onChange={(e) => handlePriceTierChange(index, e)}
                        />
                        <Button onClick={() => removePriceTier(index)} sx={{color:"#ec1c24"}}>Remove</Button>
                    </div>
                ))}
                <Button onClick={addPriceTier}>Add Another Tier</Button>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
}
