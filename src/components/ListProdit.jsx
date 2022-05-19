import { Grid, Table } from '@mui/material';

import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';
import React, { useEffect } from 'react';

export default function ListProdit({ admin }) {
  const [products, setproducts] = React.useState('');
  //const [idProvider, setProvider] = React.useState('');

  useEffect(() => {
    const idPro = localStorage.getItem('token').split(' ')[0];
    console.log('-----------------------' + idPro);
    axios(axiosConfig('PUT', '/api/product/provider-products/' + idPro))
      .then((res) => {
        setproducts(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Grid container m="auto" justifyContent="space-between">
      <Grid item lg={5.7} xs={12} textAlign="left">
        <h2>Liste de mes produit</h2>
        <Table content={products} />
      </Grid>
    </Grid>
  );
}
