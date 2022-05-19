import * as React from 'react';
import { Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopSaeelComponenet from '../components/ListCardProduct';

export default function TopSaeel() {
  return (
    <Container maxWidth="xl">
      <Header></Header>

      <TopSaeelComponenet />

      <Footer></Footer>
    </Container>
  );
}
