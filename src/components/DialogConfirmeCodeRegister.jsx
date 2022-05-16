import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function DialogConfirmeCodeRegister({
  values,
  dialog,
  setDialog,
  setSnackbarOpen,
}) {
  const navigate = useNavigate();
  const axiosConfig = require('../configurations/axiosConfig');

  const [code, setCode] = React.useState('');
  const handleClose = () => {
    setDialog(false);
  };
  const handleCode = (event) => {
    setCode(event.target.value);
  };
  const verifyCode = () => {
    axios(
      axiosConfig(
        'POST',
        'http://localhost:3000/api/user/confirme-email-code',
        { login: values.email, code: code }
      )
    )
      .then((data) => {
        console.log(data);
        setSnackbarOpen({ status: true, message: data.message });
        navigate('/login');
      })
      .catch((error) => {
        setSnackbarOpen({
          status: true,
          message: error.response.data.error,
          type: 'error',
        });
        console.log(error.response.data.error);
      });
  };
  return (
    <Dialog open={dialog}>
      <DialogTitle>Confimez votre Email</DialogTitle>
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
          value={code}
          onChange={handleCode}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={verifyCode}>Confirmer</Button>
      </DialogActions>
    </Dialog>
  );
}
