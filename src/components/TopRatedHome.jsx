import * as React from 'react';
import { Divider, Grid, Typography, Box } from '@mui/material';
import CardProduct from './CardProduct';

export default function TopRatedHome() {
  const [products, setProducts] = React.useState([
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
      <Grid
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          width: '100%',
          mt: 1,
          gap: '15px',
          alignItems: 'center',
        }}
      >
        {products.map((product, index) => {
          console.log(index);
          if (index < 4)
            return (
              <CardProduct key={`${product.id}-${index}`} product={product} />
            );
          return '';
        })}
      </Grid>
    </Grid>
  );
}
