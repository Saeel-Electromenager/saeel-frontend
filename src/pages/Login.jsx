import React from 'react';

import {
  TextField,
  Grid,
  Container,
  Button,
  InputAdornment,
  Typography,
  Snackbar,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import loginIcon from '../assets/img_bac.jpg';
import '../styles/Login.css';
import Logo from '../assets/logo.png';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';

const axiosConfig = require('../configurations/axiosConfig');

export default function Connexion() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    login: '',
    password: '',
  });
  const [showPassword, setShowPassword] = React.useState(false);
  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }
  const [dialogValues, setDialogValues] = React.useState({
    code: '',
    open: false,
  });
  const handleClose = () => {
    setDialogValues({ ...dialogValues, open: false });
  };
  const handleCode = (event) => {
    setDialogValues({ ...dialogValues, code: event.target.value });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [snackbarOpen, setSnackbarOpen] = React.useState({
    status: false,
    message: '',
    type: '',
  });
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen({ ...snackbarOpen, status: false });
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const login = (event) => {
    event.preventDefault();
    axios(axiosConfig('POST', '/api/user/login', values))
      .then((res) => {
        localStorage.setItem('token', res.data.idUser + ' ' + res.data.token);
        setSnackbarOpen({
          status: true,
          message: 'Heureux de vous revoir ' + res.data.firstname + ' 💙',
          type: 'success',
        });
        if (res.data.status === 0) {
          setDialogValues({ ...dialogValues, open: true });
        } else navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setSnackbarOpen({
          status: true,
          message: error.response.data.error || 'Erreur inattendus 😅',
          type: 'error',
        });
      });
  };
  const verifyCode = () => {
    axios(
      axiosConfig('POST', '/api/user/confirme-email-code', {
        login: values.login,
        code: dialogValues.code,
      })
    )
      .then((res) => {
        console.log(res);
        setSnackbarOpen({
          status: true,
          message: res.data.message,
          type: 'success',
        });
        setDialogValues({ open: false, code: '' });
        setTimeout(navigate('/'), 5000);
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
  const resentCode = () => {
    axios(
      axiosConfig('POST', '/api/user/confirme-email-get-code', {
        login: values.login,
      })
    )
      .then((res) => {
        console.log(res);
        setDialogValues({ ...dialogValues, code: '' });
        setSnackbarOpen({
          status: true,
          message: res.data.message,
          type: 'success',
        });
      })
      .catch((error) => {
        console.log(error);
        setSnackbarOpen({
          status: true,
          message: error.response.data.error,
          type: 'error',
        });
      });
  };

  return (
    <Container>
      <Link to="/">
        <nav style={{ width: '100%', height: '100px' }}>
          <img src={Logo} alt="logo" className="logo" />
        </nav>
      </Link>
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={7} xs={12} textAlign="center" className="image2">
          <img
            className="icon-img"
            src={loginIcon}
            style={{ width: '500PX', height: '460px' }}
            alt="icon"
          />
        </Grid>
        <Grid item md={5} xs={11} paddingLeft="20PX">
          <h1>Re Bonjour !</h1>
          <p className="mb-0">
            Pour rester connecté avec nous, veuillez-vous identifier avec votre
            adresse email et votre mot de passe..
          </p>

          <Grid onSubmit={login} component="form">
            <Grid
              item
              md={12}
              xs={10}
              lg={11}
              style={{ paddingTop: '26px', paddingBottom: '26px' }}
            >
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                type="text"
                id="outlined-basic"
                label="Email ou nom d'utilisateur"
                variant="outlined"
                value={values.login}
                onChange={handleChange('login')}
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={10}
              lg={11}
              style={{ paddingBottom: '20px' }}
            >
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                type={showPassword ? 'text' : 'password'}
                id="o"
                label="password"
                variant="outlined"
                value={values.password}
                onChange={handleChange('password')}
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid>
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="se souvenir de moi "
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
              <Button
                type="submit"
                variant="contained"
                style={{ background: '#5C4EBD' }}
              >
                Se Connecter
              </Button>
            </Grid>
          </Grid>
          <Grid item md={12} xs={10} lg={11} textAlign="center">
            <Typography
              component="h6"
              sx={{
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '13px',
                lineHeight: '130%',
              }}
            >
              vous n'etes pas encore inscrit ?{' '}
              <Link to="/register">Rejoignez-nous!</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
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

      <Dialog open={dialogValues.open}>
        <DialogTitle>Confimez votre Email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {values.login} Pour continuer vous devez confirmer votre email{' '}
            <br />
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
            value={dialogValues.code}
            onChange={handleCode}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={resentCode}>Renvoyé le code</Button>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={verifyCode}>Confirmer</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
