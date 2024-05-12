import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem, Modal, TextField, Button, Typography, Select, InputLabel, FormControl } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function OrderActions({ order, onViewDetails, onAddCN }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [modalCommentOpen, setModalCommentOpen] = useState(false);
    const [modalViewCommentsOpen, setModalViewCommentsOpen] = useState(false); // New state for viewing comments modal
    const [modalChangeStatusOpen, setModalChangeStatusOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenCommentModal = () => {
        setModalCommentOpen(true);
        handleClose();
    };

    const handleCloseCommentModal = () => {
        setModalCommentOpen(false);
    };

    const handleOpenViewCommentsModal = () => {
        setModalViewCommentsOpen(true); // Open the view comments modal
        handleClose();
    };

    const handleCloseViewCommentsModal = () => {
        setModalViewCommentsOpen(false); // Close the view comments modal
    };

    const handleOpenChangeStatusModal = () => {
        setModalChangeStatusOpen(true);
        handleClose();
    };

    const handleCloseChangeStatusModal = () => {
        setModalChangeStatusOpen(false);
    };

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const handleUpdateStatus = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/status/${order._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: selectedStatus }),
            });
            if (!response.ok) {
                throw new Error('Failed to update status');
            }
            console.log('Status updated successfully');
            handleCloseChangeStatusModal();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSendComment = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/admin/comment/${order._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment }),
            });
            if (!response.ok) {
                throw new Error('Failed to send comment');
            }
            console.log('Comment added successfully');
            setComment('');
            handleCloseCommentModal();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Box display="flex" flexDirection="column" gap={2}>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                    color: '#528aae',
                }}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: 48 * 4.5,
                        width: '20ch',
                    },
                }}
            >
                <MenuItem onClick={() => { onViewDetails(order); handleClose(); }}>View Details</MenuItem>
                <MenuItem onClick={handleOpenViewCommentsModal}>View Comments</MenuItem> {/* Updated to view comments */}
                <MenuItem onClick={() => { onAddCN(order); handleClose(); }}>Add CN</MenuItem>
                <MenuItem onClick={handleOpenCommentModal}>Add Comment</MenuItem>
                <MenuItem onClick={handleOpenChangeStatusModal}>Change Status</MenuItem>
            </Menu>

            {/* Add Comment Modal */}
            <Modal
                open={modalCommentOpen}
                onClose={handleCloseCommentModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Comment
                    </Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="comment"
                        label="Comment"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button onClick={handleSendComment}>Send</Button>
                </Box>
            </Modal>

            {/* View Comments Modal */}
            <Modal
                open={modalViewCommentsOpen}
                onClose={handleCloseViewCommentsModal}
                aria-labelledby="view-comments-modal-title"
                aria-describedby="view-comments-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="view-comments-modal-title" variant="h6" component="h2">
                        Comments
                    </Typography>
                    {order.comments && order.comments.map((comment, index) => (
                        <Box sx={{backgroundColor:"#D3D3D3", p:2, m:1, borderRadius:"5px"}}>
                        <Typography key={index} sx={{ mt: 0}}>
                           {index+1}. {comment}
                        </Typography>
                        </Box>
                    ))}
                    <Button onClick={handleCloseViewCommentsModal} sx={{ mt: 2 }}>Close</Button>
                </Box>
            </Modal>

            {/* Status Modal */}
            <Modal
                open={modalChangeStatusOpen}
                onClose={handleCloseChangeStatusModal}
                aria-labelledby="change-status-modal-title"
                aria-describedby="change-status-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <Typography id="change-status-modal-title" variant="h6" component="h2" marginBottom={2}>
                        Change Order Status
                    </Typography>
                    <FormControl fullWidth>
                        <InputLabel id="order-status-select-label">Status</InputLabel>
                        <Select
                            labelId="order-status-select-label"
                            id="order-status-select"
                            value={selectedStatus}
                            label="Status"
                            onChange={handleStatusChange}
                        >
                            <MenuItem value="In-progress">In-progress</MenuItem>
                            <MenuItem value="Delivered">Delivered</MenuItem>
                            <MenuItem value="Refunded">Refunded</MenuItem>
                            <MenuItem value="Cancelled">Cancelled</MenuItem>
                            <MenuItem value="CN Required">CN Required</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button onClick={handleUpdateStatus} sx={{ mt: 2 }}>Update Order Status</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}