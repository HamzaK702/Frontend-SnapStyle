import React from 'react';
import { Typography } from '@mui/material';
import OrderDetailsCard from '../../components/OrderDetailCard';

const OrdersDisplay = ({ orders }) => {

    return (
        <div>
            {/* Display each order using the OrderDetailsCard component */}
            {orders.map((orderId, index) => (
                <OrderDetailsCard key={index} orderId={orderId} />
            ))}

            {/* Display a message if there are no orders */}
            {orders.length === 0 && (
                <div>
                    <Typography variant="h6" gutterBottom>
                        Current Orders
                    </Typography>
                    <Typography variant="body1">
                        You have no active orders
                    </Typography>
                </div>
            )}
        </div>
    );
};

export default OrdersDisplay;
