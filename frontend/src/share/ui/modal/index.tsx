import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '520px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
};

export interface BasicModalProps {
    setOpen: (value: boolean) => void;
    open: boolean;
    children?: any;
    title?: any;
}

export function BasicModal({ open, setOpen, children, title }: BasicModalProps) {
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box display="flex" justifyContent="space-between" pb={1.5}>
                        <Typography variant="h6" component="span">{title}</Typography>
                        <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                    </Box>
                    <Box>
                        {children}
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}