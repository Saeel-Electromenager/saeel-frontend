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

export default function DialogConfirmeCodeRegister({
  values,
  dialog,
  setDialog,
}) {
  const handleClose = () => {
    setDialog(false);
  };
  return (
    <Dialog open={dialog}>
      <DialogTitle>Confimez votre inscription</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {values.firstname + ' ' + values.lastname} Pour continuer votre
          inscription vous devais confirmer votre email <br />
          {values.email}
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
        <Button onClick={handleClose}>Annuler</Button>
        <Button>Confirmer</Button>
      </DialogActions>
    </Dialog>
  );
}
