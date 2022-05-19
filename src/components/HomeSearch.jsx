import { Box, Grid, NativeSelect, Typography } from '@mui/material';
import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/search.css';
import { useMediaQuery } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';

export default function Search() {
  const navigate = useNavigate();
  const [categories, setCategories] = React.useState('');
  const [search, editSearch] = React.useState({
    key: '',
    category: 0,
  });
  React.useEffect(() => {
    axios(axiosConfig('GET', '/api/category')).then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  const handleChange = (prop) => (event) => {
    editSearch({ ...search, [prop]: event.target.value });
  };

  const searchNow = (e) => {
    e.preventDefault();
    if (!!search.key)
      return navigate(`/search/${search.category}/${search.key}`);
    navigate(`/search/${search.category}/allOfSaeel`);
  };

  function CategoriesComponenent() {
    if (!!categories) {
      return (
        <NativeSelect
          style={{
            display: window.innerWidth < 650 ? 'none' : '',
            margin: '0 15px',
            fontFamily: 'Poppins',
          }}
          disableUnderline
          value={search.category}
          onChange={handleChange('category')}
          inputProps={{
            name: 'category',
            id: 'category-search-selector',
          }}
        >
          <option value={0}>Categories</option>
          {categories.map((category, index) => {
            return (
              <option
                key={`${category.idCategory}-${index}`}
                value={category.idCategory}
              >
                {category.name}
              </option>
            );
          })}
        </NativeSelect>
      );
    } else return '';
  }

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
        onSubmit={searchNow}
        width={
          useMediaQuery('(min-width:1050px)') ? 'calc(100% - 380px)' : '100%'
        }
        marginTop={useMediaQuery('(min-width:1050px)') ? 1 : 2}
        sx={{
          display: 'flex',
          alignItems: 'center',

          height: 50,
          borderStyle: 'solid',
          borderColor: '#5C4EBD',
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
        <Divider
          sx={{
            display: window.innerWidth < 650 ? 'none' : '',
            height: 28,
            m: 0.5,
          }}
          orientation="vertical"
        />
        {CategoriesComponenent()}
        <Box
          sx={{
            backgroundColor: '#5C4EBD',
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
