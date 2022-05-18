import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Box, Stack } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardProduct from '../components/CardProduct';
import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';
import HomeSearch from '../components/HomeSearch';
import { useMediaQuery } from '@mui/material';

export default function Search() {
  const { searchCategory, searchKey } = useParams();
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios(
      axiosConfig('PUT', `/api/product/search/${searchCategory}/${searchKey}`)
    )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, [searchCategory, searchKey]);

  return (
    <Container maxWidth="xl">
      <Header></Header>

      <Box
        sx={{ bgcolor: 'white', borderRadius: '10px', pt: 3, pb: 5 }}
        minHeight="500px"
      >
        <Container maxWidth="xl">
          <HomeSearch />
          <Stack
            sx={{ marginTop: '60px' }}
            direction={useMediaQuery('(min-width:700px)') ? 'row' : 'column'}
            spacing={2}
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

      <Footer></Footer>
    </Container>
  );
}
