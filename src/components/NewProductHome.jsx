import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import CardProduct from './CardProduct';
import { Link } from 'react-router-dom';

export default function NewProductHome() {
  function maxItem() {
    const width = window.innerWidth;
    if (width > 1896) return 6;
    if (width > 1631) return 5;
    if (width > 1366) return 4;
    if (width > 992) return 3;
    return 4;
  }
  const [products] = React.useState([
    {
      id: 233,
      category: '',
      title: 'Barbecue gaz Weber Spirit II E-310..',
      model: 'Galaxy 56K T5',
      price: 70000,
      description: 'LOREM MA GUEULE',
      discount: 14000,
      quantity: 10,
      rating: {
        rate: 4,
        raters: 23,
      },
      images: [
        'https://boulanger.scene7.com/is/image/Boulanger/0077924086908_h_f_l_0?wid=500&hei=500',
      ],
    },
    {
      id: 3,
      category: '',
      title: 'Barbecue gaz Weber Spirit II E-310..',
      model: 'Galaxy 56K T5',
      price: 70000,
      description: 'LOREM MA GUEULE',
      discount: 14000,
      quantity: 10,
      rating: {
        rate: 4,
        raters: 23,
      },
      images: [
        'https://boulanger.scene7.com/is/image/Boulanger/0077924086908_h_f_l_0?wid=500&hei=500',
      ],
    },
    {
      id: 232,
      category: '',
      title: 'Barbecue gaz Weber Spirit II E-310..',
      model: 'Spirit II E-310',
      price: 90000,
      description: 'LOREM MA GUEULE',
      discount: 17000,
      quantity: 10,
      rating: {
        rate: 2.4,
        raters: 3,
      },
      images: [
        'https://boulanger.scene7.com/is/image/Boulanger/5060359289131_h_f_l_0?wid=500&hei=500',
      ],
    },
    {
      id: 133,
      category: '',
      title: 'Barbecue gaz Weber Spirit II E-310..',
      model: 'Galaxy 56K T5',
      price: 70000,
      description: 'LOREM MA GUEULE',
      discount: 14000,
      quantity: 10,
      rating: {
        rate: 4,
        raters: 23,
      },
      images: [
        'https://boulanger.scene7.com/is/image/Boulanger/8003437938115_h_p_l_0?wid=500&hei=500',
      ],
    },
    {
      id: 23,
      category: '',
      title: 'Barbecue gaz Weber Spirit II E-310..',
      model: 'Galaxy 56K T5',
      price: 70000,
      description: 'LOREM MA GUEULE',
      discount: 14000,
      quantity: 10,
      rating: {
        rate: 4,
        raters: 23,
      },
      images: [
        'https://boulanger.scene7.com/is/image/Boulanger/7332543834808_h_f_l_0?wid=500&hei=500',
      ],
    },
  ]);
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
