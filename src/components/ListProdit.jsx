import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
} from '@mui/material';

import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ListProdit() {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    const idPro = localStorage.getItem('token').split(' ')[0];
    axios(axiosConfig('PUT', '/api/product/provider-products/' + idPro))
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function getImage(product) {
    if (product) if (product.Images.length > 0) return product.Images[0].url;
    return 'https://picsum.photos/300/150';
  }

  return (
    <Grid container m="auto" textAlign="center" justifyContent="center">
      <h2>Mes produit</h2>
      <Grid item gap={2} container direction="row" lg={5.7} xs={12}>
        {products.map((product, index) => {
          return (
            <Link key={`${product.idProduct}-${index}`} to="/product/2">
              <Card
                sx={{
                  width: '300px',
                  height: '150px',
                  display: 'flex',
                  justifyContent: 'left',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={getImage(product)}
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {product.createdAt ? product.createdAt.split('T')[0] : ''}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {/* {product.n_product + ' Produits'} */}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Link>
          );
        })}
      </Grid>
    </Grid>
  );
}
