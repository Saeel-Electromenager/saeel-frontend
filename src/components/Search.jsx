import { Box, Grid, NativeSelect, Typography } from '@mui/material';
import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/search.css';
import Divider from '@mui/material/Divider';

export default function Search() {
  const [search, editSearch] = React.useState({
    key: '',
    category: 0,
  });
  const handleChange = (prop) => (event) => {
    editSearch({ ...search, [prop]: event.target.value });
  };

  const sss = (e) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        mt: 2,
        alignItems: 'center',
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '34px',
            lineHeight: '51px',
          }}
          component="h1"
        >
          Électromenager
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '19px',
          }}
          component="h2"
        >
          Avec{' '}
          <Typography
            variant="span"
            sx={{
              textDecoration: 'underline',
              textDecorationThickness: '15%',
            }}
          >
            Saeel
          </Typography>
          , Kolchi Sahel
        </Typography>
      </Grid>
      <Grid
        component="form"
        onSubmit={sss}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'calc(100% - 380px)',
          height: 50,
          mt: 1,
          borderStyle: 'solid',
          borderColor: 'blue',
          borderWidth: '4px 0 4px 4px',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, fontFamily: 'Poppins' }}
          placeholder="Cuisinière Samsung"
          value={search.key}
          onChange={handleChange('key')}
          inputProps={{ 'aria-label': 'search saeel' }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <NativeSelect
          defaultValue={0}
          sx={{
            margin: '0 15px',
            fontFamily: 'Poppins',
          }}
          disableUnderline
          value={search.category}
          onChange={handleChange('category')}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={0}>Categories</option>
          <option value={1}>Cuisinière à gaz</option>
          <option value={2}>Four Micro-Ondes</option>
          <option value={3}>Mini Four</option>
          <option value={4}>Plaque de cuisson</option>
          <option value={5}>Hotte Aspirante</option>
          <option value={6}>Lave Linge</option>
          <option value={7}>Climatiseur</option>
          <option value={8}>Lave Vaisselle</option>
          <option value={9}>Congélateur</option>
          <option value={10}>Réfrigérateur</option>
        </NativeSelect>
        <Box
          sx={{
            backgroundColor: 'blue',
          }}
        >
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon sx={{ color: '#fcfcfc' }} />
          </IconButton>
        </Box>
      </Grid>
    </Box>
  );
}
