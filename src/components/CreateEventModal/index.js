import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";

const CreateEventModal = ({ modalOpen, handleClose }) => {
  return (
    <Dialog open={modalOpen}>
      <DialogTitle id="form-dialog-title">Create new event</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter the event information</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Event title"
          fullWidth
        />
        <TextField
          margin="dense"
          id="description"
          label="Event description"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateEventModal;
