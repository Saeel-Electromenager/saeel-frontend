import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';

export default function DialogConfirmeCodeRegister({ values, setCode }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confimez votre inscription</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {values.firstname + ' ' + values.lastname} Pour continuer votre
          inscription vous devais confirmer votre email
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="code"
          label="Code confirmation"
          type="number"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}
