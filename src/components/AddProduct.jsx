import { Button, Grid, TextField, Select, MenuItem } from '@mui/material';
import React from 'react';

export default function AddProduct() {
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  const [values, setValues] = React.useState({
    categorie: 'Cuisinière à gaz',
    brand: '',
    model: '',
    price: 0,
    description: '',
    discount: 0,
    quantity: 0,
  });
  const AddProduct = () => {
    console.log(values);
  };
  return (
    <Grid
      textAlign="center"
      m={4}
      p={4}
      border="black 1px solid"
      style={{ background: 'white', minWidth: '400px' }}
    >
      <Grid>
        <h2>ajouter un produit </h2>
      </Grid>

      <Grid item xs={6}>
        {' '}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleChange('categorie')}
          value={values.categorie}
        >
          <MenuItem value="Cuisinière à gaz">Cuisinière à gaz</MenuItem>
          <MenuItem value="Four Micro-Ondes">Four Micro-Ondes</MenuItem>
          <MenuItem value="Mini Four">Mini Four</MenuItem>
          <MenuItem value="Plaque de cuisson">Plaque de cuisson </MenuItem>
          <MenuItem value="Hotte Aspirante">Hotte Aspirante</MenuItem>
          <MenuItem value="Lave Linge">Lave Linge</MenuItem>
          <MenuItem value="Climatiseur">Climatiseur</MenuItem>
          <MenuItem value="Lave Vaisselle">Lave Vaisselle</MenuItem>
          <MenuItem value="Congélateur">Congélateur</MenuItem>
          <MenuItem value="Réfrigérateur">Réfrigérateur</MenuItem>
        </Select>
      </Grid>

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
        InputProps={{ inputProps: { min: 1000 } }}
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
        defaultValue="Description  du produit"
        style={{ width: '80%', margin: '15PX' }}
      />
      <Grid onClick={AddProduct}>
        {' '}
        <Button variant="contained">Contained</Button>
      </Grid>
    </Grid>
  );
}
