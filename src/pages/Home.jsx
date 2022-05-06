import '../styles/Home.css';
import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/Lock';
import Email from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';

function Home() {
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const login = (e) => {
    e.preventDefault();
    // TODO
  };

  return (
    <div className="App">
      <Box
        onSubmit={login}
        component="form"
        autoComplete="off"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
      >
        <TextField
          sx={{ margin: '10px' }}
          fullWidth
          label="E-mail"
          variant="outlined"
          className="test"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <br />
        <TextField
          sx={{ margin: '10px' }}
          label="Password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <br />
        <Button type="submit" variant="contained">
          Se connecter
        </Button>
      </Box>
    </div>
  );
}

export default Home;
