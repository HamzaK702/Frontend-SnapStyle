


import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer,
   TableHead, TableRow, Card, TextField, MenuItem, Box, Modal, 
   Button, Select, FormControl, InputLabel, Container, Chip, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import CancelIcon from '@mui/icons-material/Cancel';
import { green, red } from '@mui/material/colors';
import OrderActions from "./OrderActions"

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [textFieldValue, setTextFieldValue] = useState('');
  const [filters, setFilters] = useState({
    paymentStatus: 'success',
    orderStatus: '',
    fromDate: '',
    toDate: '',
    sortByDate: ''
  });

  useEffect(() => {
    const fetchOrders = async () => {
      let queryString = Object.keys(filters)
        .filter(key => filters[key] !== '') // Filter out keys with empty values
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(filters[key])}`) // Construct each query param
        .join('&'); // Join all query params with &

      const url = `${process.env.REACT_APP_API_URL}/admin/orders?${queryString}`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, [filters]);

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };
  const handleViewDetails = (order) => {
        setSelectedOrder(order);
        setModalOpen(true);
        handleClose();
      };
    
      const handleAddCN = (order) => {
        setSelectedOrder(order);
        setModal2Open(true);
        handleClose();
      };

      const handleClose = () => {
            setAnchorEl(null);
          };

          const handleClose2 = () => {
                setAnchorE2(null);
              };

  const handleAddCNClick = async () => {
    // Assuming selectedOrder has the order object
    const orderId = selectedOrder._id;
    // The value from the TextField
    const cnValue = textFieldValue;

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/addCN/${orderId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cn: cnValue }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);

      // Resetting the modal state and text field value
      setModal2Open(false);
      setTextFieldValue('');

      // Optionally, fetch orders again to refresh the list
      // fetchOrders();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
    <Box 
      sx={{
        mt:5
      }}
    >
      <Container>
        <Box sx={{ display: 'flex', gap: 1, marginBottom: 2,  minWidth:"100%"  }}>
          {/* Filters here */}
          <FormControl fullWidth >
            <InputLabel id="payment-status-label">Payment Status</InputLabel>
            <Select
              labelId="payment-status-label"
              id="payment-status"
              name="paymentStatus"
              value={filters.paymentStatus}
              label="Payment Status"
              onChange={handleFilterChange}
            >
               
              <MenuItem value="success">Paid</MenuItem>
              <MenuItem value="intent created">Unpaid</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="order-status-label">Order Status</InputLabel>
            <Select
              labelId="order-status-label"
              id="order-status"
              name="orderStatus"
              value={filters.orderStatus}
              label="Order Status"
              onChange={handleFilterChange}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="CN Required">CN Required</MenuItem>
              <MenuItem value="In-progress">In-progress</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
              <MenuItem value="Refunded">Refunded</MenuItem>
            </Select>
          </FormControl>

          <TextField
          fullWidth
            id="from-date"
            label="From Date"
            type="date"
            name="fromDate"
            value={filters.fromDate}
            onChange={handleFilterChange}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
          fullWidth
            id="to-date"
            label="To Date"
            type="date"
            name="toDate"
            value={filters.toDate}
            onChange={handleFilterChange}
            InputLabelProps={{ shrink: true }}
          />

          <FormControl fullWidth>
            <InputLabel id="sort-by-date-label">Sort By Date</InputLabel>
            <Select
              labelId="sort-by-date-label"
              id="sort-by-date"
              name="sortByDate"
              value={filters.sortByDate}
              label="Sort By Date"
              onChange={handleFilterChange}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="asc">Ascending</MenuItem>
              <MenuItem value="desc">Descending</MenuItem>
            </Select>
          </FormControl>

          <IconButton 
          onClick={handleFilterChange} 
          aria-label="refresh" 
          sx={{ alignSelf: 'flex-end' }}
        >
          <RefreshIcon />
        </IconButton>
        </Box>
      </Container>
                
      <TableContainer component={Card}>
       <Table aria-label="simple table">
         <TableHead>
           <TableRow>
       
             <TableCell> 
              <Typography variant='subtitle'> Created At</Typography>
              </TableCell>
              <TableCell align="left"><Typography variant='h6'>Consignment Number</Typography></TableCell>
             <TableCell align="left"><Typography variant='h6'>Sender</Typography></TableCell>
             <TableCell align="left"><Typography variant='h6'>Receiver</Typography></TableCell>
             <TableCell align="left"><Typography variant='h6'>Origin</Typography></TableCell>
             <TableCell align="left"><Typography variant='h6'>Destination</Typography></TableCell>
             <TableCell align="left"><Typography variant='h6'>Cost</Typography></TableCell>
             <TableCell align="left"><Typography variant='h6'>Collection Date</Typography></TableCell>
             <TableCell align="left"><Typography variant='h6'>Status</Typography></TableCell>
             <TableCell align="left"><Typography variant='h6'>Comments</Typography></TableCell>
             <TableCell align="left"><Typography variant='h6'>Actions</Typography></TableCell>
           </TableRow>
          
         </TableHead>
         <TableBody>
           {orders.map((order) => (
           
           <TableRow key={order._id}>
           <TableCell component="th" scope="row">
             {/* <Typography variant='h6' sx={{fontSize:"12px"}}>{order._id}</Typography> */}
             <Typography variant='subtitle'> {formatDate(order.createdAt)}</Typography>
           </TableCell>
           <TableCell align="left"> 
           <Typography variant='h6'>{order.cn}</Typography>
           </TableCell>
           <TableCell align="left"> 
           <Typography variant='h6'>{order.originAddress?.fullName}</Typography>
           </TableCell>
           <TableCell align="left">  <Typography variant='h6'>{order.destinationAddress?.fullName}</Typography></TableCell>
           <TableCell align="left">  <Typography variant='h6'>{order.origin}</Typography></TableCell>
           <TableCell align="left">  <Typography variant='h6'>{order.destination}</Typography></TableCell>
           <TableCell align="center">  
           <Typography variant='h6'>£{order.totalCost}</Typography>
           {order.paymentStatus === 'success' ? (
               <>
                 <CheckCircleIcon style={{ color: green[500], verticalAlign: 'middle' }} />
                 {/* <Typography variant='h6'>Paid</Typography> */}
               </>
             ) : (
              <>
                 <CancelIcon style={{ color: red[500], verticalAlign: 'middle' }} />
                  
               </>
               
             )}
           </TableCell>
           <TableCell align="left">  <Typography variant='h6'>{order.collectDateFrom}</Typography></TableCell>
           <TableCell align="left"><Typography variant='h6'>{order.orderStatus}</Typography>
            
           </TableCell>
           <TableCell align="left">
              
                {order?.comments.length != 0 && (
                  <Typography variant='h6'>
                  {order?.comments[order.comments.length - 1].length > 15
                    ? order?.comments[order.comments.length - 1].substring(0, 15) + "..."
                    : order?.comments[order.comments.length - 1]}
                  </Typography>
                )}
                

            </TableCell>
           <TableCell align="right">
           <OrderActions 
                order={order} 
                onViewDetails={handleViewDetails} 
                onAddCN={handleAddCN} 
              />
           {/* <Box display="flex" flexDirection="column" gap={2}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => handleViewDetails(order)}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    color: '#528aae',
                    textTransform: 'none',
                    width:"100%",
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',   
                    '&:hover': {
                      backgroundColor: "white",  
                      boxShadow: '0 0 5px  #528aae',  
                    },
                  }}
                >
                  View Details
                </Button>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={() => handleAddCN(order)}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    color: '#528aae',
                    textTransform: 'none',
                    width:"100%",
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',   
                    '&:hover': {
                      backgroundColor: "white",  
                      boxShadow: '0 0 5px  #528aae',  
                    },
                  }}
                >
                  Add CN
                </Button>
              </Box> */}
              </TableCell>
         </TableRow>
         
           
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="order-details-modal"
        aria-describedby="order-details-modal-description"
      >
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 8,
            p: 4,
            }}>
          <Typography id="order-details-modal-title" variant="h5" component="h2" sx={{ fontWeight: '600', marginBottom:"1rem"}}>
            Order Details
          </Typography>
           
          {selectedOrder && (
            <Box id="order-details-modal-description">
               
               <Typography variant="subtitle1" component="div"><b>Order ID:</b> {selectedOrder._id}</Typography>
               <Typography variant="subtitle1" component="div"><b>Capi Tracking Code:</b> {selectedOrder.capiTracking}</Typography>
            <Typography variant="subtitle1" component="div"><b>Origin:</b> {selectedOrder.origin}</Typography>
            <Typography variant="subtitle1" component="div"><b>Destination:</b> {selectedOrder.destination}</Typography>
            <Typography variant="subtitle1" component="div"><b>Total Cost:</b> £{selectedOrder.totalCost}</Typography>
            <Typography variant="subtitle1" component="div"><b>Custom Declaration:</b> {selectedOrder.customDeclaration}</Typography>
            <Typography variant="subtitle1" component="div"><b>Custom Value:</b> £{selectedOrder.customValue}</Typography>
            <Typography variant="subtitle1" component="div"><b>Collection Date From:</b> {selectedOrder.collectDateFrom}</Typography>
                <Typography variant="subtitle1" component="div"><b>Payment Status:</b> {selectedOrder.paymentStatus === 'success' ? <Chip icon={<CheckCircleIcon />} label="Paid" color="success" /> : selectedOrder.paymentStatus}</Typography>
               
                <Typography variant="subtitle1" component="div" sx={{ mt: 2 }}><b>Item Details:</b>
                </Typography>
            

                {selectedOrder.items.map((item, index) => (
                        <Box key={index} sx={{ ml: 2 }}>
                        <Typography variant="body2">Type: {item.type}</Typography>
                        <Typography variant="body2">Weight: {item.weight}kg</Typography>
                        <Typography variant="body2">Dimensions: {item.length} x {item.width} x {item.height} cm</Typography>
                        <Typography variant="body2">Shipping Cost: £{item.shipCost}</Typography>
                        </Box>
                 ))}
                <Typography variant="subtitle1" component="div" sx={{ mt: 2 }}><b>Origin Address:</b></Typography>
                    <Box sx={{ ml: 2 }}>
                    <Typography variant="body2">Full Name: {selectedOrder.originAddress?.fullName}</Typography>
                    <Typography variant="body2">Phone: {selectedOrder.originAddress.phoneISO} {selectedOrder.originAddress.phoneNumber}</Typography>
                    <Typography variant="body2">Address: {selectedOrder.originAddress.address1}, {selectedOrder.originAddress.address2}</Typography>
                    <Typography variant="body2">City: {selectedOrder.originAddress.city}</Typography>
                    <Typography variant="body2">Post Code: {selectedOrder.originAddress.postCode}</Typography>
                    <Typography variant="body2">Country: {selectedOrder.originAddress.country}</Typography>
                    </Box>

                    <Typography variant="subtitle1" component="div" sx={{ mt: 2 }}><b>Destination Address:</b></Typography>
                        <Box sx={{ ml: 2 }}>
                        <Typography variant="body2">Full Name: {selectedOrder.destinationAddress?.fullName}</Typography>
                        <Typography variant="body2">Phone: {selectedOrder.destinationAddress.phoneISO} {selectedOrder.destinationAddress.phoneNumber}</Typography>
                        <Typography variant="body2">Address: {selectedOrder.destinationAddress.address1}, {selectedOrder.destinationAddress.address2}</Typography>
                        <Typography variant="body2">City: {selectedOrder.destinationAddress.city}</Typography>
                        <Typography variant="body2">Post Code: {selectedOrder.destinationAddress.postCode}</Typography>
                        <Typography variant="body2">Country: {selectedOrder.destinationAddress.country}</Typography>
                        </Box>
            </Box>
          )}
        </Box>
      </Modal> 
      
       
      <Modal
        open={modal2Open}
        onClose={() => setModal2Open(false)}
        aria-labelledby="add-cn-modal-title"
        aria-describedby="add-cn-modal-description"
        >
        <Box
            sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            }}
        >
            <Typography id="add-cn-modal-title" variant="h6" component="h2" marginBottom={"1rem"}>
            Add Consignment Number
            </Typography>
 
      <TextField
        id="cn"
        type="text"
        fullWidth
        variant="outlined"
        placeholder='consignement number'
        value={textFieldValue}
        onChange={handleTextFieldChange}
        sx={{
            transition: 'box-shadow 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 0 5px #528aae',
              '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            },
          }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button onClick={() => setModal2Open(false)}>Cancel</Button>
        <Button
          onClick={  
            handleAddCNClick
          }
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            color: '#528aae',
            textTransform: 'none',
            width:"20%",
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',   
            '&:hover': {
              backgroundColor: "white",  
              boxShadow: '0 0 5px  #528aae',  
            },
          }}
        >
          Add
        </Button>
      </Box>
    </Box>
 
    </Modal> 
    </Box> 
      {/* Table and Modals follow here */}
      {/* Rest of your component */}
    </>
  );
};

export default OrderTable;
