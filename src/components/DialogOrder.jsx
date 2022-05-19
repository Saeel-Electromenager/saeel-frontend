import * as React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import ChooseAdressOrder from './ChooseAdressOrder';
import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';

export default function DialogOrder({ open, setOpen, product }) {
  const navigate = useNavigate();
  const [qtty, setQtty] = React.useState(1);
  const [adresses, setAdresses] = React.useState([]);
  const [selectedAdress, setSelectedAdress] = React.useState('');

  const handleChange = (event) => {
    setSelectedAdress(event.target.value);
    console.log(selectedAdress);
  };
  const newPrice = product.price * (1 - product.discount / 100);
  const handleClose = () => {
    setOpen(false);
  };
  const handleQtty = (event) => {
    setQtty(event.target.value);
  };
  React.useEffect(() => {
    axios(axiosConfig('GET', '/api/adress/'))
      .then((res) => {
        setAdresses(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [open]);

  function takeOrder(event) {
    event.preventDefault();
    axios(
      axiosConfig('POST', '/api/order/new/', {
        idProduct: product.idProduct,
        qtty: qtty,
        idAdress: selectedAdress,
      })
    )
      .then((res) => {
        navigate('/user/' + localStorage.getItem('token').split(' ')[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Dialog
      open={open}
      fullScreen
      onSubmit={takeOrder}
      component="form"
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            {product.title}
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Confirmer
          </Button>
        </Toolbar>
      </AppBar>
      <DialogTitle id="alert-dialog-title">
        Confirmation de la commande
      </DialogTitle>
      <ChooseAdressOrder
        selectedAdress={selectedAdress}
        handleChange={handleChange}
        adresses={adresses}
      />
      <DialogContent sx={{ overflowX: 'hidden' }}>
        <DialogContentText id="alert-dialog-description">
          La quantité à acheter
        </DialogContentText>
        <TextField
          margin="dense"
          fullWidth
          InputProps={{ inputProps: { min: 1, max: product.quantity } }}
          id="qtty"
          label="Quantité"
          type="number"
          variant="outlined"
          value={qtty}
          onChange={handleQtty}
        />
        <Divider sx={{ my: 2 }}>Résumé de la commande</Divider>
        <Typography gutterBottom>
          Achat de : {product.title}
          <br />
          Prix unité : {newPrice + ',00 DA'}
          <br />
          Quandtité à commander : {qtty} Unité(s)
          <br />
          Sous-total : {qtty * newPrice + ',00 DA'}
          <br />
          Livraison : 2000,00 DA
        </Typography>
        <Typography textAlign="center" variant="h5">
          {'Total : '}
          <Typography variant="span" sx={{ color: '#fa533c' }}>
            {newPrice * qtty + 600 + ',00 DA'}
          </Typography>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button type="submit" autoFocus>
          Confirmer
        </Button>
      </DialogActions>
    </Dialog>
  );
}
