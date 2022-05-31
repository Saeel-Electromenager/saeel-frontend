import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import CardProduct from './CardProduct';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';

export default function NewProductHome() {
  function maxItem() {
    const width = window.innerWidth;
    if (width > 1896) return 6;
    if (width > 1631) return 5;
    if (width > 1366) return 4;
    if (width > 992) return 3;
    return 4;
  }
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios(axiosConfig('GET', '/api/product/new-products'))
      .then((res) => setProducts(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Grid sx={{ width: '100%' }}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '30px',
          }}
        >
          Les nouveaux produits
        </Typography>
        <Link
          className="show-more-top-rate-products"
          to="/new-products"
          style={{
            textDecoration: 'none',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '27px',
          }}
        >
          Voir plus
        </Link>
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: '100%',
          mt: 1,
          gap: '15px',
          alignItems: 'center',
        }}
      >
        {products.map((product, index) => {
          if (index < maxItem())
            return (
              <CardProduct
                key={`${product.id}-${index}`}
                marker="New"
                product={product}
              />
            );
          return '';
        })}
      </Grid>
    </Grid>
  );
}
