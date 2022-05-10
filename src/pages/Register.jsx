import {
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
  TextField,
  InputAdornment,
} from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';
import Emailicon from '@mui/icons-material/Email';
import Logo from '../assets/logo.png';
import Img from '../assets/im.jpg';
import axios from 'axios';

import * as React from 'react';

import '../styles/Register.css';

export default function Inscription() {
  const [values, setValues] = React.useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    birthdate: '2000-10-25',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const register = () => {
    const encrypt = require('../controlers/encrypt');
    axios({
      method: 'post',
      url: 'http://192.168.220.228:3000/api/user/signup',
      headers: {
        Authorization2: encrypt,
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      data: values,
    })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

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
        <Grid textAlign="center" spacing={3} p={3}>
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
            EmailIcon
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
          <h6 style={{ color: 'rgba(0,0,0,0.6)' }}>
            {' '}
            doit conternir des chiffres , des lettres ou des symboles
          </h6>
        </Grid>
        <Grid pt={3}>
          <p> date </p>
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
          <h6 style={{ marginRigt: '40px' }}>
            vous avez déja un compte ? <a href="/">connectez vous</a>
          </h6>{' '}
        </Grid>
      </Grid>
      <Grid item md={6}>
        <div class="contenant">
          <img src={Img} alt="" style={{ minWidth: '100%', height: 'auto' }} />
          <div class="texte_centrer">
            « Je voulais un moyen d’acheter des produit électroménager sans me
            déplacer. Mon seul regret, c’est de ne pas avoir choisi Saeel avant
            »
          </div>
          <p class="texte_centrer2">
            Sidali - Etudiant en informatique en en quête d’achat de produit
            électroménager
          </p>
        </div>
      </Grid>
    </Grid>
  );
}
