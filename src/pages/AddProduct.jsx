import { Button, Grid, TextField, Select, MenuItem, Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axiosConfig from '../configurations/axiosConfig';

export default function AddProduct() {
  const [categories, setCategories] = React.useState('');
  const handleChange = (prop) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    axios(axiosConfig('GET', '/api/category')).then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  const [values, setValues] = React.useState({
    idCategory: 0,
    brand: '',
    model: '',
    price: 0,
    description: '',
    discount: 0,
    quantity: 0,
    url: '',
  });

  function CategoriesComponenent() {
    if (!!categories) {
      return (
        <Grid item xs={6}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleChange('idCategory')}
            value={values.idCategory}
          >
            <MenuItem value={0}>Categories</MenuItem>
            {categories.map((category, index) => {
              return (
                <MenuItem
                  key={`${category.idCategory}-${index}`}
                  value={category.idCategory}
                >
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
      );
    } else return '';
  }

  function pushProduct(event) {
    event.preventDefault();
    axios(axiosConfig('POST', '/api/product/add', values))
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }
  return (
    <Box>
      <Header />
      <Grid
        component="form"
        textAlign="center"
        onSubmit={pushProduct}
        m={4}
        p={4}
        border="black 1px solid"
        style={{ background: 'white', minWidth: '400px' }}
      >
        <Grid onClick={() => console.log(categories)}>
          <h2>Ajouter un produit</h2>
        </Grid>

        {CategoriesComponenent()}

        <TextField
          onChange={handleChange('brand')}
          value={values.brand}
          id="nom"
          label="marque"
          required
          style={{ width: '80%', margin: '15PX' }}
        />
        <TextField
          onChange={handleChange('model')}
          value={values.model}
          id="modele"
          label="modele"
          required
          style={{ width: '80%', margin: '15PX' }}
        />
        <TextField
          onChange={handleChange('price')}
          value={values.price}
          InputProps={{ inputProps: { min: 1000 } }}
          id="prix"
          label="prix"
          type="number"
          required
          style={{ width: '80%', margin: '15PX' }}
        />
        <TextField
          onChange={handleChange('discount')}
          value={values.discount}
          id="discount"
          label="discount"
          InputProps={{ inputProps: { min: 0, max: 99 } }}
          type="number"
          style={{ width: '80%', margin: '15PX' }}
        />
        <TextField
          onChange={handleChange('quantity')}
          value={values.quantity}
          InputProps={{ inputProps: { min: 0 } }}
          id="quantité"
          label="quantité"
          type="number"
          required
          style={{ width: '80%', margin: '15PX' }}
        />
        <TextField
          onChange={handleChange('description')}
          value={values.description}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          style={{ width: '80%', margin: '15PX' }}
        />
        <TextField
          onChange={handleChange('url')}
          value={values.url}
          id="image-url"
          label="URL de l'image"
          style={{ width: '80%', margin: '15PX' }}
        />
        <Grid>
          <Button type="submit" variant="contained">
            Ajouter
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
