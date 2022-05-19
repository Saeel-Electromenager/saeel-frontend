import * as React from 'react';
import { Grid, Stack } from '@mui/material';
import HomeSearch from './HomeSearch';
import CardProduct from './CardProduct';
import { useMediaQuery } from '@mui/material';

import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';

export default function TopSaeelBody() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios(axiosConfig('GET', '/api/product/top-saeel'))
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Grid>
      <HomeSearch />
      <Stack
        flexWrap="wrap"
        sx={{ marginTop: '60px' }}
        direction={useMediaQuery('(min-width:700px)') ? 'row' : 'column'}
        gap="20px"
      >
        {products.map((product, index) => {
          return (
            <CardProduct
              key={`${product.id}-${index}`}
              marker="Rate"
              product={product}
            />
          );
        })}
      </Stack>
    </Grid>
  );
}
