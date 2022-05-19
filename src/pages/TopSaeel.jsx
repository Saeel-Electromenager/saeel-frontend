import * as React from 'react';
import { Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopSaeelComponenet from '../components/ListCardProduct';

import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';

export default function TopSaeel() {
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
    <Container maxWidth="xl">
      <Header></Header>

      <TopSaeelComponenet products={products} />

      <Footer></Footer>
    </Container>
  );
}
