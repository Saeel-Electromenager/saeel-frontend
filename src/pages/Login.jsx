import React from 'react';

import {
  TextField,
  Grid,
  Container,
  Button,
  InputAdornment,
  Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';

import loginIcon from '../assets/img_bac.jpg';
import '../styles/Login.css';
import Logo from '../assets/logo.png';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';
export default function Connexion() {
  const [values, setValues] = React.useState({
    login: '',
    password: '',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const login = () => {
    const encrypt = require('../controlers/encrypt');
    axios({
      method: 'post',
      url: 'http://192.168.220.228:3000/api/user/login',
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
    <div className="grid">
      <Container>
        <nav style={{ width: '100%', height: '100px' }}>
          {' '}
          <img src={Logo} alt="logo" className="logo" />
        </nav>
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={7} xs={12} textAlign="center" className="image2">
            {' '}
            <img
              className="icon-img"
              src={loginIcon}
              style={{ width: '500PX', height: '460px' }}
              alt="icon"
            />{' '}
          </Grid>
          <Grid item md={5} xs={11} paddingLeft="20PX">
            <h1>Re Bonjour !</h1>
            <p className="mb-0">
              Pour rester connecté avec nous, veuillez-vous identifier avec
              votre adresse email et votre mot de passe..
            </p>

            <Grid>
              <Grid
                item
                md={12}
                xs={10}
                lg={11}
                style={{ paddingTop: '26px', paddingBottom: '26px' }}
              >
                {' '}
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {' '}
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  type="email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={values.weight}
                  onChange={handleChange('login')}
                  style={{ width: '100%' }}
                />{' '}
              </Grid>
              <Grid
                item
                md={12}
                xs={10}
                lg={11}
                style={{ paddingBottom: '20px' }}
              >
                {' '}
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        {' '}
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  type="password"
                  id="o"
                  label="password"
                  variant="outlined"
                  value={values.weight}
                  onChange={handleChange('password')}
                  style={{ width: '100%' }}
                />{' '}
              </Grid>
              <Grid>
                {' '}
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
                {' '}
                <Button
                  variant="contained"
                  style={{ background: '#5C4EBD' }}
                  onClick={login}
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
                <Link to="/register">Connexion</Link>
              </Typography>{' '}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
