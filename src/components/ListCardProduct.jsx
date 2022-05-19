import * as React from 'react';
import { Box, Container, Stack } from '@mui/material';
import HomeSearch from './HomeSearch';
import CardProduct from './CardProduct';
import { useMediaQuery } from '@mui/material';

export default function ListCardProduct({ products }) {
  return (
    <Box
      sx={{ bgcolor: 'white', borderRadius: '10px', pt: 3, pb: 5 }}
      minHeight="500px"
    >
      <Container maxWidth="xl">
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
      </Container>
    </Box>
  );
}
