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
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function DialogConfirmeCodeRegister({
  values,
  dialog,
  setDialog,
  setSnackbarOpen,
}) {
  const navigate = useNavigate();

  const [code, setCode] = React.useState('');
  const handleClose = () => {
    setDialog(false);
  };
  const handleCode = (event) => {
    setCode(event.target.value);
  };
  const verifyCode = () => {
    const headers = require('../configurations/headers');
    const axiosConfig = {
      method: 'POST',
      url: 'http://localhost:3000/api/user/confirme-email-code',
      headers: headers,
      data: {
        email: values.email,
        code: code,
      },
    };
    axios(axiosConfig)
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
