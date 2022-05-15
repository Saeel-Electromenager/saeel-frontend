import {
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import Emailicon from '@mui/icons-material/Email';

import Logo from '../assets/logo.png';
import Img from '../assets/im.jpg';
import axios from 'axios';
import DialogConfirmCodeRegister from '../components/DialogConfirmeCodeRegister';

import * as React from 'react';

import '../styles/Register.css';

export default function Inscription() {
  const [values, setValues] = React.useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    day: 1,
    month: 1,
    year: 1990,
  });

  const [dialog, setDialog] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState({
    status: false,
    message: '',
    type: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const register = () => {
    const month = values.month < 10 ? '0' + values.month : values.month;
    const day = values.day < 10 ? '0' + values.day : values.day;
    const birthdate = values.year + '-' + month + '-' + day;
    const axiosConfig = require('../configurations/axiosConfig');

    axios(
      axiosConfig('post', 'http://localhost:3000/api/user/signup', {
        ...values,
        birthdate: birthdate,
      })
    )
      .then((res) => {
        setSnackbarOpen({
          status: true,
          message: res.data.message,
          type: 'success',
        });
        setDialog(true);
      })
      .catch((error) =>
        setSnackbarOpen({
          status: true,
          message: error.data.message,
          type: 'error',
        })
      );
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen({ ...snackbarOpen, status: false });
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Grid container justifyContent="center">
      <Grid item md={6} textAlign="center">
        <nav style={{ width: '100%', textAlign: 'left' }}>
          {' '}
          <img src={Logo} href="ezzz" alt="" className="logo" />
        </nav>
        <Grid textAlign="center">
          {' '}
          <h1> Inscription</h1>
        </Grid>
        <Grid textAlign="center" p={3}>
          {' '}
          <TextField
            id="nom"
            label="nom"
            variant="outlined"
            value={values.weight}
            onChange={handleChange('lastname')}
            style={{ paddingRight: '40px', width: '40%' }}
          />
          <TextField
            id="prenom"
            label="prenom"
            variant="outlined"
            value={values.weight}
            onChange={handleChange('firstname')}
            style={{ width: '40%' }}
          />{' '}
        </Grid>
        <Grid pb={3}>
          {' '}
          <TextField
            id="utilisateur"
            label="nom d'utilisateur"
            variant="outlined"
            value={values.weight}
            onChange={handleChange('username')}
            style={{ width: '80%' }}
          />
        </Grid>

        <Grid pb={3}>
          {' '}
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {' '}
                  <Emailicon />
                </InputAdornment>
              ),
            }}
            id="mail"
            label="Adresse E-mail"
            type="mail"
            variant="outlined"
            value={values.weight}
            onChange={handleChange('email')}
            style={{ width: '80%' }}
          />{' '}
        </Grid>
        <Grid>
          {' '}
          <TextField
            id="outlined-password-input"
            label="mot de passe"
            type="password"
            autoComplete="current-password"
            value={values.weight}
            onChange={handleChange('password')}
            style={{ width: '80%' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  {' '}
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid textAlign="left">
          {' '}
          <h6 style={{ color: 'rgba(0,0,0,0.6)', paddingLeft: '12%' }}>
            {' '}
            doit conternir des chiffres , des lettres ou des symboles
          </h6>
        </Grid>
        <Grid container p={3}>
          <Grid item xs={2} ml={5}>
            {' '}
            <TextField
              InputProps={{ inputProps: { min: 0, max: 31 } }}
              id="outlined-number"
              label="jour"
              type="number"
              value={values.day}
              onChange={handleChange('day')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            {' '}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.month}
              label="Mois"
              onChange={handleChange('month')}
            >
              <MenuItem value={1}>Janvier</MenuItem>
              <MenuItem value={2}>Février</MenuItem>
              <MenuItem value={3}>Mars</MenuItem>
              <MenuItem value={4}>Avril </MenuItem>
              <MenuItem value={5}>Mai</MenuItem>
              <MenuItem value={6}>Juin</MenuItem>
              <MenuItem value={7}>Juillet</MenuItem>
              <MenuItem value={8}>Aout</MenuItem>
              <MenuItem value={9}>Septembre</MenuItem>
              <MenuItem value={10}>Octobre</MenuItem>
              <MenuItem value={11}>Novembre</MenuItem>
              <MenuItem value={12}>Décembre</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3} md={2}>
            <TextField
              InputProps={{ inputProps: { min: 1940, max: 2020 } }}
              id="outlined-number"
              label="Année"
              type="number"
              value={values.year}
              onChange={handleChange('year')}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>

        <Grid p={2}>
          {' '}
          <FormControlLabel
            value="end"
            control={<Checkbox />}
            label={
              <div>
                <span> j'ai lu et j'accepte </span>{' '}
                <a href="/"> les conditions d'utilisation </a>
              </div>
            }
            labelPlacement="end"
          />
        </Grid>
        <Grid
          item
          md={12}
          xs={10}
          lg={11}
          textAlign="center"
          style={{ paddingBottom: '16px' }}
        >
          {' '}
          <Button
            onClick={register}
            variant="contained"
            style={{ background: '#5C4EBD' }}
          >
            S'inscrire
          </Button>
        </Grid>
        <Grid item md={12} xs={10} lg={11} textAlign="center">
          {' '}
          <h5 style={{ marginRigt: '40px' }}>
            vous avez déja un compte ? <Link to="/login">connectez vous</Link>
          </h5>{' '}
        </Grid>
      </Grid>
      <Grid item md={6} className="image">
        <div className="contenant">
          <img src={Img} alt="" style={{ minWidth: '100%', height: 'auto' }} />
          <div className="texte_centrer">
            « Je voulais un moyen d’acheter des produit électroménager sans me
            déplacer. Mon seul regret, c’est de ne pas avoir choisi Saeel avant
            »
          </div>
          <p className="texte_centrer2">
            Sidali - Etudiant en informatique en en quête d’achat de produit
            électroménager
          </p>
        </div>
      </Grid>

      <DialogConfirmCodeRegister
        values={values}
        dialog={dialog}
        setDialog={setDialog}
        setSnackbarOpen={setSnackbarOpen}
      />
      <Snackbar
        open={snackbarOpen.status}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarOpen.type}
          sx={{ width: '100%' }}
        >
          {snackbarOpen.message}
        </Alert>
      </Snackbar>
      
    </Grid>
  );
}
