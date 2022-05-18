import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import CardProduct from './CardProduct';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';

export default function TopRatedHome() {
  function maxItem() {
    const width = window.innerWidth;
    if (width > 1896) return 6;
    if (width > 1631) return 5;
    if (width > 1366) return 4;
    if (width > 992) return 3;
    return 4;
  }
  //  Format we need
  // {
  //   id: 233,
  //   category: '',
  //   title: 'Barbecue gaz Weber Spirit II E-310..',
  //   model: 'Galaxy 56K T5',
  //   price: 70000,
  //   description: 'LOREM MA GUEULE',
  //   discount: 14000,
  //   quantity: 10,
  //   rating: {
  //     rate: 4,
  //     raters: 23,
  //   },
  //   images: [
  //     'https://boulanger.scene7.com/is/image/Boulanger/0077924086908_h_f_l_0?wid=500&hei=500',
  //   ],
  // },

  const [products, setProduct] = React.useState([]);

  React.useEffect(() => {
    axios(axiosConfig('GET', '/api/product/top-rated'))
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Grid sx={{ width: '100%' }}>
      <Grid
        container
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
          Les mieux notés
        </Typography>
        <Link
          className="show-more-top-rate-products"
          to="/top-rate"
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
        container
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
                marker="Rate"
                product={product}
              />
            );
          return '';
        })}
      </Grid>
    </Grid>
  );
}
