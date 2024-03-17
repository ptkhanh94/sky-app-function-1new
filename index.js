import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const ConfirmDialog = ({ message, onConfirm, onCancel }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  const handleCancel = () => {
    onCancel();
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open Confirm Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button startIcon={<CheckIcon />} onClick={handleConfirm} color="primary">
            Confirm
          </Button>
          <Button startIcon={<CloseIcon />} onClick={handleCancel} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

ConfirmDialog.propTypes = {
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmDialog;
